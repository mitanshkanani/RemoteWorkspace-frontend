import React from 'react'
import { Outlet, Link } from "react-router-dom"

const AccessLayout = () => {
    return (
        <div>
            <Link to="projects">Projects</Link>
            <Link to="resources">Resources</Link>
            <Link to="notes">Notes</Link>
            <Link to="media">Media</Link>
            <Outlet />
        </div>
    )
}

export default AccessLayout
