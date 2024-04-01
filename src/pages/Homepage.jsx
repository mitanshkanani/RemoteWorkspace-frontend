import React from "react";
import { Typography } from "@mui/material"
import { Box } from "@mui/material";
import { Btn } from "../components/Button"

const Homepage = () => {
  return (
    <div className='background'>
      <Box className="container">
        <Typography variant='h2'
          style={{
            fontFamily: "'Lexend Deca', 'sans-serif'",
            fontSize: '3.125rem',
            fontWeight: '700',
            color: '#fff',
            textAlign: 'center',
            margin: '36px 0'
          }}>
          Come in!
        </Typography>
        <hr />
        <Box
          style={{
            fontFamily: "'Lexend Deca', 'sans-serif'",
            color: '#fff',
            width: '80%',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '25px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            margin: '2.175rem auto'
          }}>
          Please select one of the below to continue
        </Box>
        <div style={{ margin: "4rem 0" }}>
          <Btn title="Personal" textColor="white" backgroundColor="#3c1361" link="/workspace" />
          <Btn title="Collaborative" textColor="#845C9B" backgroundColor="white" link="/workspace" />
        </div>
      </Box>
    </div >
  );
};

export default Homepage;
