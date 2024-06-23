import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutUsNavigation from "../../2-AboutUs-Page/AboutUsNavigation";
import "./ScreeningsGallery.css";
import styled from "styled-components";

import ScreeningsGalleryPhoto1 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/1-photo.jpg";
import ScreeningsGalleryPhoto2 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/2-photo.jpg";
import ScreeningsGalleryPhoto3 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/3-photo.jpg";
import ScreeningsGalleryPhoto4 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/4-photo.jpg";
import ScreeningsGalleryPhoto5 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/5-photo.jpg";
import ScreeningsGalleryPhoto6 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/6-photo.jpg";
import ScreeningsGalleryPhoto7 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/7-photo.jpg";
import ScreeningsGalleryPhoto8 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/8-photo.jpg";
import ScreeningsGalleryPhoto9 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/9-photo.jpg";
import ScreeningsGalleryPhoto10 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/10-photo.jpg";
import ScreeningsGalleryPhoto11 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/11-photo.jpg";
import ScreeningsGalleryPhoto12 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/12-photo.jpg";
import ScreeningsGalleryPhoto13 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/13-photo.jpg";
import ScreeningsGalleryPhoto14 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/14-photo.jpg";
import ScreeningsGalleryPhoto15 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/15-photo.jpg";
import ScreeningsGalleryPhoto16 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/16-photo.jpg";
import ScreeningsGalleryPhoto17 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/17-photo.jpg";
import ScreeningsGalleryPhoto18 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/18-photo.jpg";
import ScreeningsGalleryPhoto19 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/19-photo.jpg";
import ScreeningsGalleryPhoto20 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/20-photo.jpg";
import ScreeningsGalleryPhoto21 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/21-photo.jpg";
import ScreeningsGalleryPhoto22 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/22-photo.jpg";
import ScreeningsGalleryPhoto23 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/23-photo.jpg";
import ScreeningsGalleryPhoto24 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/24-photo.jpg";
import ScreeningsGalleryPhoto25 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/25-photo.jpg";
import ScreeningsGalleryPhoto26 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/26-photo.jpg";
import ScreeningsGalleryPhoto27 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/27-photo.jpg";
import ScreeningsGalleryPhoto28 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/28-photo.jpg";
import ScreeningsGalleryPhoto29 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/29-photo.jpg";
import ScreeningsGalleryPhoto30 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/30-photo.jpg";
import ScreeningsGalleryPhoto31 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/31-photo.jpg";
import ScreeningsGalleryPhoto32 from "../../../../images/AboutUs-Images/ScreeningsGalleryPhotos/32-photo.jpg";



// For screens 768px and less:
const imageDataSmall = [
  { src: ScreeningsGalleryPhoto1 }, // photo 1
  { src: ScreeningsGalleryPhoto2 }, // photo 2
  { src: ScreeningsGalleryPhoto3 }, // photo 3
  { src: ScreeningsGalleryPhoto4 }, // photo 4
  { src: ScreeningsGalleryPhoto5 }, // photo 5
  { src: ScreeningsGalleryPhoto6 }, // photo 6
  { src: ScreeningsGalleryPhoto7 }, // photo 7
  { src: ScreeningsGalleryPhoto8 }, // photo 8
  { src: ScreeningsGalleryPhoto9 }, // photo 9
  { src: ScreeningsGalleryPhoto10 }, // photo 10
  { src: ScreeningsGalleryPhoto11 }, // photo 11
  { src: ScreeningsGalleryPhoto12 }, // photo 12
  { src: ScreeningsGalleryPhoto13 }, // photo 13
  { src: ScreeningsGalleryPhoto14 }, // photo 14
  { src: ScreeningsGalleryPhoto15 }, // photo 15
  { src: ScreeningsGalleryPhoto16 }, // photo 16
  { src: ScreeningsGalleryPhoto17 }, // photo 17
  { src: ScreeningsGalleryPhoto18 }, // photo 18
  { src: ScreeningsGalleryPhoto19 }, // photo 19
  { src: ScreeningsGalleryPhoto20 }, // photo 20
  { src: ScreeningsGalleryPhoto21 }, // photo 21
  { src: ScreeningsGalleryPhoto22 }, // photo 22
  { src: ScreeningsGalleryPhoto23 }, // photo 23
  { src: ScreeningsGalleryPhoto24 }, // photo 24
  { src: ScreeningsGalleryPhoto25 }, // photo 25
  { src: ScreeningsGalleryPhoto26 }, // photo 26
  { src: ScreeningsGalleryPhoto27 }, // photo 27
  { src: ScreeningsGalleryPhoto28 }, // photo 28
  { src: ScreeningsGalleryPhoto29 }, // photo 29
  { src: ScreeningsGalleryPhoto30 }, // photo 30
  { src: ScreeningsGalleryPhoto31 }, // photo 31
  { src: ScreeningsGalleryPhoto32 }, // photo 32
];


// For larger screens
const imageData = [
  // Column 1
  { src: ScreeningsGalleryPhoto1 }, // photo 1
  { src: ScreeningsGalleryPhoto5 }, // photo 5
  { src: ScreeningsGalleryPhoto9 }, // photo 9
  { src: ScreeningsGalleryPhoto13 }, // photo 13
  { src: ScreeningsGalleryPhoto17 }, // photo 17
  { src: ScreeningsGalleryPhoto21 }, // photo 21
  { src: ScreeningsGalleryPhoto25 }, // photo 25
  { src: ScreeningsGalleryPhoto29 }, // photo 29

  // Column 2
  { src: ScreeningsGalleryPhoto2 }, // photo 2
  { src: ScreeningsGalleryPhoto6 }, // photo 6
  { src: ScreeningsGalleryPhoto10 }, // photo 10
  { src: ScreeningsGalleryPhoto15 }, // photo 15
  { src: ScreeningsGalleryPhoto18 }, // photo 18
  { src: ScreeningsGalleryPhoto22 }, // photo 22
  { src: ScreeningsGalleryPhoto26 }, // photo 26
  { src: ScreeningsGalleryPhoto30 }, // photo 30

  // Column 3
  { src: ScreeningsGalleryPhoto3 }, // photo 3
  { src: ScreeningsGalleryPhoto7 }, // photo 7
  { src: ScreeningsGalleryPhoto11 }, // photo 11
  { src: ScreeningsGalleryPhoto14 }, // photo 14
  { src: ScreeningsGalleryPhoto19 }, // photo 19
  { src: ScreeningsGalleryPhoto23 }, // photo 23
  { src: ScreeningsGalleryPhoto27 }, // photo 27
  { src: ScreeningsGalleryPhoto32 }, // photo 32

  // Column 4
  { src: ScreeningsGalleryPhoto4 }, // photo 4
  { src: ScreeningsGalleryPhoto8 }, // photo 8
  { src: ScreeningsGalleryPhoto12 }, // photo 12
  { src: ScreeningsGalleryPhoto16 }, // photo 16
  { src: ScreeningsGalleryPhoto20 }, // photo 20
  { src: ScreeningsGalleryPhoto24 }, // photo 24
  { src: ScreeningsGalleryPhoto28 }, // photo 28
  { src: ScreeningsGalleryPhoto31 }, // photo 31
];



const ScreeningsGallery = () => {
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
    <section className="ScreeningsGallery">
      <AboutUsNavigation currentPage="screenings-gallery" />
      <div className="main-container">
        <h1 className="screenings-gallery-header">
          CHAD Heart Screenings Pictures
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
  column-count: 4;
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

export default ScreeningsGallery;
