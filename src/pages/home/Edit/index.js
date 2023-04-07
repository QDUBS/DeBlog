import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import DATA from "../../../data/categories";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import instance from "../../../axios";
import { useNavigate } from "react-router-dom";

// Post Schema
const PostSchema = Yup.object().shape({
  author: Yup.object().shape({}),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Please include a description"),
  image: Yup.mixed().nullable().required("Image is required"),
  categories: Yup.array().of(
    Yup.string().required("Please select at least one description")
  ),
  date: Yup.date().default(() => new Date()),
  approved: Yup.boolean(),
});

function Edit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(PostSchema),
  });

  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    instance.post("/api/create", data).then((response) => {
      navigate("/", { replace: true });
    });

    reset();
  };

  useEffect(() => {
    let defaultValues = {};

    defaultValues.approved = false;

    reset({ ...defaultValues });
  }, []);

  return (
    <>
      {/* Header */}
      <Header />

      <div className="create-post-content">
        <div className="create-post">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <h2 className="formHeader">ADD A PRODUCT</h2>

            {/* Title */}
            <h5>Title</h5>
            <input
              {...register("title")}
              placeholder="Add a title"
              type="text"
              required
              className="post-form-input"
            />
            <p>{errors.title?.message}</p>

            {/* Description */}
            <h5>Description</h5>
            <textarea
              {...register("description")}
              placeholder="What's on your mind?"
              type="text"
              required
              className="post-form-textarea"
            ></textarea>
            <p>{errors.description?.message}</p>

            {/* Image */}
            <h5>Image</h5>
            <input
              {...register("image")}
              placeholder="Add image"
              type="file"
              accept="image/*"
              required
              className="post-form-input"
            />
            <p>{errors.image?.message}</p>

            {/* Categories */}
            <h5>Categories</h5>
            {DATA.map((item, index) => {
              return (
                <div key={item.id} className="checkbox-container">
                  <input
                    {...register(item.value)}
                    type="checkbox"
                    value={item.value}
                  />
                  <label>{item.value}</label>
                </div>
              );
            })}
            <p>{errors.categories?.message}</p>

            {/* Post Button */}
            <button type="submit">Post</button>
          </form>
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

export default Edit;
