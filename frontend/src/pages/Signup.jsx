import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

const Signup = () => {
  const navigate = useNavigate();
  const { signing, signup } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signup(data);
      if (response.success === true) {
        navigate("/verify");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-[Inter_Tight]">
          Welcome to Auth- <span className="text-blue-600">X</span>
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-80 flex flex-col gap-6"
        >
          {/* Username Field */}
          <div>
            <Input
              type="text"
              placeholder="Username"
              className="border border-zinc-700 h-12 text-sm"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="border border-zinc-700 h-12 text-sm"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="border border-zinc-700 h-12 text-sm"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /\d/,
                  message: "Password must contain at least one number",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            disabled={signing}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            {signing ? "Wait . . ." : "Sign Up"}
          </Button>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-gray-500 font-[Inter_Tight] text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-bold cursor-pointer">
            Login
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

export default Signup;
