import { Blur, Container, Content, Img } from './style';
import { Button } from '../Generic';

import img1 from '../../assets/img/house1.png';

export const GenCarousel = () => {
  return (
    <Container>
      <Img src={img1} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home,
          the Week's Most Popular Home
        </Content.Title>

        <Button>Read More</Button>
      </Content>
    </Container>
  );
};

export default GenCarousel;
