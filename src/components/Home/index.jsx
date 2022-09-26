import React from 'react';
import Carousel from '../Carousel';
import HouseCard from '../HouseCard';
import { Container } from './style';

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <HouseCard />
    </Container>
  );
};

export default Home;
