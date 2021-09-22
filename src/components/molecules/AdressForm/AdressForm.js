import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'components/atoms/Form/Form';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import { TimeInput } from './AdressForm.styled';
import { useForm } from 'react-hook-form';
import { dataContext } from 'providers/DataProvider';

const AdressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const { addAddress, soups } = useContext(dataContext);
  const formSubmit = (data) => {
    if (!soups.length) {
      return alert('Add soup to the cart!');
    }
    addAddress(data);
    history.push('/cart');
  };
  return (
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
      <TimeInput type="time" min="10:00" max="18:00" placeholder="*Time" {...register('time')} />
      <Button>Order a soup</Button>
    </Form>
  );
};

export default AdressForm;
