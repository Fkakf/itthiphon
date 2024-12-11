import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Content Section */}
      <div className="footer-content">
        <h3>ติดต่อเรา</h3>
        <p>Khun Phucome Hotel & Convention Hall</p>
        <p>
          14/23 ถนนคลองชลประทาน ต.ช้างเผือก อ.เมือง จ.เชียงใหม่ <br />
          50300 ประเทศไทย
        </p>
        <p>
          <span className="footer-icon">📞</span> (66) 53 400 450 - 2 <br />
          <span className="footer-icon">✉️</span> info@khumphucome.com
        </p>
        <p>Khumphucomehotel</p>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © 2024 Khum Phucome Hotel. All rights reserved. by{" "}
          <a href="https://hotelbiz.com" target="_blank" rel="noopener noreferrer">
            Hotelbiz
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
