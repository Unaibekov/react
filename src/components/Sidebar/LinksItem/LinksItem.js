import React from 'react';
// import styles from '../LinksItem/LinksItem.module.css';
import Item from '../LinksItem/Item/Item';

const LinksItem = () => {

  const linksData = [
    { title: 'HTML', path: 'htmlless', },
    { title: 'CSS', path: 'cssless' },
    { title: 'JavaScript', path: 'javaless' },
    { title: 'React', path: 'reactless' } 
  ];

  const linksElement = linksData
    .map(links => <Item title={links.title} path={links.path} />)

  return (
    <div>
      { linksElement }
    </div>
  );
};

export default LinksItem;