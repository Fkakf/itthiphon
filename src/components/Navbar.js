import React from "react";
import logo from "./img/logos.png";

function Navbar() {
  const styles = {
    navbarContainer: {
      backgroundColor: "#fff", // White background for minimalism
      padding: "20px 20px", // Add some padding for a cleaner look
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Light shadow for depth
    },
    navbar: {
      fontFamily: "'Roboto', sans-serif", // A modern, clean font
      color: "#333", // Dark gray color for text
      textTransform: "uppercase", // Uppercase text for a sleek look
    },
    logo: {
      display: "flex",
      alignItems: "center",
      color: "#333", // Dark gray for the logo
      textDecoration: "none",
      fontWeight: "bold",
    },
    logoImage: {
      height: "100px", // Adjust the logo size
      marginRight: "12px",
    },
    navLink: {
      color: "#333", // Dark gray text color
      margin: "0 15px",
      fontSize: "1rem",
      textDecoration: "none",
      fontWeight: "500", // Slightly bolder text
      transition: "color 0.3s, transform 0.3s", // Smooth hover effect
    },
    navLinkHover: {
      color: "#8B572A", // Brown shade on hover
      transform: "scale(1.1)", // Slightly enlarge on hover
    },
    navbarToggler: {
      border: "none",
      backgroundColor: "transparent", // Transparent background for the toggler
    },
    navbarTogglerIcon: {
      color: "#333", // Dark color for the hamburger icon
    },
  };

  return (
    <div style={styles.navbarContainer}>
      <nav className="navbar navbar-expand-lg" style={styles.navbar}>
        <div className="container-fluid">
          <a href="#" style={styles.logo}>
            <img src={logo} alt="Hotel Logo" style={styles.logoImage} />
            <h4>โรงแรมคุ้มภูคำ </h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={styles.navbarToggler}
          >
            <span
              className="navbar-toggler-icon"
              style={styles.navbarTogglerIcon}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={styles.navLink}
                  onMouseOver={(e) => (e.target.style.color = styles.navLinkHover.color)}
                  onMouseOut={(e) => (e.target.style.color = styles.navLink.color)}
                >
                  หน้าแรก
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={styles.navLink}
                  onMouseOver={(e) => (e.target.style.color = styles.navLinkHover.color)}
                  onMouseOut={(e) => (e.target.style.color = styles.navLink.color)}
                >
                  จองห้อง
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={styles.navLink}
                  onMouseOver={(e) => (e.target.style.color = styles.navLinkHover.color)}
                  onMouseOut={(e) => (e.target.style.color = styles.navLink.color)}
                >
                  ติดต่อเรา
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={styles.navLink}
                  onMouseOver={(e) => (e.target.style.color = styles.navLinkHover.color)}
                  onMouseOut={(e) => (e.target.style.color = styles.navLink.color)}
                >
                  ล็อกอิน
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
