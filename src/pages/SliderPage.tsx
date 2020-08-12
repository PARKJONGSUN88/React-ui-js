import React from 'react';
import styled from 'styled-components';
import Slider from '../components/Slider/Slider';
import facebook from '../img/facebook.png';
import insta from '../img/instagram.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';

const SliderPage = () => {
  return (
    <>
      <Cover>
        <Slider
          items={[
            {
              item: <img src={facebook} alt="" width="100%" height="450px" />,
              url: '1',
            },
            {
              item: <img src={insta} alt="" width="100%" height="450px" />,
              url: '2',
            },
            {
              item: <img src={twitter} alt="" width="100%" height="450px" />,
              url: '3',
            },
            {
              item: <img src={youtube} alt="" width="100%" height="450px" />,
              url: '4',
            },
          ]}
        />
      </Cover>
    </>
  );
};

export default SliderPage;

const Cover = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
  /* border: 1px solid black; */
`;
