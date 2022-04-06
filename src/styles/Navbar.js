import styled from 'styled-components';

const NavBarWrap = styled.section`
  width: 99%;
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
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
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
  display: flex;
`;
const DollarSymbolDropDown = styled.ul`
  margin-right: 5px;
`;
const Cart = styled.div`
  margin-left: 5px;
`;


export { NavBarWrap, NavBar, LeftBar, LeftBarItem, LeftBarItemLink, BorderBottom, MiddleBar, 
  LogoWrap, RightBar, DollarSymbolDropDown, Cart };