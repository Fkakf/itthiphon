import React from "react";
import hotelImage from "./img/img1.jpg";

function IntroSection() {
  return (
    <div className="intro-section">
      <div className="intro-image-container">
        <img src={hotelImage} alt="Hotel" className="intro-image" />
      </div>
      <div className="intro-text">
        <h2 className="intro-heading">โรงแรมคุ้มภูคำ เชียงใหม่</h2>
        <p>
          โรงแรมคุ้มภูคำ เชียงใหม่ สะท้อนถึงความงามของวัฒนธรรมล้านนา
          ที่ผสมผสานกับความทันสมัยได้อย่างลงตัว โรงแรมตั้งอยู่ใจกลางเมืองเชียงใหม่
          ใกล้สถานที่ท่องเที่ยวสำคัญ พร้อมด้วยสิ่งอำนวยความสะดวกครบครัน
          และการบริการระดับ 5 ดาวที่จะทำให้การพักผ่อนของคุณพิเศษที่สุด
        </p>
        <ul>
          <li>ห้องพักหรูหราพร้อมการตกแต่งที่เป็นเอกลักษณ์</li>
          <li>สิ่งอำนวยความสะดวกครบครัน</li>
          <li>บริการระดับ 5 ดาวที่สร้างความประทับใจ</li>
        </ul>
      </div>
    </div>
  );
}

export default IntroSection;
