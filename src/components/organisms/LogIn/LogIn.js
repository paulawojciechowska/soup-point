import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Input } from 'components/atoms/Input/Input';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, StyledParagraph } from './LogIn.styles';
import { useForm } from 'react-hook-form';
import { dataContext } from 'providers/DataProvider';

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn } = useContext(dataContext);
  let history = useHistory();
  const formSubmit = (data) => {
    logIn(data.email);
    history.push('/order');
  };
  return (
    <Wrapper as="form" onSubmit={handleSubmit(formSubmit)}>
      <Header>Log in</Header>
      <Input placeholder="*Email" {...register('email', { required: true })} />
      <Input placeholder="*Password" {...register('password', { required: true })} />
      <Button type="submit" orange>
        Login
      </Button>
      <StyledParagraph>Don't have account yet?</StyledParagraph>
      <Button grey onClick={() => history.push('/sign')}>
        Create account
      </Button>
    </Wrapper>
  );
};

export default LogIn;
