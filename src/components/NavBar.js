import Link from 'next/link'
import React from 'react';
import styles from '../styles/header_ss.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <ul>
                    <li><Link href=''>HOME</Link></li>
                    <li><Link href=''>ABOUT</Link></li>
                    <li>CONTACT NOW</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar