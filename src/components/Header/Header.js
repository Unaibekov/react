import React, { Component } from "react";
import logo from '../../assets/images/react-logo.svg'
import styles from '../Header/Header.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Header extends Component {

scrollToTop = () => {
    scroll.scrollToTop();
};

    render() {
        
        return (
            <nav className={styles.nav} id="navbar">
                <div className={styles.navContent}>
                    <img
                        src={logo}
                        className={styles.navLogo}
                        alt="Logo"
                        onClick={this.scrollToTop}
                    />
                    <ul className={styles.navItems}>
                        <li className={styles.navItem}>
                            <Link
                                activeClass={styles.active}
                                to="Lessons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                КУРСЫ
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};

