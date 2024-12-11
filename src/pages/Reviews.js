import React from "react";
import user1 from "./img/user1.jpg";
import user2 from "./img/user1.jpg";
import user3 from "./img/user1.jpg";

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "นนท์ชัย ไทยดำ",
      rating: 5,
      comment: "บริการเยี่ยมมาก! แนะนำให้มาพักที่นี่",
      image: user1,
    },
    {
      id: 2,
      name: "อิทธิพล ใจบุญ",
      rating: 4,
      comment: "บรรยากาศดี แต่ห้องพักยังไม่ค่อยสะอาดเท่าที่คิด",
      image: user2,
    },
    {
      id: 3,
      name: "อาวาธี",
      rating: 3,
      comment: "สถานที่ดี แต่การบริการต้องปรับปรุง",
      image: user3,
    },
  ];

  return (
    <div className="reviews">
      <h2 className="reviews-heading">รีวิวจากผู้เข้าพัก</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <img
              src={review.image}
              alt={review.name}
              className="review-image"
            />
            <div className="review-content">
              <h4 className="review-name">{review.name}</h4>
              <p className="review-comment">{review.comment}</p>
              <p className="review-rating">
                {Array(review.rating).fill("⭐").join("")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
