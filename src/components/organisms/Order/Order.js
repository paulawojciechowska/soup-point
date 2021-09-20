import React, { useContext } from 'react';
import Select from 'components/molecules/Select/Select';
import { Header } from 'components/atoms/Header/Header';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Wrapper, Form } from './Order.styles';
import { flavours, additives } from 'data/formData';
import { useForm } from 'react-hook-form';
import { dataContext } from 'providers/DataProvider';

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addOrder } = useContext(dataContext);
  const formSubmit = (data) => {
    addOrder(data);
  };
  return (
    <Wrapper>
      <Header>Make your order</Header>
      <Form onSubmit={handleSubmit(formSubmit)}>
        <Paragraph small orange>
          Soup
        </Paragraph>
        <Select name="flavour" options={flavours} {...register('flavour', { required: true })} />
        {errors.flavour && <span role="alert">Pick flavour!</span>}
        <Select name="additive" options={additives} {...register('additive')} />
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
    </Wrapper>
  );
};
export default Order;
