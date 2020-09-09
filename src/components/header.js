import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <title>New Blog Site - Apsuma</title>
            <h1>New website for Apsuma</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header