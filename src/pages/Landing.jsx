import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animationComplete) {
      const nextPageTimer = setTimeout(() => {
        history.push("/rootlayout"); 
      }, 1000); 
      return () => clearTimeout(nextPageTimer);
    }
  }, [animationComplete, history]);

  return (
    <>
      <Box
        style={{
          background: "#141414",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 1s ease-out",
          transform: animationComplete ? "translateX(-100vw)" : "translateX(0)",
          position: "fixed",
          top: 0,
        }}
      >
        <Box>
          <div
            style={{
              fontFamily: "cursive",
              fontSize: "60px",
              color: "purple",
              width: "600px",
              textAlign: "center",
            }}
          >
            Remote
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "60px",
              color: "whitesmoke",
              width: "600px",
              textAlign: "center",
            }}
          >
            Workspace
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
