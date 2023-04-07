import React, { useState } from "react";
import { Check } from "@mui/icons-material";
import "./styles.css"

const Post = ({ image, title, time, description, approvalStatus }) => {
  return (
    <div className="single-post">
      <div className="image-container">
        <img src={image} alt="postImage" />
        <button className="timestamp">{time}</button>
      </div>

      <div className="detail-container">
        <div className="detail-container-flex">
          <p className="post-title">{title}</p>
          {approvalStatus && <div className="checkbox"><Check className="check" /></div>}
        </div>

        <span className="post-description">{description}</span>

        <button className="post-button">Read more</button>
      </div>
    </div>
  );
};

export default Post;
