import React from "react";
import room1 from "./img/room1.jpg";
import room2 from "./img/room2.jpg";
import room3 from "./img/room3.jpg";

function RoomCard() {
  const rooms = [
    {
      id: 1,
      name: "ห้องดีลักซ์",
      price: "฿2,845",
      promotion: "ลดพิเศษ 20% สำหรับการจองวันนี้!",
      image: room1,
    },
    {
      id: 2,
      name: "ห้องซูพีเรีย",
      price: "฿2,845",
      promotion: "ฟรีอาหารเช้าสำหรับ 2 ท่าน!",
      image: room2,
    },
    {
      id: 3,
      name: "ห้องสวีท",
      price: "฿2,845",
      promotion: "เข้าพัก 3 คืน ฟรี 1 คืน!",
      image: room3,
    },
  ];

  return (
    <div className="room-table">
      {rooms.map((room, index) => (
        <div
          className={`room-row ${index % 2 === 0 ? "even-row" : "odd-row"}`}
          key={room.id}
        >
          <div className="room-image-container">
            <img src={room.image} alt={room.name} className="room-image" />
          </div>
          <div className="room-details">
            <h3 className="room-name">{room.name}</h3>
            <p className="room-promotion">{room.promotion}</p>
            <p className="room-price">
              ราคาที่ดีที่สุด! <span className="highlight">{room.price}</span>
            </p>
          </div>
          <div className="room-action">
            <button className="details-button">รายละเอียด</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomCard;
