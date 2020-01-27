import { combineReducers } from "redux";
import links from './links';
import svgs from './svgs';


const allReducers = combineReducers ({
    links, svgs,
});

export default allReducers;