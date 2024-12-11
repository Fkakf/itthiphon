import React from "react";

function LocationWithMap() {
  return (
    <div className="location-container">
      {/* Full-Sized Map */}
      <div className="map-large">
        <iframe
          title="Hotel Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.8567114892393!2d98.95967467653365!3d18.7967622121749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a96d6db091f%3A0xd66d6b72e0fa621c!2z4Lij4Li54LiZ4Liy4LiK4LiZ4LmMIOC4m-C4uOC4h-C4guC4quC5jA!5e0!3m2!1sth!2sth!4v1695798450283!5m2!1sth!2sth"
          width="100%"
          height="400"
          style={{ border: "0", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Address and Thumbnail Map */}
      <div className="info-section">
        {/* Address Info */}
        <div className="location-info">
          <h2>ที่อยู่</h2>
          <p>โรงแรมคุ้มภูคำ เชียงใหม่</p>
          <p>14/23 ถนนคลองชลประทาน ต.ช้างเผือก</p>
          <p>อ.เมือง จ.เชียงใหม่ 50300</p>
          <p>โทร: (66) 53 400 450 - 2</p>
          <p>มือถือ: (66) 86 428 0401</p>
          <p>Email: Khumphucomehotel</p>
        </div>

        {/* Small Map Thumbnail */}
        <div className="map-thumbnail">
          <h3>แผนที่ย่อ</h3>
          <img
            src="https://www.khumphucome.com/assets/uploads/profile/98bf4-map-02_resized.jpg" // Replace with actual thumbnail image
            alt="Map Thumbnail"
            className="thumbnail-image"
          />    
        </div>
      </div>
    </div>
  );
}

export default LocationWithMap;
