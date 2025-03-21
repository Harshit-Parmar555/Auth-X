import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-between bg-black text-white">
      {/* Content Section */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-gray-500 mt-2">Page Not Found</p>

        <Button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full"
        >
          Go Home
        </Button>
      </div>

      {/* Footer */}
      <div className="bg-black text-gray-500 text-sm py-3 text-center mb-8">
        <p>About • Privacy Policy • Terms of Service • Help Center</p>
      </div>
    </div>
  );
};

export default NotFound;
