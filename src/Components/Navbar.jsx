import React, { Component } from 'react';
import { BsCart } from 'react-icons/bs';
import { RiArrowGoBackLine } from 'react-icons/ri';

import { NavBarWrap, NavBar, LeftBar, LeftBarItem, LeftBarItemLink, BorderBottom, MiddleBar, 
    LogoWrap, RightBar, DollarSymbolDropDown, Cart } from '../styles/Navbar';
import { Link } from "react-router-dom";

export default class Navbar
 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      currency: '$',
    }
  }

  toggleIsActive = (e) => {
    const currentState = this.state.isActive;
    console.log(e.target.value)
    this.setState( {isActive: !currentState} );
  }

  handleChange = (e) => {
    this.setState({
      currency: e.target.value,
    });
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
                  <select value={currency} onChange={this.handleChange}>
                    {
                      symbols.map((symbol) => (
                        <option key={symbol.value} value={symbol.value}>{symbol.value}</option>
                      ))
                    }
                  </select>
                </DollarSymbolDropDown>
                <Cart>
                    <BsCart />
                </Cart>
            </RightBar>
          </NavBar>
      </NavBarWrap>
    )
  }
}
