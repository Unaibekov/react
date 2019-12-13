import React, { Component } from "react";
import logo from '../../../assets/images/react-logo.svg'
import styles from '../Header/Header.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'

export default class Header extends Component {

    showSettings(event) {
        event.preventDefault();
    };

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    constructor (props) {
        super(props)
        this.state = {
        menuOpen: false
    }
    }

    
    handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
    }
    
    closeMenu () {
    this.setState({menuOpen: false})
    }

    toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
    }
    

    render() {

        return (
            <div>
                <Menu>
                    <Link
                        style={{ cursor: 'pointer' }}
                        className="mr3"
                        activeClass={styles.active}
                        to="Lessons"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => this.closeMenu()}
                    >
                        КУРСЫ
                    </Link>
                    <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                </Menu>
                {/* <Navbar sticky="top" bg="light" expand="lg">
                    <Navbar.Brand
                        onClick={this.scrollToTop}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            alt="logo"
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-middle"
                        />
                        ШПАРГАЛКА
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav>
                            <Link
                                style={{ cursor: 'pointer' }}
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
                                style={{ cursor: 'pointer' }}
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
                </Navbar> */}
            </div>
        );
    };
};


