import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Item/Item.module.css';

const Item = (props) => {

  return (
    <Link to={props.path}>
      <div className={styles.item}>{props.title}</div>
    </Link>
  );
};

export default Item;