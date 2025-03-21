import React from "react";
import logo from "../assets/logo.png";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Land = () => {
  const navigate = useNavigate();
  return (
    <div className="grid h-screen grid-rows-[90%_10%]">
      {/* First Row: Adjusted for Responsive Design */}
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%]">
        {/* Left Side - Logo (Hidden on Small & Medium Screens) */}
        <div className="bg-black hidden md:flex justify-center items-center">
          <img src={logo} alt="X Logo" className="w-[40%] lg:w-[50%] invert" />
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-black text-white flex flex-col justify-center items-center px-6 sm:px-8 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            A Complete Auth System
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mt-3">Try Now!</h2>

          <Button
            onClick={() => navigate("/signup")}
            className="mt-6 sm:mt-8 bg-blue-400 text-white px-4 sm:px-6 py-2 rounded-full w-full sm:w-72 hover:bg-blue-500 transition-colors duration-200 ease-in-out cursor-pointer text-sm sm:text-base"
          >
            Create account
          </Button>

          <p className="mt-3 sm:mt-4 text-gray-400 text-xs sm:text-sm text-center">
            By signing up, you agree to the{" "}
            <a href="#" className="text-blue-400">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400">
              Privacy Policy
            </a>
            .
          </p>

          <h3 className="mt-4 sm:mt-6 text-xs sm:text-sm">
            Already have an account?
          </h3>
          <Button
            onClick={() => navigate("/login")}
            className="mt-3 sm:mt-4 border border-zinc-800 bg-black text-white px-4 sm:px-6 py-2 rounded-full w-full sm:w-72 hover:bg-zinc-900 transition-colors duration-200 ease-in-out cursor-pointer text-sm sm:text-base"
          >
            Login
          </Button>
        </div>
      </div>

      {/* Second Row: Footer */}
      <div className="bg-black text-gray-200 text-xs sm:text-sm flex justify-center items-center px-4 sm:px-0">
        <p className="text-center">
          Made With ❤️ | <span className="font-[Caveat]">HARSHIT X CODES</span>
        </p>
      </div>
    </div>
  );
};

export default Land;
