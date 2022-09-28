import React from 'react';
import Carousel from '../Carousel';
import HouseCard from '../HouseCard';
import CategoryCard from '../CategoryCard';
import { Container } from './style';

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <HouseCard />
      <CategoryCard />
    </Container>
  );
};

export default Home;
