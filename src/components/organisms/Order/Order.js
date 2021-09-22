import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import Select from 'components/molecules/Select/Select';
import { Header } from 'components/atoms/Header/Header';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Form } from 'components/atoms/Form/Form';
import { Wrapper } from './Order.styles';
// import { flavours, additives } from 'data/formData';
import { useForm } from 'react-hook-form';
import { dataContext } from 'providers/DataProvider';
import SoupForm from 'components/molecules/SoupForm/SoupForm';

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const { addOrder, user } = useContext(dataContext);
  const formSubmit = (data) => {
    addOrder(data);
    history.push('/cart');
  };
  return (
    <Wrapper>
      {user ? (
        <>
          <Header>Make your order</Header>
          <SoupForm />
          <Form onSubmit={handleSubmit(formSubmit)}>
            <Paragraph small orange>
              Where to deliver?
            </Paragraph>
            <Input placeholder="*Street" {...register('street', { required: true })} />
            {errors.street && <span role="alert">Street is required</span>}
            <Input placeholder="*Number" {...register('number', { required: true })} />
            {errors.number && <span role="alert">Number is required</span>}
            <Paragraph small orange>
              When to deliver? (10:00 - 18:00)
            </Paragraph>
            <Input style={{ display: 'flex', flexDirection: 'row' }} type="time" min="10:00" max="18:00" placeholder="*Time" {...register('time')} />
            <Button>Order a soup</Button>
          </Form>
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
