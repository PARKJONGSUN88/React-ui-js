import React from 'react';
import styled from 'styled-components';
import SliderThree from '../components/SliderThree/SliderThree';
import movie1 from '../img/movie1.jpg';
import movie2 from '../img/movie2.jpg';
import movie3 from '../img/movie3.jpg';
import movie4 from '../img/movie4.jpg';
import movie5 from '../img/movie5.jpg';

const SliderThreePage = () => {
  return (
    <>
      <Cover>
        <SliderThree
          items={[
            {
              item: <img src={movie1} alt="" width="100%" />,
              url: '도둑들',
            },
            {
              item: <img src={movie2} alt="" width="100%" />,
              url: '부산행',
            },
            {
              item: <img src={movie3} alt="" width="100%" />,
              url: '서울역',
            },
            {
              item: <img src={movie4} alt="" width="100%" />,
              url: '베테랑',
            },
            {
              item: <img src={movie5} alt="" width="100%" />,
              url: '아바타',
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
`;
