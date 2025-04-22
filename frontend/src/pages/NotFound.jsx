import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-dvh flex flex-col items-center justify-center bg-black text-white">
      {/* Content Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold font-[Inter_Tight]">404</h1>
        <p className="text-3xl font-bold font-[Inter_Tight] text-zinc-400">
          Page Not Found
        </p>

        <Button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-sm"
        >
          Go Home
        </Button>
      </div>

      {/* Footer */}
      <div className="bg-black text-gray-500 text-xs py-3 text-center absolute bottom-8">
        <p>Privacy Policy • Terms of Service • Help Center</p>
      </div>
    </div>
  );
};

export default NotFound;
