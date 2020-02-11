import React from "react";
import { Hero } from "../Hero/Hero";
import { Lessons } from "../Lessons/Lessons";
import { Useful } from "../Useful/Useful";
import PageProgress from 'react-page-progress';

export const Main = () => {
    
    return (        
        <div>
            <PageProgress color={'#adc8ff'} height={5} />
            <Hero />
            <Lessons id="Lessons"/>
            <Useful />
        </div>
    );
}