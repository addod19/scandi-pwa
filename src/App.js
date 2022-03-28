import React, { Component } from 'react';

import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';

import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';
import { StyledApp, StyledNav } from './styles/AppStyle';
import Navbar from './Components/Navbar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <StyledApp>
            <StyledNav>
              <Navbar />
            </StyledNav>
            <Routes>
              <Route exact path="/" element={<ProductListing /> } />
              <Route exact path="/:id" element={<ProductDetails /> } />
            </Routes>
          </StyledApp>
        </div>
      </Router>
    )
  }
}
