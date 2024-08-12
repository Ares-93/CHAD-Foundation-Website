import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutUsNavigation from "../../2-AboutUs-Page/AboutUsNavigation";
import "./VolleyballGallery.css";
import styled from "styled-components";

import VolleyballGalleryPhoto1 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/1-photo.jpg";
import VolleyballGalleryPhoto2 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/2-photo.jpg";
import VolleyballGalleryPhoto3 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/3-photo.jpg";
import VolleyballGalleryPhoto4 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/4-photo.jpg";
import VolleyballGalleryPhoto5 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/5-photo.jpg";
import VolleyballGalleryPhoto6 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/6-photo.jpg";
import VolleyballGalleryPhoto7 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/7-photo.jpg";
import VolleyballGalleryPhoto8 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/8-photo.jpg";
import VolleyballGalleryPhoto9 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/9-photo.jpg";
import VolleyballGalleryPhoto10 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/10-photo.jpg";
import VolleyballGalleryPhoto11 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/11-photo.jpg";
import VolleyballGalleryPhoto12 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/12-photo.jpg";
import VolleyballGalleryPhoto13 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/13-photo.jpg";
import VolleyballGalleryPhoto14 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/14-photo.jpg";
import VolleyballGalleryPhoto15 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/15-photo.jpg";
import VolleyballGalleryPhoto16 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/16-photo.jpg";
import VolleyballGalleryPhoto17 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/17-photo.jpg";
import VolleyballGalleryPhoto18 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/18-photo.jpg";
// import VolleyballGalleryPhoto19 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/19-photo.jpg";
import VolleyballGalleryPhoto20 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/20-photo.jpg";
import VolleyballGalleryPhoto21 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/21-photo.jpg";
import VolleyballGalleryPhoto22 from "../../../../images/AboutUs-Images/VolleyballGalleryPhotos/22-photo.jpg";

// For screens 768px and less:
const imageDataSmall = [
  { src: VolleyballGalleryPhoto1 }, // photo 1
  { src: VolleyballGalleryPhoto2 }, // photo 2
  { src: VolleyballGalleryPhoto3 }, // photo 3
  { src: VolleyballGalleryPhoto4 }, // photo 4
  { src: VolleyballGalleryPhoto5 }, // photo 5
  { src: VolleyballGalleryPhoto6 }, // photo 6
  { src: VolleyballGalleryPhoto7 }, // photo 7
  { src: VolleyballGalleryPhoto8 }, // photo 8
  { src: VolleyballGalleryPhoto9 }, // photo 9
  { src: VolleyballGalleryPhoto10 }, // photo 10
  { src: VolleyballGalleryPhoto11 }, // photo 11
  { src: VolleyballGalleryPhoto12 }, // photo 12
  { src: VolleyballGalleryPhoto13 }, // photo 13
  { src: VolleyballGalleryPhoto14 }, // photo 14
  { src: VolleyballGalleryPhoto15 }, // photo 15
  { src: VolleyballGalleryPhoto16 }, // photo 16
  { src: VolleyballGalleryPhoto17 }, // photo 17
  { src: VolleyballGalleryPhoto18 }, // photo 18
  // { src: VolleyballGalleryPhoto19 }, // photo 19
  { src: VolleyballGalleryPhoto20 }, // photo 20
  { src: VolleyballGalleryPhoto21 }, // photo 21
  { src: VolleyballGalleryPhoto22 }, // photo 22
];

// For larger screens
const imageData = [
  // Column 1
  { src: VolleyballGalleryPhoto1 }, // photo 1
  { src: VolleyballGalleryPhoto4 }, // photo 4
  { src: VolleyballGalleryPhoto7 }, // photo 7
  { src: VolleyballGalleryPhoto10 }, // photo 10
  { src: VolleyballGalleryPhoto13 }, // photo 13
  { src: VolleyballGalleryPhoto16 }, // photo 16
  // { src: VolleyballGalleryPhoto19 }, // photo 19
  { src: VolleyballGalleryPhoto22 }, // photo 22

  // Column 2
  { src: VolleyballGalleryPhoto2 }, // photo 2
  { src: VolleyballGalleryPhoto5 }, // photo 5
  { src: VolleyballGalleryPhoto8 }, // photo 8
  { src: VolleyballGalleryPhoto11 }, // photo 11
  { src: VolleyballGalleryPhoto14 }, // photo 14
  { src: VolleyballGalleryPhoto17 }, // photo 17
  { src: VolleyballGalleryPhoto20 }, // photo 20

  // Column 3
  { src: VolleyballGalleryPhoto3 }, // photo 3
  { src: VolleyballGalleryPhoto6 }, // photo 6
  { src: VolleyballGalleryPhoto9 }, // photo 9
  { src: VolleyballGalleryPhoto12 }, // photo 12
  { src: VolleyballGalleryPhoto15 }, // photo 15
  { src: VolleyballGalleryPhoto18 }, // photo 18
  { src: VolleyballGalleryPhoto21 }, // photo 21
];

const VolleyballGallery = () => {
  const navigate = useNavigate();
  const [currentImageData, setCurrentImageData] = useState(imageData);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentImageData(imageDataSmall);
      } else {
        setCurrentImageData(imageData);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="VolleyballGallery">
      <AboutUsNavigation currentPage="volleyball-gallery" />
      <div className="main-container">
        <h1 className="volleyball-gallery-header">
          CHAD Volleyball Benefit pictures
        </h1>
        <Wrapper>
          {currentImageData.map((image, index) => (
            <ImageWrapper key={index}>
              <ImageStyled src={image.src} alt={`Gallery item ${index + 1}`} />
            </ImageWrapper>
          ))}
        </Wrapper>
        <button
          onClick={() => navigate("/about/what-weve-done")}
          className="exit-gallery-button"
        >
          Exit Gallery
        </button>
      </div>
    </section>
  );
};

const Wrapper = styled.div`
  column-count: 3;
  column-gap: 32px;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    column-count: 1;
  }
`;

const ImageWrapper = styled.div`
  break-inside: avoid;
  margin-bottom: 32px;
`;

const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
`;

export default VolleyballGallery;
