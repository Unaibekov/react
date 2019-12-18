import React, { Component } from "react";
import logo from '../../../assets/images/react-logo.svg'
import styles from '../MainMenu/MainMenu.module.css'
import LinksItem from './LinksItem/LinksItem';

export default class MainMenu extends Component {

    render() {

        let linksData = [
            { title: 'HTML', path: 'htmlless' },
            { title: 'CSS', path: 'cssless' },
            { title: 'JavaScript', path: 'javaless' },
            { title: 'React', path: 'reactless' }
        ]

        const linksElement = linksData
            .map(links => <LinksItem title={links.title} path={links.path} />)

        return (
            <div className={styles.mainMenu}>
                <input type="checkbox" id="hmt" className={styles.hiddenMenuTicker} />
                <label className={styles.btnMenu} for="hmt">
                    <span className={styles.first}></span>
                    <span className={styles.second}></span>
                    <span className={styles.third}></span>
                </label>
                <div className={styles.hiddenMenu}>
                    <div className={`${styles.jsb} ${styles.column} ${styles.height}`}>
                        <div className={`${styles.profile} ${styles.jca} ${styles.column}`}>
                            <img src={logo} alt="" />
                        </div>
                        <div className={styles.mainMenuContent}>
                            {linksElement}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};