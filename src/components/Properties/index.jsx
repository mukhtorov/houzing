import React, { useEffect } from 'react';
import { Container } from './style';
import HouseCard from '../HouseCard';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = (props) => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [search]);

  return (
    <Container>
      {data.map((value) => {
        return <HouseCard key={value.id} data={value} />;
      })}
    </Container>
  );
};

export default Properties;
