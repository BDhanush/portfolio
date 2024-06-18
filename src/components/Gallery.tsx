// Gallery.tsx
import React from 'react';
import Masonry from 'react-masonry-css';
import './Gallery.css';


interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;
