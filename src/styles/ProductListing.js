import styled from 'styled-components';

const Title = styled.h3`
  position: static;
  height: 29px;
  left: 0px;
  right: 0px;
  top: 0px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */

  display: flex;
  align-items: center;

  /* --c-black */

  color: #1D1F22;


  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
`;

const Label = styled.h4`
position: static;
left: 10%;
right: 0%;
top: 0%;
bottom: 0%;

text-decoration: none;

/* --price-regular-font */

font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 160%;
/* identical to box height, or 29px */

text-align: right;

/* --c-black */

color: #1D1F22;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`;

export { Title, Label };