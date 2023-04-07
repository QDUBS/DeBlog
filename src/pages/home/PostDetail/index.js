import React from "react";
import "./styles.css";
import postImage from "../../../assets/images/DevOps.jpg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function PostDetail() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="post-detail-content">
        <div className="post-detail">
          <div className="post-detail-title">
            <span className="post-detail-main-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </span>
            <span className="post-detail-time">Posted 2 hours ago</span>
          </div>

          <img
            className="post-detail-image"
            src={postImage}
            alt="postDetailImage"
          />

          <div className="post-detail-description">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium excepturi mollitia neque vero laborum rerum quia ipsa
              enim doloremque at sint nihil corporis, maxime sapiente, ipsum
              consectetur iure. Est, iste! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium excepturi mollitia neque
              vero laborum rerum quia ipsa enim doloremque at sint nihil
              corporis, maxime sapiente, ipsum consectetur iure. Est, iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium excepturi mollitia neque vero laborum rerum quia ipsa
              enim doloremque at sint nihil corporis, maxime sapiente, ipsum
              consectetur iure. Est, iste!
            </span>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="recent-posts">
          <h2 className="recent-posts-heading">RECENT POSTS</h2>

          <div className="recent-post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </div>

          <div className="recent-post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </div>

          <div className="recent-post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </div>

          <div className="recent-post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default PostDetail;
