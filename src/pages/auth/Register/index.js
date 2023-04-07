import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"

// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import "./styles.css";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import DATA from "../../../data/categories";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import instance from "../../../axios";
// import { useDropzone } from "react-dropzone";


// User Schema
const UserSchema = Yup.object().shape({
  username: Yup.object().shape("Username is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Register() {
  return (
    <div className="container">
      <div className="register-content">
        <h1>De<span> Blog</span></h1>

        <form action="" method="post">
          <input type="text" placeholder="Phone or email" />
          <input type="text" placeholder="Password" />
          <div className="buttons">
            <button className="login-regular">REGISTER</button>
          </div>
        </form>

        <div className="register-section">
          <button id="register">
            <Link to='/login'>Already have an account? Login</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
