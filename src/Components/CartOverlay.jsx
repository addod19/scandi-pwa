import React, { Component } from 'react';

import { CartOverlayContainer, H2, Row1, Column1, Column2, Row2, BtnAction, Column3,
  Row3, Name, Other, Price, Sizes, SizesListItem, CartOverlayImg, BtnWrap, Column4, Namee,
  Total, TotalPlaceHolder, TotalValue, BtnGroup, ViewBagWrap, ViewBagBtn, CheckoutWrap,
  CheckoutBtn,
} from '../styles/CartOverlay';

class CartOverlay extends Component {

  constructor(props) {
    super(props);

    console.log(this.props);
  }
  render() {
    return (
      <CartOverlayContainer className='modalOpen'>
        <H2>My bag, {"2 items"}</H2>
        <Row1>
          <Column1>
            <Name>Apollo</Name>
            <Other>Running Short</Other>
            <Price>{`$`}50.00</Price>
            <Sizes>
              <SizesListItem name="small" value={this.props.sizes}>
                <BtnAction>S</BtnAction>
              </SizesListItem>
              <SizesListItem name="medium" value={this.props.sizes}>
                <BtnAction>M</BtnAction>
              </SizesListItem>
            </Sizes>
          </Column1>
          <Column2>
            <BtnWrap>
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </BtnWrap>
            <CartOverlayImg
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000" alt="check me" />
          </Column2>
        </Row1>
        <Row2>
        <Column3>
            <Namee>Jupiter</Namee>
            <Other>Wayfarer</Other>
            <Price>{`$`}75.00</Price>
            <Sizes>
              <SizesListItem name="small" value={this.props.sizes}>
                <BtnAction>S</BtnAction>
              </SizesListItem>
              <SizesListItem name="medium" value={this.props.sizes}>
                <BtnAction>M</BtnAction>
              </SizesListItem>
            </Sizes>
          </Column3>
          <Column4>
            <BtnWrap>
              <button>+</button>
              <p>2</p>
              <button>-</button>
            </BtnWrap>
            <CartOverlayImg
              src="https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg" alt="check me" />
          </Column4>
        </Row2>
        <Row3>
          <Total>
            <TotalPlaceHolder>Total</TotalPlaceHolder>
            <TotalValue>$100</TotalValue>
          </Total>
          <BtnGroup>
            <ViewBagWrap>
              <ViewBagBtn>VIEW BAG</ViewBagBtn>
            </ViewBagWrap>
            <CheckoutWrap>
              <CheckoutBtn>CHECK OUT</CheckoutBtn>
            </CheckoutWrap>
          </BtnGroup>
        </Row3>
      </CartOverlayContainer>
    )
  }
}

export default CartOverlay;

