import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';
const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg}></Image>
    </Container>
  );
};

export default SignIn;
