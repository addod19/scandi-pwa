import styled from 'styled-components';

const FilterWrap = styled.div`
  text-align: center;
`;

const ProductListingWrap = styled.div`
  display: block;
  @media only screen and (min-width: 578px) and (max-width: 1024px) {
    width: 100%;
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 20px;
    margin-top: 10px;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const H1 = styled.h1`
    position: absolute;
    left: 10%;
    width: 299px;
    height: 68px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #1D1F22;
`;

export {
  FilterWrap, ProductListingWrap, Container, H1,
};
