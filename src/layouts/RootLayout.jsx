import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "10px 20px", 
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const RootLayout = () => {
  return (
    <Box
      style={{
        background: "#141414",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Box style={{ border: "1px solid white", borderRadius: "30px", width: "fit-content", padding: "20px" }}>
        <div
          style={{
            fontFamily: "cursive",
            fontSize: "60px",
            color: "purple",
            width: "400px",
            textAlign: "center",
          }}
        >
          <Box mb={1}>
            <h4 style={{ color: "white", marginBottom: "5px" }}>Come In !</h4>
            <hr style={{ borderTop: "2px solid white", width: "200px", margin: "0 auto 10px auto" }} />
            <p style={{ color: "white", fontSize: "20px" }}>
              Please Select one of the below to continue
            </p>
            <Box mb={1}>
              <BootstrapButton
                variant="contained"
                style={{ background: "#3C1361", width: "169px", height: "44px", marginBottom: "10px" }}
              >
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Log In
                </Link>
              </BootstrapButton>
            </Box>
            <BootstrapButton variant="contained" style={{ background: "white", width: "169px", height: "44px" }}>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#7C5294" }}
              >
                Sign Up
              </Link>
            </BootstrapButton>
          </Box>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
};

export default RootLayout;
