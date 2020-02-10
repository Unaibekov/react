import React from 'react';
import styles from '../LinksItem/LinksItem.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const LinksItem = ({closeSidebar}) => {
  const links = useSelector(state => state.links);
  return (
    <div className="d-flex column" onClick={closeSidebar}>
      {links.map(link => {
        return <Link  className={styles.item} key={link.id} to={link.path}>{link.title}</Link>;
      })}
    </div>
  );
}