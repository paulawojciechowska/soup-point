import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './Order.styles';
import { dataContext } from 'providers/DataProvider';
import SoupForm from 'components/molecules/SoupForm/SoupForm';
import AdressForm from 'components/molecules/AdressForm/AdressForm';

const Order = () => {
  let history = useHistory();
  const { user } = useContext(dataContext);
  return (
    <Wrapper>
      {user ? (
        <>
          <Header>Make your order</Header>
          <SoupForm />
          <AdressForm />
        </>
      ) : (
        <>
          <Header>Please log in before order</Header>
          <Button onClick={() => history.push('/login')}>Login</Button>
        </>
      )}
    </Wrapper>
  );
};
export default Order;
