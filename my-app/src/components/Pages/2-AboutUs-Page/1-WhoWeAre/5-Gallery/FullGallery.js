import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutUsNavigation from "../../AboutUsNavigation";
import "./FullGallery.css";
import styled from "styled-components";
import FullGalleryPhoto1 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/1-photo.jpg";
import FullGalleryPhoto2 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/2-photo.jpg";
import FullGalleryPhoto3 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/3-photo.jpg";
import FullGalleryPhoto4 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/4-photo.jpg";
import FullGalleryPhoto5 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/5-photo.jpg";
import FullGalleryPhoto6 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/6-photo.jpg";
import FullGalleryPhoto7 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/7-photo.png";
import FullGalleryPhoto8 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/8-photo.JPG";
import FullGalleryPhoto9 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/9-photo.JPG";
import FullGalleryPhoto10 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/10-photo.jpg";
import FullGalleryPhoto11 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/11-photo.jpg";
import FullGalleryPhoto12 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/12-photo.jpg";
import FullGalleryPhoto13 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/13-photo.jpg";
import FullGalleryPhoto14 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/14-photo.jpg";
import FullGalleryPhoto15 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/15-photo.jpg";
import FullGalleryPhoto16 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/16-photo.jpg";
import FullGalleryPhoto17 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/17-photo.jpg";
import FullGalleryPhoto18 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/18-photo.jpg";
import FullGalleryPhoto19 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/19-photo.jpg";
import FullGalleryPhoto20 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/20-photo.png";
import FullGalleryPhoto21 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/21-photo.jpg";
import FullGalleryPhoto22 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/22-photo.jpg";
import FullGalleryPhoto23 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/23-photo.jpg";
import FullGalleryPhoto24 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/24-photo.jpg";
import FullGalleryPhoto25 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/25-photo.jpg";
import FullGalleryPhoto26 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/26-photo.jpg";
import FullGalleryPhoto27 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/27-photo.jpg";
import FullGalleryPhoto28 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/28-photo.jpg";
import FullGalleryPhoto29 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/29-photo.jpg";
import FullGalleryPhoto30 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/30-photo.jpg";
import FullGalleryPhoto31 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/31-photo.jpg";
import FullGalleryPhoto32 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/32-photo.jpg";
import FullGalleryPhoto33 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/33-photo.jpg";
import FullGalleryPhoto34 from "../../../../../images/AboutUs-Images/FullGalleryPhotos/34-photo.jpg";


// For screens 768px and less:
const imageDataSmall = [
  { src: FullGalleryPhoto1 }, // photo 1
  { src: FullGalleryPhoto2 }, // photo 2
  { src: FullGalleryPhoto3 }, // photo 3
  { src: FullGalleryPhoto4 }, // photo 4
  { src: FullGalleryPhoto5 }, // photo 5
  { src: FullGalleryPhoto6 }, // photo 6
  { src: FullGalleryPhoto7 }, // photo 7
  { src: FullGalleryPhoto8 }, // photo 8
  { src: FullGalleryPhoto9 }, // photo 9
  { src: FullGalleryPhoto10 }, // photo 10
  { src: FullGalleryPhoto11 }, // photo 11
  { src: FullGalleryPhoto12 }, // photo 12
  { src: FullGalleryPhoto13 }, // photo 13
  { src: FullGalleryPhoto14 }, // photo 14
  { src: FullGalleryPhoto15 }, // photo 15
  { src: FullGalleryPhoto16 }, // photo 16
  { src: FullGalleryPhoto17 }, // photo 17
  { src: FullGalleryPhoto18 }, // photo 18
  { src: FullGalleryPhoto19 }, // photo 19
  { src: FullGalleryPhoto20 }, // photo 20
  { src: FullGalleryPhoto21 }, // photo 21
  { src: FullGalleryPhoto22 }, // photo 22
  { src: FullGalleryPhoto23 }, // photo 23
  { src: FullGalleryPhoto24 }, // photo 24
  { src: FullGalleryPhoto25 }, // photo 25
  { src: FullGalleryPhoto26 }, // photo 26
  { src: FullGalleryPhoto27 }, // photo 27
  { src: FullGalleryPhoto28 }, // photo 28
  { src: FullGalleryPhoto29 }, // photo 29
  { src: FullGalleryPhoto30 }, // photo 30
  { src: FullGalleryPhoto31 }, // photo 31
  { src: FullGalleryPhoto32 }, // photo 32
  { src: FullGalleryPhoto33 }, // photo 33
  { src: FullGalleryPhoto34 }, // photo 34
];

// For larger screens
const imageData = [
  // Column 1
  { src: FullGalleryPhoto1 }, // photo 1
  { src: FullGalleryPhoto4 }, // photo 4
  { src: FullGalleryPhoto7 }, // photo 7
  { src: FullGalleryPhoto10 }, // photo 10
  { src: FullGalleryPhoto13 }, // photo 13
  { src: FullGalleryPhoto18 }, // photo 18
  { src: FullGalleryPhoto21 }, // photo 21
  { src: FullGalleryPhoto24 }, // photo 24
  { src: FullGalleryPhoto27 }, // photo 27
  { src: FullGalleryPhoto29 }, // photo 29
  { src: FullGalleryPhoto32 }, // photo 32

  // Column 2
  { src: FullGalleryPhoto2 }, // photo 2
  { src: FullGalleryPhoto5 }, // photo 5
  { src: FullGalleryPhoto8 }, // photo 8
  { src: FullGalleryPhoto11 }, // photo 11
  { src: FullGalleryPhoto14 }, // photo 14
  { src: FullGalleryPhoto16 }, // photo 16
  { src: FullGalleryPhoto19 }, // photo 19
  { src: FullGalleryPhoto22 }, // photo 22
  { src: FullGalleryPhoto25 }, // photo 25
  { src: FullGalleryPhoto28 }, // photo 28
  { src: FullGalleryPhoto30 }, // photo 30
  { src: FullGalleryPhoto33 }, // photo 33

  // Column 3
  { src: FullGalleryPhoto3 }, // photo 3
  { src: FullGalleryPhoto6 }, // photo 6
  { src: FullGalleryPhoto9 }, // photo 9
  { src: FullGalleryPhoto12 }, // photo 12
  { src: FullGalleryPhoto15 }, // photo 15
  { src: FullGalleryPhoto17 }, // photo 17
  { src: FullGalleryPhoto20 }, // photo 20
  { src: FullGalleryPhoto23 }, // photo 23
  { src: FullGalleryPhoto26 }, // photo 26
  { src: FullGalleryPhoto31 }, // photo 31
  { src: FullGalleryPhoto34 }, // photo 34
];


const FullGallery = () => {
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
    <section className="FullGallery">
      <AboutUsNavigation currentPage="full-gallery" />
      <div className="main-container">
        <h1 className="full-gallery-header">
          Pictures of Chad's Family & Friends
        </h1>
        <Wrapper>
          {currentImageData.map((image, index) => (
            <ImageWrapper key={index}>
              <ImageStyled src={image.src} alt={`Gallery item ${index + 1}`} />
            </ImageWrapper>
          ))}
        </Wrapper>
        <button
          onClick={() => navigate("/about/who-we-are")}
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

export default FullGallery;
