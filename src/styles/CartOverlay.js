import styled from 'styled-components';

const CartOverlayContainer = styled.section`
  position: absolute;
  width: 325px;
  height: 540px;
  left: 1192px;
  top: 78px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  position: absolute;
  width: 118px;
  height: 26px;
  top: 10px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  text-align: right;
  color: #1D1F22;
`;

const Row1 = styled.section`
  display: flex;
  margin-top: 15%;
  width: 100%;
`;
const Column1 = styled.div`
  postion: relative;
  top: 20px;
  width: 45%;
  height: 200px;
  margin-left: 4%;
`;
const Column2 = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
`;


const Row2 = styled.section`
  display: flex;
`;

const Column3 = styled.div`
  postion: relative;
  width: 45%;
  height: 200px;
  margin-left: 4%;
`;
const Column4 = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
`;

const Namee = styled.div`
  bottom: 260px;
  position: absolute;
  height: 52px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1D1F22;
`;

const Row3 = styled.section``;

const Name = styled.div`
  top: 20px;
  position: absolute;
  height: 52px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1D1F22;
`;
const Other = styled.div`
  position: absolute;
  height: 52px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #1D1F22;
`;
const Price = styled.h4`
  position: static;
  margin-top: 30%;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  color: #1D1F22;
`;
const Sizes = styled.ul`
  margin-top: 10px;
  display: flex;
  gap: 40px;
`;
const SizesListItem = styled.li`
  list-style: none;
`;

const BtnAction = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: 1px solid #1D1F22;
  box-sizing: border-box;

  &:active {
    color: #A6A6A6;
  }
`;

const CartOverlayImg = styled.img`
  width: 140px;
  height: 200px;
  position: relative;
  bottom: 19%;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;

  width: 92%;
  margin: auto;
`;
const TotalValue = styled.h3``;
const TotalPlaceHolder = styled.h3``;
const BtnGroup = styled.div`
  display: flex;
  margin-top: 10px;
`;
const ViewBagWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  position: static;
  width: 140px;
  height: 43px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  border: 1px solid #1D1F22;
  box-sizing: border-box;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;
const ViewBagBtn = styled.button`
  position: static;

  border: none;
  background: none;
  left: calc(50% - 68px/2);
  top: calc(50% - 17px/2);
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #1D1F22;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;
const CheckoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  position: static;
  width: 140px;
  height: 43px;
  left: 0px;
  top: 0px;
  background: #5ECE7B;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;
const CheckoutBtn = styled.button`
  border: none;
  background: none;
  position: static;
  width: 101px;
  height: 37px;
  left: calc(50% - 81px/2);
  top: calc(50% - 17px/2);

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  /* identical to box height, or 17px */

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  /* --c-white */

  color: #FFFFFF;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;


export {
  CartOverlayContainer, H2,  Row1, Column1, Column2, Row2, Row3, BtnAction, Namee,
  Name, Other, Price, Sizes, SizesListItem, CartOverlayImg, BtnWrap, Column3, Column4,
  Total, TotalPlaceHolder, TotalValue, BtnGroup, ViewBagWrap, ViewBagBtn, CheckoutWrap,
  CheckoutBtn,
};