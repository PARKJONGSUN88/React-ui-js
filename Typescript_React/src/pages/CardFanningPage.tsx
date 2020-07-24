import React from 'react';
import styled from 'styled-components';
import CardFanning from '../components/CardFanning';

const Cover = styled.div`
  position: fixed;
  top: 300px;
  left: 300px;
`;

const CardFanningPage = () => {
  return (
    <Cover>
      <CardFanning />
    </Cover>
  );
};

export default CardFanningPage;
