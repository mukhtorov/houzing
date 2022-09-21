import React from 'react';
import { Container } from './style';

export const Button = ({ children, type, onClick, width, height }) => {
  return (
    <Container onClick={onClick} type={type} width={width} height={height}>
      {children || 'Generic Button'}
    </Container>
  );
};

export default Button;
