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

export { FilterWrap, ProductListingWrap, Container };