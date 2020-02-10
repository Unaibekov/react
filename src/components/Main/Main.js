import React from "react";
import styles from '../Main/Main.module.css';
import { Hero } from "../Hero/Hero";
import { Lessons } from "../Lessons/Lessons";
import { Useful } from "../Useful/Useful";
import PageProgress from 'react-page-progress';
import { useSelector } from 'react-redux';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll'

export const Main = () => {
    const svgs = useSelector(state => state.svgs)
    
    return (        
        <div>
            <Link 
                activeClass={styles.active}
                to="Lessons"
                spy={true} 
                smooth={true} 
                offset={50}
                duration={500}
            >
                <svg
                    width="26" height="40" viewBox="0 0 26 40"
                    className={styles.down}
                    >
                    <path d={svgs.scrollDown} />
                </svg>
            </Link>
            <PageProgress color={'#adc8ff'} height={5} />
            <Hero />
            <Lessons id="Lessons"/>
            <Useful />
        </div>
    );
}