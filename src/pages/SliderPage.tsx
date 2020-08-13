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
              item: <img src={facebook} alt="" width="100%" />,
              url: '페이스북',
            },
            {
              item: <img src={insta} alt="" width="100%" />,
              url: '인스타',
            },
            {
              item: <img src={twitter} alt="" width="100%" />,
              url: '트위터',
            },
            {
              item: <img src={youtube} alt="" width="100%" />,
              url: '유튜브',
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
`;
