import React, { Component } from "react";
// import logo from '../../assets/images/react-logo.svg'
import styles from '../Header/Header.module.css'
// import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import LinksItem from './LinksItem/LinksItem';
// import LessonsItem from '../Lessons/LessonsItem/LessonsItem';

export default class Header extends Component {

    showSettings(event) {
        event.preventDefault();
    };

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    toggleMenu() {
        this.setState(state => ({ menuOpen: !state.menuOpen }))
    }

    render() {

        let linksData = [
            { title: 'HTML', path: 'htmlless' },
            { title: 'CSS', path: 'cssless' },
            { title: 'JavaScript', path: 'javaless' },
            { title: 'React', path: 'reactless' }    
          ]
        
          let linksElement = linksData
            .map(links => <LinksItem title={links.title} path={links.path} />)

        return (
            <div>
                <Menu width={"100%"}>
                    <div className={styles.item}>
                        {/* <Link to='/reactless'>ertrerter</Link> */}
                        { linksElement }

                    </div>
                </Menu>
            </div>
        );
    };
};


