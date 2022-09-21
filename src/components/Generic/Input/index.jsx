import React from 'react';
import { Container } from './style';

export const Input = ({
  type,
  onChange,
  value,
  defalutValue,
  placeholder,
  name,
  width,
  height,
}) => {
  return (
    <Container
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defalutValue}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;
