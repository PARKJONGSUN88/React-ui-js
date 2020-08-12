import React from 'react';
import styled from 'styled-components';
import SliderThree from '../components/SliderThree/SliderThree';
import movie1 from '../img/movie1.jpg';
import movie2 from '../img/movie2.jpg';
import movie3 from '../img/movie3.jpg';
import movie4 from '../img/movie4.jpg';
import movie5 from '../img/movie5.jpg';
import movie6 from '../img/movie6.jpg';

const SliderThreePage = () => {
  return (
    <>
      <Cover>
        <SliderThree
          items={[
            {
              item: <img src={movie1} alt="" width="100%" />,
              url: '1',
            },
            {
              item: <img src={movie2} alt="" width="100%" />,
              url: '2',
            },
            {
              item: <img src={movie3} alt="" width="100%" />,
              url: '3',
            },
            {
              item: <img src={movie4} alt="" width="100%" />,
              url: '4',
            },
            {
              item: <img src={movie5} alt="" width="100%" />,
              url: '5',
            },
            {
              item: <img src={movie6} alt="" width="100%" />,
              url: '6',
            },
          ]}
        />
      </Cover>
    </>
  );
};

export default SliderThreePage;

const Cover = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  /* border: 1px solid black; */
`;
