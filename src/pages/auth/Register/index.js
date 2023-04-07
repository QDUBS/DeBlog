import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useDispatch } from "react-redux";
import authSlice from "../../../store/slices/auth";
import instance from "../../../axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";



// User Schema
const UserSchema = Yup.object().shape({
  username: Yup.object().shape("Username is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserSchema),
  });

  // Register

  const onSubmitHandler = (data) => {
    instance
      .post(`${process.env.API_URL}/auth/login/`, data)
      .then((res) => {
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.access,
            refreshToken: res.data.refresh,
          })
        );
        dispatch(authSlice.actions.setAccount(res.data.user));
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err.response.data.detail.toString());
      });

    reset();
  };

  return (
    <div className="container">
      <div className="register-content">
        <h1>
          De<span> Blog</span>
        </h1>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <input
            {...register("username")}
            placeholder="Username"
            type="text"
            required
            className="register-form-input"
          />
          <p>{errors.username?.message}</p>

          <input
            {...register("email")}
            placeholder="Email"
            type="text"
            required
            className="login-form-input"
          />
          <p>{errors.email?.message}</p>

          <input
            {...register("password")}
            placeholder="Password"
            type="text"
            required
            className="login-form-input"
          />
          <p>{errors.password?.message}</p>

          <div className="buttons">
            <button type="submit" className="login-regular">
              REGISTER
            </button>
          </div>
        </form>

        <div className="register-section">
          <button id="register">
            <Link to="/login">Already have an account? Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register
