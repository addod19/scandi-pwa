import React, { Component } from 'react';
import { BsCart } from 'react-icons/bs';
import { RiArrowGoBackLine } from 'react-icons/ri';

import { NavBarWrap, NavBar, LeftBar, LeftBarItem, LeftBarItemLink, BorderBottom, MiddleBar, 
  LogoWrap, RightBar, DollarSymbolDropDown, Cart
} from '../styles/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      currency: '$',
      isShowCartOverlay: false,
    };

    this.toggleIsActive = this.toggleIsActive.bind(this);
    this.handleCurrencySymbolChange = this.handleCurrencySymbolChange.bind(this);
    this.toggleCartOverlay = this.toggleCartOverlay.bind(this);
    
  }

  toggleIsActive = (e) => {
    // const currentState = this.state.isActive;
    console.log(e.target.value);
    this.setState(prevState => ({isActive: !prevState.isActive}));
  }

  handleCurrencySymbolChange = (e) => {
    this.setState({
      currency: e.target.value,
    });

    // dispatch(changeCurSymbol(e.target.value));
  }

  toggleCartOverlay = (e) => {
    // const curState = this.state.isShowCartOverlay;
    // alert(curState);
    e.preventDefault();
    this.setState(prevState => ({
      isShowCartOverlay: !prevState.isShowCartOverlay,
    }));


  }

  render() {
    const { currency } = this.state;
    const symbols = [
      {
        value: '$',
      },
      {
        value: '£',
      },
      {
        value: 'A$',
      },
      {
        value: '¥',
      },
      {
        value: '₽'
      }
    ];
    console.log(currency);
    // const { currency } = this.state;
    return (
      <NavBarWrap>
        <NavBar>
          <LeftBar>
            <LeftBarItem className={this.state.isActive ? 'active' : 'not-active'} onClick={this.toggleIsActive}>
              <LeftBarItemLink >WOMEN </LeftBarItemLink>
              <BorderBottom />
            </LeftBarItem>
            <LeftBarItem className={this.state.isActive ? 'active' : 'not-active'} onClick={this.toggleIsActive}>
              <LeftBarItemLink >MEN</LeftBarItemLink>
              <BorderBottom />
            </LeftBarItem>
            <LeftBarItem className={this.state.isActive ? 'active' : 'not-active'} onClick={this.toggleIsActive}>
              <LeftBarItemLink >KIDS</LeftBarItemLink>
              <BorderBottom />
            </LeftBarItem>
          </LeftBar>
          <MiddleBar>
            <LogoWrap>
              <Link exact="true" to="/">
                <RiArrowGoBackLine />
              </Link>
            </LogoWrap>
          </MiddleBar>
          <RightBar>
            <DollarSymbolDropDown>
              <select value={currency} onChange={this.handleCurrencySymbolChange}>
                {
                  symbols.map((symbol) => (
                    <option key={symbol.value} value={symbol.value}>{symbol.value}</option>
                  ))
                }
              </select>
            </DollarSymbolDropDown>
            <Cart onClick={this.toggleCartOverlay}>
              <BsCart />
            </Cart>
          </RightBar>
        </NavBar>
      </NavBarWrap>
    )
  }
}

export default Navbar;
