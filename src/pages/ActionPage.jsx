import React from 'react'
import Btn from '../components/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ActionPage = () => {
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
                    <Btn title="Login In" textColor="white" backgroundColor="#3c1361" link="/home" />
                    <Btn title="Sign Up" textColor="#845C9B" backgroundColor="white" link="/register" />
                </div>
            </Box>
        </div >
    )
}

export default ActionPage
