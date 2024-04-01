import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

const Btn = ({ title, textColor, backgroundColor, link }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '28px auto'
            }}>
            <Button variant="contained"
                style={{
                    fontFamily: "'Lexend Deca', 'sans-serif'",
                    fontWeight: '600',
                    fontSize: '1rem',
                    // width: '170px',
                    height: '44px',
                    padding: '0 1.25rem',
                    backgroundColor: backgroundColor,
                    borderRadius: '50px',
                    boxShadow: '5px 5px #282828',
                }}><NavLink
                    to={link}
                    style={{ textDecoration: "none", color: textColor }}>
                    {title}
                </NavLink>
            </Button>
        </div >
    )
}

export default Btn
