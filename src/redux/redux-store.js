import { combineReducers } from "redux";
import links from './links';
import svgs from './svgs';
import technologySlider from './technologySlider';
import partners from './partners'


export const allReducers = combineReducers ({
    links, svgs, technologySlider, partners
});