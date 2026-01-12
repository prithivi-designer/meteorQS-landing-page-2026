// components/PageLoader.jsx
import React from "react";
import { FourSquare } from "react-loading-indicators";

const PageLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0A142F", // Dark theme background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <FourSquare color="#3DA5E9" size="medium" text="" textColor="" />
    </div>
  );
};

export default PageLoader;
