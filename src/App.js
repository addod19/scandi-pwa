import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import CategoryList from './Components/CategoryList';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Navbar />
        <div className='grid'>
          <CategoryList />
        </div>
      </div>
    );
  }
}

export default App;
