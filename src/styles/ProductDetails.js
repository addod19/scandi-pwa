import styled from 'styled-components';

const PDPWrapper = styled.section`
  width: 80%;
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
`;
const SmallImg = styled.img`
  width: 100px;
`;

const MainImageWrap = styled.div`
  width: 400px;
  height: 600px;
`;
const BigImg = styled.img`
  width: 400px;
  height: 600px;

  position: relative;
  bottom: 50px;
  right: 40px;
`;

const DetailsWrap = styled.div`
  width: 40%;
`;

const NameWrap = styled.div``;
const PDTName = styled.h3``;
const SizesWrap = styled.div``;
const SizesLabel = styled.h3``;
const SizesList = styled.ul`
  display: flex;
  gap: 10px;
`;

const XSmall = styled.div``;
const Small = styled.div``;
const Medium = styled.div``;
const Large = styled.div``;

const SizesBtn = styled.button``;


const PriceWrap = styled.div``;
const PriceLabel = styled.h2``;
const PriceAmount = styled.h3``;

const AddToCartBtn = styled.div``;
const DescriptionWrap = styled.div``;
const DescText = styled.p``;

export { PDPWrapper, ImageWrap, ImageSamplesWrap, MainImageWrap, DetailsWrap,
  NameWrap, SizesWrap, PriceWrap, AddToCartBtn, DescriptionWrap, SmallImg,
  BigImg, PDTName, SizesLabel, SizesList, SizesBtn, XSmall, Small, Medium, Large,
  PriceLabel, PriceAmount, DescText };