import React, { Component } from "react";
import logo from '../../assets/images/react-logo.svg'
import styles from '../Header/Header.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {

        return (
            <Navbar sticky="top" bg="light"  expand="lg">
                <img
                    src={logo}
                    className={styles.navLogo}
                    alt="Logo"
                    onClick={this.scrollToTop}
                />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Link
                            style={{cursor:'pointer'}}
                            className="mr3"
                            activeClass={styles.active}
                            to="Lessons"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            КУРСЫ
                        </Link>
                        <Link
                            style={{cursor:'pointer'}}
                            activeClass={styles.active}
                            to="Useful"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            ПОЛЕЗНОСТИ
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
};


