import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.css';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLess from './components/ReactLess/ReactLess';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Route exact path='/' component={Main}/>
        <Route path='/reactless' component={ReactLess} />
      </div>
    </Router>
  );
}

export default App;
