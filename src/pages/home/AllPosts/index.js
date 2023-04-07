import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Post from "../../../components/Post";
import ReactPaginate from "react-paginate";
// import postImage from "../../../assets/images/DevOps.jpg";
import instance from "../../../axios";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    instance.get().then((response) => {
      setPosts(response.data);
    });
  }, []);

  const postsPerPage = 6;
  const postsVisited = pageNumber * postsPerPage;

  const displayPosts = posts.slice(
    postsVisited,
    postsVisited + postsPerPage
  ).map((post) => {
    return (
      <Post
        image={post.image}
        title={post.title}
        time={post.date}
        description={post.description}
        approvalStatus={post.approved}
      />
    );
  });

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Content */}
      <section className="home-content">
        {/* Categories Section */}
        <div className="home-categories">
          <h2 className="home-categories-heading">BROWSE CATEGORIES</h2>

          <div className="home-category">Lorem ipsum</div>

          <div className="home-category">Lorem ipsum</div>

          <div className="home-category">Lorem ipsum</div>

          <div className="home-category">Lorem ipsum</div>
        </div>

        {/* Posts Section */}
        <div className="posts-section">
          <div className="home-posts-row">{displayPosts}</div>

          <div className="pagination">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"previousButtons"}
              nextLinkClassName={"nextButtons"}
              disabledClassName={"disabledButtons"}
              activeClassName={"activeButtons"}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AllPosts;
