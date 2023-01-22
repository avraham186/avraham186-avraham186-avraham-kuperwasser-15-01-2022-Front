import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {

    return (
        <header className='header'>
            <nav className="main-nav flex space-between">
                <div className="links flex space-between">
                    <Link to='/'>main screen</Link>
                    <Link to='/favorit-cities'>favorit cities</Link>
                </div>
            </nav>
        </header>
    )
}