import React from 'react';
import styled from 'styled-components';
import JellyPop from '../components/JellyPop/JellyPop';
import facebook from '../img/facebook.png';
import insta from '../img/instagram.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';

const JellyPopPage = () => {
  return (
    <>
      <Cover>
        <JellyPop
          direction={'right'}
          button={<Button />}
          items={<img src={facebook} alt="" width="100%" />}
        />
        <JellyPop
          direction={'right'}
          button={<Button />}
          items={<img src={insta} alt="" width="100%" />}
        />
        <JellyPop
          direction={'right'}
          button={<Button />}
          items={<img src={twitter} alt="" width="100%" />}
        />
        <JellyPop
          direction={'right'}
          button={<Button />}
          items={<img src={youtube} alt="" width="100%" />}
        />
      </Cover>
      {/* <Cover2>
        <JellyPop itemsHeight={200} button={<Button />} />
        <JellyPop button={<Button />} items={<Items />} />
      </Cover2> */}
    </>
  );
};

export default JellyPopPage;

const Cover = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
  display: flex;
`;

const Cover2 = styled.div`
  position: fixed;
  top: 150px;
  left: 10px;
`;

const Button = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'skyblue',
          border: '1px solid black',
          width: 100,
          height: 100,
        }}
      />
    </>
  );
};

const Items = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'pink',
          width: 100,
          height: 100,
        }}
      />
    </>
  );
};
