import styled from 'styled-components';

const PDPWrapper = styled.section`
  width: 90%;
  display: flex;
  margin: auto;
`;

const ImageWrap = styled.div`
  width: 60%;
  display: flex;
`;

const ImageSamplesWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 7em;
`;
const SmallImg = styled.img`
  width: 100%;
  height: 6em;
  margin: 5px;
`;

const MainImageWrap = styled.div`
  width: 400px;
  height: 600px;
`;
const BigImg = styled.img`
  width: 400px;
  height: 600px;
  position: relative;
  bottom: 20px;
  right: 1px;
  margin-left: 30px;
`;

const DetailsWrap = styled.div`
  width: 60%;
  margin-top: -20px;
`;

const NameWrap = styled.div`
  height: 150px;
`;
const PDTName = styled.h3`
  height: 130px;
  width: 80%;
  margin: auto;
`;
const Apollo = styled.div`
  position: absolute;
  width: 292px;
  height: 27px;
  // left: 929px;
  top: 100px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #1D1F22;
`;
const RunShort = styled.div`
  position: absolute;
  width: 292px;
  height: 27px;
  // left: 929px;
  top: 143px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #1D1F22;
`;
const SizesWrap = styled.div`
  width: 80%;
  height: 120px;
  margin: auto;
`;
const SizesLabel = styled.h3`
  position: absolute;
  width: 38px;
  height: 18px;
  // left: 929px;
  top: 213px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1D1F22;
`;
const SizesList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  text-align: center;
  color: #1D1F22;
  position: absolute;
  width: 38px;
  height: 18px;
  // left: 929px;
  top: 260px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
`;

const XSmall = styled.div`
  
`;
const Small = styled.div``;
const Medium = styled.div``;
const Large = styled.div``;

const SizesBtn = styled.button`
  width: 63px;
  height: 45px;
  top: 299px;

  &:active {
    // change color to #000000 if selected
  }
`;

const PriceWrap = styled.div`
  margin: auto;
  height: 100px;
  width: 80%;
`;
const PriceLabel = styled.h2`
  position: absolute;
  width: 50px;
  height: 18px;
  // left: 929px;
  top: 324px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1D1F22;
`;
const PriceAmount = styled.h3`
  position: absolute;
  width: 86px;
  height: 46px;
  // left: 929px;
  top: 352px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #1D1F22;
`;

const AddToCartBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  position: absolute;
  width: 292px;
  height: 52px;
  left: 729px;
  top: 418px;
  background: #5ECE7B;

  &:hover {
    cursor: pointer;
  }
`;
const DescriptionWrap = styled.div`
  position: absolute;
  width: 292px;
  height: 103px;
  left: calc(42% - 392px/2 + 355px);
  bottom: -60px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  color: #1D1F22;
`;
const DescText = styled.p`
  position: absolute;
  top: -40px;
`;

const AddToCarAction = styled.button`
  border: none;
  background: none;
  color: #FFFFFF;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &:active {
    color: yellow;
  }
`;

export { PDPWrapper, ImageWrap, ImageSamplesWrap, MainImageWrap, DetailsWrap,
  NameWrap, SizesWrap, PriceWrap, AddToCartBtn, DescriptionWrap, SmallImg,
  BigImg, PDTName, SizesLabel, SizesList, SizesBtn, XSmall, Small, Medium, Large,
  PriceLabel, PriceAmount, DescText, Apollo, RunShort, AddToCarAction };