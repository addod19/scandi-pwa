import React, { Component } from 'react';

import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

import ProductListing from './Containers/ProductListing';
import PDetails from './Containers/PDetails';
import { StyledApp, StyledNav } from './styles/AppStyle';
import Navbar from './Components/Navbar';

// eslint-disable-next-line react/prefer-stateless-function
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
              <Route exact path="/" element={<ProductListing />} />
              <Route exact path="/:id" element={<PDetails />} />
            </Routes>
          </StyledApp>
        </div>
      </Router>
    );
  }
}
