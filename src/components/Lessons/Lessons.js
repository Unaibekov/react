import React, { Component } from 'react';
import styles from '../Lessons/Lessons.module.css';
import {connect} from 'react-redux';
import LessonsItem from './LessonsItem/LessonsItem';

class Lessons extends Component {
  showLink () {
    return this.props.links.map ((link) => {
      return (
        <LessonsItem id="lessons" image={link.image} title={link.title} path={link.path} />
      )
    })
  }
  render () {
    return (
      <div className={`${styles.dFlex} ${styles.flexWrap}`}>
        {this.showLink ()}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    links: state.links
  };
}

export default connect(mapStateToProps)(Lessons);