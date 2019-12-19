import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.css';
import ReactLess from './components/Lessons/ReactLess/ReactLess';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PageProgress from 'react-page-progress';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <Router>
      <PageProgress color={'#adc8ff'} height={5} />
      <div className={styles.App}>
        <Route exact path='/' component={Sidebar}/>
        <Route path='/reactless' component={ReactLess} />
      </div>
    </Router>
  );
};

export default App;
