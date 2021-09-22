import React, { useContext } from 'react';
import Select from 'components/molecules/Select/Select';
import { Form } from 'components/atoms/Form/Form';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { flavours, additives } from 'data/formData';
import { useForm } from 'react-hook-form';
import { dataContext } from 'providers/DataProvider';
import { ButtonWrapper, IconButton } from './SoupForm.styles';

const SoupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { addSoup } = useContext(dataContext);
  const formSubmit = (data) => {
    addSoup(data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
      <Paragraph small orange>
        Soup
      </Paragraph>
      <Select name="flavour" options={flavours} {...register('flavour', { required: true })} />
      {errors.flavour && <span role="alert">Pick flavour!</span>}
      <Select name="additive" options={additives} {...register('additive')} />
      <ButtonWrapper>
        <IconButton type="submit">+</IconButton>
        <Paragraph small orange>
          Add soup to cart
        </Paragraph>
      </ButtonWrapper>
    </Form>
  );
};

export default SoupForm;
