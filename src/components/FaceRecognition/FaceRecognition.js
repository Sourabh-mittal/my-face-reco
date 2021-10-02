import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, valuebox }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        {valuebox.map((box) => (
          <div
            className="bounding-box"
            key={box.top_row}
            style={{
              top: box.top_row,
              left: box.left_col,
              right: box.right_col,
              bottom: box.bottom_row,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
