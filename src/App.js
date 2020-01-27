import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import allReducers from './redux/redux-store';

import styles from './App.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SideBar from 'react-sidebar';

import HtmlLess from './components/Lessons/HtmlLess/HtmlLess';
import CssLess from './components/Lessons/CssLess/CssLess';
import JavaLess from './components/Lessons/JavaLess/JavaLess';
import ReactLess from './components/Lessons/ReactLess/ReactLess';
import { LinksItem } from './components/Main/LinksItem/LinksItem';
import { Main } from './components/Main/Main';

const store = createStore(allReducers);

const mql = window.matchMedia(`(min-width: 1200px)`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
  toggleOpen(ev) {
    this.setState({ open: !this.state.open });
    if (ev) {
      ev.preventDefault();
    }
  }
  render() {
    const svg = {
      menu1: 'M112 6H12C5.4 6 0 11.4 0 18C0 24.6 5.4 30 12 30H112C118.6 30 124 24.6 124 18C124 11.4 118.6 6 112 6Z',
      menu2: 'M112 50H12C5.4 50 0 55.4 0 62C0 68.6 5.4 74 12 74H112C118.6 74 124 68.6 124 62C124 55.4 118.6 50 112 50Z',
      menu3: 'M112 94H12C5.4 94 0 99.4 0 106C0 112.6 5.4 118 12 118H112C118.6 118 124 112.6 124 106C124 99.4 118.6 94 112 94Z',
      close: 'M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z'
    }
    return (
      <Provider store={store}>

        <Router>
          <SideBar
            sidebarClassName={styles.sidebar}
            sidebar={[
              <div className="d-flex justify-content-end align-items-center m3">
                <svg
                width="32" height="32" viewBox="0 0 348 348"
                  className={styles.close}
                  onClick={() => this.onSetSidebarOpen(false)}
                >
                  <path d={svg['close']} />
                </svg>
              </div>,
              <Link className={styles.item} to='/' onClick={() => this.onSetSidebarOpen(false)}>Home</Link>,
              <LinksItem closeSidebar={() => this.onSetSidebarOpen(false)} />]
            }
            open={this.state.sidebarOpen}
            // docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
          >
            <div className={styles.App}>
              <svg
                width="32" height="32" viewBox="0 0 124 124"
                className={styles.menu}
                onClick={() => this.onSetSidebarOpen(true)}
              >
                <path d={svg['menu1']} />
                <path d={svg['menu2']} />
                <path d={svg['menu3']} />
                <linearGradient id="my-cool-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#447799" />
                  <stop offset="50%" stop-color="#224488" />
                  <stop offset="100%" stop-color="#112266" />
                </linearGradient>
              </svg>
              <Route exact path='/' component={Main} />
              <Route path='/htmlless' component={HtmlLess} />
              <Route path='/cssless' component={CssLess} />
              <Route path='/javaless' component={JavaLess} />
              <Route path='/reactless' component={ReactLess} />
            </div>
          </SideBar>
        </Router>
      </Provider>
    );
  };
}
export default App;
