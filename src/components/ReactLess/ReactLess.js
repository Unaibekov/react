import React from 'react'; 
import styles from '../ReactLess/ReactLess.module.css'; 
import { Link } from 'react-router-dom';
import MainMenu from '../Main/MainMenu/MainMenu';


const ReactLess = () => {
    return (
        <div className={styles.bg}>
            <MainMenu className={styles.hiddenMenu}/>
            <Link className={styles.back} to='/'></Link>
        </div>
    )
}

export default ReactLess;