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
  top: 50px;
  left: 50px;
`;

const QuickButtonPage = () => {
  return (
    <Cover>
      <QuickButton />
    </Cover>
  );
};

export default QuickButtonPage;
