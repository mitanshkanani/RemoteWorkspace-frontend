import React from 'react'
import { Outlet } from "react-router-dom"

const ResourcesLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default ResourcesLayout
