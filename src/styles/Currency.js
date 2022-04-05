import styled from 'styled-components';

const CurrencyWrap = styled.div`
  position: absolute;
  width: 114px;
  height: 169px;
  left: 1430px;
  top: 65px;
  background: #FFFFFF;
  justify-content: center;
`;

const CurrencySymbol = styled.h3`

`;
const CurrencyLabel = styled.h4``;

const CurrencyLabelWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  height: 40px;
  
  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  /* identical to box height, or 29px */

  text-align: right;

  color: #1D1F22;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
  margin-bottom: 10px;

`;

export { CurrencyWrap, CurrencySymbol, CurrencyLabel, CurrencyLabelWrap };