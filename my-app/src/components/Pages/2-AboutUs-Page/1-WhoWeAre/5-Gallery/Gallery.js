import React from "react";
import "./Gallery.css";
import GalleryPhoto1 from "../../../../../images/AboutUs-Images/gallery-photo-1.png";
import GalleryPhoto2 from "../../../../../images/AboutUs-Images/gallery-photo-2.png";
import GalleryPhoto3 from "../../../../../images/AboutUs-Images/gallery-photo-3.png";
import GalleryPhoto4 from "../../../../../images/AboutUs-Images/gallery-photo-4.png";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  
  return (
    <section className="Gallery">
      <div className="main-container">
        <h4 className="gallery-aboutUs-header">
          Gallery - Pictures of Chad's Family & Friends
        </h4>
        <div className="gallery-grid">
          <img src={GalleryPhoto1} alt="Gallery" />
          <img src={GalleryPhoto2} alt="Gallery" />
          <img src={GalleryPhoto3} alt="Gallery" />
          <img src={GalleryPhoto4} alt="Gallery" />
        </div>
        <button className="gallery-aboutUs-button" onClick={() => navigate("/full-gallery")}>
          View More Pictures
        </button>
      </div>
    </section>
  );
};


export default Gallery;
