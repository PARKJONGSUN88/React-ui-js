import React from 'react';
import styled from 'styled-components';
import CardFanning from '../components/CardFanning/CardFanning';
import mainMenu from '../img/quickmenu.png';
import facebook from '../img/facebook.png';
import insta from '../img/instagram.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';

const CardFanningPage = () => {
  return (
    <Cover>
      <CardFanning
        button={<img src={mainMenu} alt="" width="100%" />}
        dials={[
          { url: '페이스북', icon: <img src={facebook} alt="" width="100%" /> },
          { url: '인스타', icon: <img src={insta} alt="" width="100%" /> },
          { url: '트위터', icon: <img src={twitter} alt="" width="100%" /> },
          { url: '유튜브', icon: <img src={youtube} alt="" width="100%" /> },
        ]}
      />
    </Cover>
  );
};

export default CardFanningPage;

const Cover = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
`;
