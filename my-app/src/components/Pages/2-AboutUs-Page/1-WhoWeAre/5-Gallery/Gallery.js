import React from "react";
import "./Gallery.css";
import GalleryPhoto1 from "../../../../../images/AboutUs-Images/gallery-photo-1.png";
import GalleryPhoto2 from "../../../../../images/AboutUs-Images/gallery-photo-2.png";
import GalleryPhoto3 from "../../../../../images/AboutUs-Images/gallery-photo-3.png";
import GalleryPhoto4 from "../../../../../images/AboutUs-Images/gallery-photo-4.png";

const Gallery = () => {
  return (
    <section className="Gallery">
      <div className="main-container">
        <h4 className="gallery-aboutUs-header">Gallery</h4>
        <div className="gallery-grid"> 
          <img src={GalleryPhoto1} alt="Image 1" />
          <img src={GalleryPhoto2} alt="Image 2" />
          <img src={GalleryPhoto3} alt="Image 3" />
          <img src={GalleryPhoto4} alt="Image 4" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
