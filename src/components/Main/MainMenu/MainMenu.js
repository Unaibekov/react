import React, { Component } from "react";
import logo from '../../../assets/images/react-logo.svg'
import styles from '../MainMenu/MainMenu.module.css'
import LinksItem from './LinksItem/LinksItem';
import Sidebar from 'react-sidebar';

const defaultStyles = {
    root: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden"
    },
    sidebar: {
      zIndex: 2,
      position: "absolute",
      top: 0,
      bottom: 0,
      transition: "transform .3s ease-out",
      WebkitTransition: "-webkit-transform .3s ease-out",
      willChange: "transform",
      overflowY: "auto"
    },
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
      transition: "left .3s ease-out, right .3s ease-out"
    },
    overlay: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      visibility: "hidden",
      transition: "opacity .3s ease-out, visibility .3s ease-out",
      backgroundColor: "rgba(0,0,0,.3)"
    },
    dragHandle: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      bottom: 0
    }
  };

class MainMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: true
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
  
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }


    




  
    render() {
      return (
        <Sidebar
          sidebar={<b>Sidebar content</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
          </button>
        </Sidebar>
      );
    }
  }
  
  export default MainMenu;




// export default class MainMenu extends Component {

//     render() {

//         let linksData = [
//             { title: 'HTML', path: 'htmlless' },
//             { title: 'CSS', path: 'cssless' },
//             { title: 'JavaScript', path: 'javaless' },
//             { title: 'React', path: 'reactless' }
//         ]

//         const linksElement = linksData
//             .map(links => <LinksItem title={links.title} path={links.path} />)

//         return (
//             <div className={styles.mainMenu}>
//                 <input type="checkbox" id="hmt" className={styles.hiddenMenuTicker} />
//                 <label className={styles.btnMenu} for="hmt">
//                     <span className={styles.first}></span>
//                     <span className={styles.second}></span>
//                     <span className={styles.third}></span>
//                 </label>
//                 <div className={styles.hiddenMenu}>
//                     <div className={`${styles.jsb} ${styles.column} ${styles.height}`}>
//                         <div className={`${styles.profile} ${styles.jca} ${styles.column}`}>
//                             <img src={logo} alt="" />
//                         </div>
//                         <div className={styles.mainMenuContent}>
//                             {linksElement}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };
// };