import React, { useContext } from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import CartInfo from 'components/molecules/CartInfo/CartInfo';
import OrderSoup from 'components/molecules/OrderSoup/OrderSoup';
import { dataContext } from 'providers/DataProvider';

export const Wrapper = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  width: 37vw;
`;
const Cart = () => {
  const { address } = useContext(dataContext);
  return (
    <Wrapper>
      <Header>ORDER SUMMARY</Header>
      {/* <CartInfo title="Soup flavour" content={order[0].flavour} /> */}
      {/* <CartInfo title="Additives" content={order[0].additive} /> */}
      <CartInfo title="Delivery Adress" content={`${address[0].street}, ${address[0].number}`} />
      <CartInfo title="Approximate delivery time" content={address[0].time} />
      <OrderSoup />
    </Wrapper>
  );
};

export default Cart;
