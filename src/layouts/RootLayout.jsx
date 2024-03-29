import React from 'react'
import { Outlet, Link } from "react-router-dom"

const RootLayout = () => {
    return (
        <div>
            <Link to="login" >Login</Link>
            <Link to="register" >Register</Link>
            <Link to="workspace">Workspace</Link>
            <Outlet />
        </div>
    )
}

export default RootLayout
