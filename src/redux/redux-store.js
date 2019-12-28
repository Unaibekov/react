import { combineReducers } from "redux";
import LinksReducers from './links';

const allReducers = combineReducers ({
    links: LinksReducers
});

export default allReducers;