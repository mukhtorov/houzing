import React from 'react';
import { Input } from '../Generic';
import { Container } from './style';

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input width={200} placeholder={'test'} />
    </Container>
  );
};

export default Home;
