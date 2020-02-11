import { combineReducers } from "redux";
import links from './links';
import svgs from './svgs';
import usefulSlider from './usefulSlider';


export const allReducers = combineReducers ({
    links, svgs, usefulSlider
});