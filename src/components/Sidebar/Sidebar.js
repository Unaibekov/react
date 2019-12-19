import React from "react";
import menu from '../../assets/images/menu.svg';
import styles from '../Sidebar/Sidebar.module.css';
import SideBar from 'react-sidebar';
import MainBg from "../MainBg/MainBg";
import Lessons from "../Lessons/Lessons";
import Useful from "../Useful/Useful";
// import LessonsItem from "../Lessons/LessonsItem/LessonsItem";
import LinksItem from "../Sidebar/LinksItem/LinksItem";

const mql = window.matchMedia(`(min-width: 1200px)`);

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false
        };
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }
    toggleOpen(ev) {
        this.setState({ open: !this.state.open });
        if (ev) {
            ev.preventDefault();
        }
    }

    render() {

        return (
            <SideBar
                sidebarClassName={styles.sidebar}
                sidebar={ <LinksItem /> }
                open={this.state.sidebarOpen}
                // docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
            >
                <img src={menu} alt="menu" className={styles.menu} onClick={() => this.onSetSidebarOpen(true)} />
                <MainBg />
                <Lessons />
                <Useful />
            </SideBar>
        );
    }
}

export default Sidebar;