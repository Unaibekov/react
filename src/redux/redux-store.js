import { combineReducers } from "redux";
import links from './links';
import svgs from './svgs';
import usefulSlider from './usefulSlider';
import partners from './partners'


export const allReducers = combineReducers ({
    links, svgs, usefulSlider, partners
});