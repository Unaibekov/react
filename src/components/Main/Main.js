import React from "react";
import { Hero } from "../Hero/Hero";
import { Lessons } from "../Lessons/Lessons";
import { Technology } from "../Technology/Technology";
import PageProgress from 'react-page-progress';
import { Order } from "../Order/Order";
import { Partners } from "../Partners/Partners";

export const Main = () => {
    
    return (        
        <div>
            <PageProgress color={'#adc8ff'} height={5} />
            <Hero />
            <Lessons id="lessons"/>
            <Technology />
            <Order />
            <Partners />
        </div>
    );
}