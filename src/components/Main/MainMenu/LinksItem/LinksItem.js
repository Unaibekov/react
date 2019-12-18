import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../LinksItem/LinksItem.module.css';

const LinksItem = (props) => {

  return (
    <Link className={styles.item} to={props.path}>
      <div className={styles.title}>{props.title}</div>
    </Link>
  )
}

export default LinksItem;