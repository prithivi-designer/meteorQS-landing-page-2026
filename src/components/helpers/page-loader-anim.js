// components/PageLoader.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PageLoader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: onComplete,
    });

    tl.to(circleRef.current, {
      scale: 30,
      duration: 1.2,
      ease: "power3.inOut",
    }).to(loaderRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <div
        ref={circleRef}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: "#1093ff45",
          backgroundColor: "#1093ff",
          transform: "scale(1)",
        }}
      />
    </div>
  );
};

export default PageLoader;
