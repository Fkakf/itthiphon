import React from 'react';

function Carousel() {
  const styles = {
    carouselItem: {
      height: '500px', // Set a fixed height to maintain consistency across slides
      objectFit: 'cover', // Ensure images cover the container without distortion
    },
    carouselCaption: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to make text more readable
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
    },
    carouselButton: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Subtle color for controls to enhance appearance
    },
  };

  return (
    <div className="row">
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/466649028_9401937433168358_919253042182580741_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=YWBzyEZtTy4Q7kNvgHMoLwr&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AFKCkrkGClaRwXLrmHxPqtg&oh=00_AYAGbjuKQBIHMAFz1x6leWmvHWzbHF2aMpYhRdWrPaQV8w&oe=6755CC05"
              className="d-block w-100"
              alt="..."
              style={styles.carouselItem}
            />
            <div className="carousel-caption d-none d-md-block" style={styles.carouselCaption}>
              <h5>ยินดีต้อนรับ</h5>
              <p>โรงแรมคุ้มภูคำ เชียงใหม่</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/465279425_1038214108315855_8747350611738908323_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o8qvqihozTUQ7kNvgEjnZKE&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=AjV7uGLZ_0xKCUsHhN7B58_&oh=00_AYCavXWyxPKeTli_cHRakjhcxhTgA6S4OTMOCpZKZXehgw&oe=6755B8A7"
              className="d-block w-100"
              alt="..."
              style={styles.carouselItem}
            />
            <div className="carousel-caption d-none d-md-block" style={styles.carouselCaption}>
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/291020553_5755006177861520_3506893641823066802_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sCNQ5rH0LpYQ7kNvgEyOEjO&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AsW6JpmrCEs1A-xvka0h6fa&oh=00_AYA0lrV0oIoNq16v2Ws93O6LXNrek1FDDw2eV4YjgUW0pw&oe=6755CC8E"
              className="d-block w-100"
              alt="..."
              style={styles.carouselItem}
            />
            <div className="carousel-caption d-none d-md-block" style={styles.carouselCaption}>
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          style={styles.carouselButton}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          style={styles.carouselButton}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
