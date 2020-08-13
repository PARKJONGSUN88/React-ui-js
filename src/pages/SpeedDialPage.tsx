import React from 'react';
import styled from 'styled-components';
import SpeedDial from '../components/SpeedDial/SpeedDial';
import menu from '../img/reactcircle.png';
import facebook from '../img/facebook.png';
import insta from '../img/instagram.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';

const SpeedDialPage = () => {
  return (
    <>
      <Cover>
        <SpeedDial
          button={<img src={menu} alt="" width="100%" />}
          fDeg={0}
          deg={-45}
          between={100}
          dials={[
            { icon: <img src={facebook} alt="" width="100%" /> },
            { url: false, icon: <img src={insta} alt="" width="100%" /> },
            { url: 1, icon: <img src={twitter} alt="" width="100%" /> },
            { url: '유튜브', icon: <img src={youtube} alt="" width="100%" /> },
          ]}
        />
      </Cover>
    </>
  );
};

export default SpeedDialPage;

const Cover = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
`;
