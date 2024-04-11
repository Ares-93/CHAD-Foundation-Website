// FullGallery.js
import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUsNavigation from "../../AboutUsNavigation"; 


const FullGallery = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AboutUsNavigation currentPage="full-gallery" />
      <h1>Hello from Full Gallery</h1>
      <button onClick={() => navigate("/about/who-we-are")}>
        Exit Gallery
      </button>
     
    </div>
  );
};

export default FullGallery;
