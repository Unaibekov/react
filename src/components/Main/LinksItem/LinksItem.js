import React, {Component} from 'react';
import styles from '../LinksItem/LinksItem.module.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


class LinksItem extends Component {
  showLink () {
    return this.props.links.map ((link) => {
      return (
      <Link className={styles.item} key={link.id} to={link.path}>{link.title}</Link>
      );
    });
  }
  render () {
    return (
      <div className="d-flex column" onClick={this.props.closeSidebar}>
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

export default connect(mapStateToProps)(LinksItem);