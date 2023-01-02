import React, { useState, useRef } from "react";
import "../styles/share.css";
import { AddPhotoAlternate, Send } from "@mui/icons-material";

const Share = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="share__cont">
      <div className="share">
        <img src="/assets/profile.jpg" alt="" />
        <div>
          {/* <input type="text" placeholder="What's happening" className="shareinput" /> */}
          <textarea type="text" placeholder="What's happening" className="shareinput"></textarea>
          <div className="postOptions">
            <div
              className="option"
              style={{ color: "gray" }}
              onClick={() => imageRef.current.click()}
            >
              <AddPhotoAlternate />
              Photo
            </div>
            <button className="button ps-button">
              Share
              <Send
                style={{ width: "20px", height: "20px", color: "gainsboro" }}
              />
            </button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="previewImage">
              <img src={image.image} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Share;
