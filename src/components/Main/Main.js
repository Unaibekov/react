import React from "react";
import styles from '../Main/Main.module.css';
import MainBg from "../MainBg/MainBg";
import { Lessons } from "../Lessons/Lessons";
import Useful from "../Useful/Useful";
import PageProgress from 'react-page-progress';
import { useSelector } from 'react-redux';
// import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'



const Main = () => {
    const svgs = useSelector(state => state.svgs)
    
    return (
        
        <div>
            <Link 
                to="lessons"
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
            <MainBg />
            <Lessons id="lessons"/>
            <Useful />
        </div>
    );
}
export default Main;