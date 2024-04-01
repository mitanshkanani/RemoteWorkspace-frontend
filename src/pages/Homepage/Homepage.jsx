import React from 'react'
import './homepage.css'
import Btn from '../../components/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
                    Welcome!
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
                    select the mode you would like to work in, next
                </Box>
                <div style={{ margin: "4rem 0" }}>
                    <Btn title="Personal" textColor="white" backgroundColor="#3c1361" />
                    <Btn title="Collaborative" textColor="#845C9B" backgroundColor="white" />
                </div>
            </Box>
        </div >
    )
}

export default Homepage
