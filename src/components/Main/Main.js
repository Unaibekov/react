import React from 'react'; 
// import styles from '../Main/Main.module.css';
import MainBg from './MainBg/MainBg';
import Lessons from './Lessons/Lessons';
import Useful from './Useful/Useful';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            <MainBg />
            <Lessons />
            <Useful />
            <Footer />
        </div>
    );
};

export default Main;

