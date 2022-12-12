import React from "react";

const ImagesGrid = ({ items }) => {
  return (
    <div className="containerImagesGrid">
      <img src={items.img} alt="" />

      <div className="imgGrid">
        {items.map((items) => (
          <img key={items.id} src={items.img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default ImagesGrid;
