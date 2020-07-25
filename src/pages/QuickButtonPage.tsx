import React from 'react';
import styled from 'styled-components';
import QuickButton from '../components/QuickButton/QuickButton';
import mainMenu from '../img/quickmenu.png';
import facebook from '../img/facebook.png';
import insta from '../img/instagram.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';

const Cover = styled.div`
  position: fixed;
  top: 300px;
  left: 300px;
`;

const QuickButtonPage = () => {
  return (
    <Cover>
      <QuickButton
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

export default QuickButtonPage;
