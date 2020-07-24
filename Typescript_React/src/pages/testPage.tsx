import React from 'react';
import styled from 'styled-components';
import SpeedDial from '../components/SpeedDial';
import Quickmenu from '../img/quickmenu.png';
import Facebook from '../img/facebook.png';
import Insta from '../img/instagram.png';
import Twitter from '../img/twitter.png';
import Youtube from '../img/youtube.png';

const Cover = styled.div`
  position: fixed;
  top: 300px;
  left: 300px;
`;

const testPage = () => {
  return (
    <Cover>
      <SpeedDial
        button={<img src={Quickmenu} alt="" width="100%" />}
        dials={[
          { icon: <img src={Facebook} alt="" width="100%" /> },
          { url: false, icon: <img src={Insta} alt="" width="100%" /> },
          { url: 1, icon: <img src={Twitter} alt="" width="100%" /> },
          { url: '유튜브', icon: <img src={Youtube} alt="" width="100%" /> },
        ]}
      />
    </Cover>
  );
};

export default testPage;
