import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <h1>ROUTING</h1>
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
            </ul>
        </>
    )
}

export default Header