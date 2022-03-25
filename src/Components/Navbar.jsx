import React, { Component } from 'react';
import styled from 'styled-components';
import { BsCart } from 'react-icons/bs';
import { RiArrowGoBackLine } from 'react-icons/ri';


const NavBarWrap = styled.section`
    width: 100vw;
    height: 100px;
`;
const NavBar = styled.nav`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const LeftBar = styled.ul`
    display: flex;
    alight-items: center;
    column-gap: 50px;
    margin-top: 30px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    /* identical to box height, or 19px */

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;

    /* --c-primary */

    color: #1D1F22;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 30px 0px;

`;
const LeftBarItem = styled.li`
  list-style: none;
`;
const LeftBarItemLink = styled.a``;
const BorderBottom = styled.div`
    width: 70px;
    height: 2px;
    background: green;
    margin-top: 5px;
`;

const MiddleBar = styled.div`
    margin-top: 30px;
`;
const LogoWrap = styled.div`
    background: linear-gradient(316.98deg, #52D67A 16.88%, #5AEE87 84.04%);
`;

const RightBar = styled.section`
    margin-top: 30px;
`;
const DollarSymbolDropDown = styled.ul``;
const Cart = styled.div``;


export default class 
 extends Component {

  constructor(props) {
    super(props);
    this.toggleIsActive = this.toggleIsActive.bind(this);
    this.state = {
      isActive: false
    }
  }

  toggleIsActive = (e) => {
    const currentState = this.state.isActive;
    console.log(e.target.value)
    this.setState( {isActive: !currentState} );
  }
  render() {
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
                    <RiArrowGoBackLine />
                </LogoWrap>
            </MiddleBar>
            <RightBar>
                <DollarSymbolDropDown>

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
