import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

const Login = () => {
  const navigate = useNavigate();
  const { login, logging, isAuthenticated } = useAuthStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await login(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-[Inter_Tight]">
          Welcome Back : Auth- <span className="text-blue-600">X</span>
        </h1>

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-80 flex flex-col gap-6"
        >
          <Input
            type="email"
            placeholder="Email"
            className="border border-zinc-700 h-12 text-xs"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
          <Input
            type="password"
            placeholder="Password"
            className="border border-zinc-700 h-12 text-xs"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
          <Link
            to="/forgetpassword"
            className="font-bold text-white text-xs cursor-pointer"
          >
            Forget Password ?
          </Link>
          <Button
            disabled={logging}
            className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            {logging ? "Wait . . ." : "Login"}
          </Button>
        </form>

        <div className="mt-4 text-gray-500 text-xs">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-bold cursor-pointer">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-gray-500 text-xs py-3 text-center absolute bottom-8">
        <p>Privacy Policy • Terms of Service • Help Center</p>
      </div>
    </div>
  );
};

export default Login;
