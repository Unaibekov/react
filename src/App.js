import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.css';
import Main from './components/Main/Main';
import ReactLess from './components/ReactLess/ReactLess';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PageProgress from 'react-page-progress';
// import Scrollbar from 'react-scrollbars-custom';


function App() {
  return (
    <Router>
      <PageProgress color={'#adc8ff'} height={5} />
        <div className={styles.App}>
          <Route exact path='/' component={Main}/>
          <Route path='/reactless' component={ReactLess} />
        </div>
    </Router>
  );
}

export default App;
