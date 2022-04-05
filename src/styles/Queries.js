import styled from 'styled-components';

const ProductCardWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 25px 25px;
  height: 450px;
  width: 400px;
`;

const Img = styled.img`
  width: 356px;
  height: 388px
`;

const H3 = styled.h3`
  position: relative;
  top: 200px;
  left: 100px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;

  display: flex;
  align-items: center;

  color: #8D8F9A;

  text-decoration: none;
`;


const ProductCard = styled.div`

`;


export { ProductCardWrap, Img, H3, ProductCard };