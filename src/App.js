import React from 'react';
import styles from './App.module.css';
import Main from './components/Main/Main';
import Lessons from './components/Lessons/Lessons';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Useful from './components/Useful/Useful';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className={styles.App}>
        <Header className="header" />
        <Main />
        <Lessons id="Lessons"/>
        <Useful id="Useful"/>
        <Footer />
      </div>
  );
}

export default App;
