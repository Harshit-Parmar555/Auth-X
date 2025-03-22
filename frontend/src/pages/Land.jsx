import React from "react";
import logo from "../assets/logo.png";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Land = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-6 sm:px-8 md:px-10">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-[Inter_Tight] text-3xl sm:text-4xl md:text-5xl sm:font-bold text-center">
          Auth- <span className="text-blue-600">X</span> : A Complete Auth
          System
        </h1>
        <h2 className="font-[Inter_Tight] text-lg sm:text-xl md:text-2xl mt-3">
          Try Now!
        </h2>
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
      {/* Footer */}
      <div className="text-gray-200 text-xs sm:text-sm flex justify-center items-center py-4 w-full absolute bottom-8">
        <p className="text-center">
          Made With ❤️ |{" "}
          <span className="font-[Inter_Tight]">HARSHIT X CODES</span>
        </p>
      </div>
    </div>
  );
};

export default Land;
