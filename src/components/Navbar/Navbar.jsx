import React from "react";
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a href="/profile" className="">Profile</a>
            </div>
            <div className={styles.item}>
                <a href="/dialogs" className="">Messages</a>
            </div>
            <div className={styles.item}>
                <a className="">News</a>
            </div>
            <div className={styles.item}>
                <a className="">Music</a>
            </div>
            <div className={styles.item}>
                <a className="">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;