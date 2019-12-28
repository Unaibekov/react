import React from "react";
// import styles from '../Main/Main.module.css';
import MainBg from "../MainBg/MainBg";
import Lessons from "../Lessons/Lessons";
import Useful from "../Useful/Useful";
import PageProgress from 'react-page-progress';



const Main = () => {
    return (
        <div>
            <PageProgress color={'#adc8ff'} height={5} />
            <MainBg />
            <Lessons />
            <Useful />
        </div>
    );
}
export default Main;