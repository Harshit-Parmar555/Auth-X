import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Land = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-between bg-black text-white px-6 sm:px-8 md:px-10 py-10 relative overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center gap-4 flex-1">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center font-[Inter_Tight] bg-gradient-to-t from-zinc-400 to-white bg-clip-text text-transparent leading-tight">
          Auth-<span className="text-blue-600">X</span> : A Complete Auth System
        </h1>

        <p className="text-gray-400 text-sm sm:text-base mt-2 text-center">
          A MERN stack authentication boilerplate that includes email
          verification and password reset features.
        </p>

        <div className="mt-6 sm:mt-8 w-full flex flex-col items-center gap-3">
          <Button
            onClick={() => navigate("/signup")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md w-full sm:w-80 text-sm sm:text-base transition duration-300 ease-in-out"
          >
            Create Account
          </Button>

          <p className="text-xs sm:text-xs text-gray-400 text-center max-w-xs">
            By signing up, you agree to the{" "}
            <a href="/terms" className="text-blue-400 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-400 underline">
              Privacy Policy
            </a>
            .
          </p>

          <div className="mt-2 text-center flex flex-col items-center gap-2">
            <p className="text-sm text-gray-300">Already have an account?</p>
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="mt-2 border border-zinc-700 bg-transparent text-white hover:text-white px-6 py-2 rounded-md w-full sm:w-80 hover:bg-zinc-950 transition duration-300 text-sm sm:text-base"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-400 text-xs sm:text-sm text-center w-full absolute bottom-8">
        <p>
          Made with ❤️ by{" "}
          <span className="font-[Inter_Tight] text-white">HARSHIT X CODES</span>
        </p>
      </footer>
    </div>
  );
};

export default Land;
