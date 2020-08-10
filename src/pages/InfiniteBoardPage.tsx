import React from 'react';
import styled from 'styled-components';
import InfiniteBoard from '../components/InfiniteBoard/InfiniteBoard';
import facebook from '../img/facebook.png';
import insta from '../img/instagram.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';

const InfiniteBoardPage = () => {
  return (
    <>
      <Cover>
        <InfiniteBoard
          items={[
            {
              item: <img src={facebook} alt="" width="100%" />,
              url: '페이스북',
            },
            { item: <img src={insta} alt="" width="100%" />, url: '인스타' },
            {
              item: <img src={twitter} alt="" width="100%" />,
              url: '트위터',
            },
            { item: <img src={youtube} alt="" width="100%" />, url: '유튜브' },
          ]}
        />
      </Cover>
      <Cover2>
        <InfiniteBoard
          direction={'column'}
          items={[
            {
              item: <img src={facebook} alt="" width="100%" />,
              url: '페이스북',
            },
            { item: <img src={insta} alt="" width="100%" />, url: '인스타' },
            {
              item: <img src={twitter} alt="" width="100%" />,
              url: '트위터',
            },
            { item: <img src={youtube} alt="" width="100%" />, url: '유튜브' },
          ]}
        />
      </Cover2>
    </>
  );
};

export default InfiniteBoardPage;

const Cover = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
  border: 1px solid black;
  /* background-color: gray; */
`;

const Cover2 = styled.div`
  position: fixed;
  top: 500px;
  left: 100px;
  border: 1px solid black;
  /* background-color: gray; */
`;
