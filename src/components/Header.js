import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'

const Header = () => {
    return (
        <header>
            <div className='header_wrap'>
                <Link className='link-home' href={"www.google.com"} >Home
                </Link>
            </div>
            <NavBar />
        </header>
    )
}

export default Header