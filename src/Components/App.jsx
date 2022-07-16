import React, { Component } from 'react';

import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';

import ProductListing from '../Containers/ProductListing';
import PDetails from '../containers/PDetails';
import { StyledApp, StyledNav } from '../styles/AppStyle';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <StyledApp>
            <StyledNav>
              <Link exact="true" to="/">
                <h1 className="cata">Category</h1>
              </Link>
            </StyledNav>
            <Routes>
              <Route exact path="/" component={<ProductListing />} />
              <Route exact path="/:id" component={<PDetails />} />
            </Routes>
          </StyledApp>
        </div>
      </Router>
    )
  }
}
