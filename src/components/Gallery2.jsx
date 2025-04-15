import { useState, useEffect } from "react";
import CircularGallery from "../../Reactbits/CircularGallery";

const images = [
  { src: "image1.jpg", alt: "Image 1" },
  { src: "image2.jpg", alt: "Image 2" },
  // Add more images as needed
];

export default function Gallery2() {
  <div>
    <div style={{ height: "600px", position: "relative" }}>
      <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
    </div>
  </div>;
}
