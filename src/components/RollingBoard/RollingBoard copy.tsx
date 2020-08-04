import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface RollingBoardType {
  contents?: Array<constentsType>;
}

interface constentsType {
  content: string | number | null;
  url: string | number | null;
}

const RollingBoard: React.FC<RollingBoardType> = ({
  contents = [
    { content: '가나다라마바사', url: '1' },
    { content: '2번째 공지입니다.', url: '2' },
    { content: 'ABCDEFG', url: '3' },
    { content: '4번째 공지입니다.', url: '4' },
  ],
}) => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setFirst((i) => (i < contents.length - 1 ? i + 1 : 0));
      setSecond((i) => (i < contents.length - 1 ? i + 1 : 0));

      // setFirst((i) => i + 1);
      // test();
      // setSecond((i) => i + 1);
    }, 1000);
  }, []);

  function test() {
    contents.push(contents[0]);
    contents.shift();
  }

  return (
    <>
      <Cover>
        <Contents>
          <Item>{contents[first].content}</Item>
          {/* <Item>{contents[second].content}</Item> */}
          {/* {first} */}
        </Contents>
        <Contents2>
          <Item2>{contents[second].content}</Item2>
        </Contents2>
      </Cover>
    </>
  );
};

export default RollingBoard;

const Cover = styled.div`
  position: fixed;
  top: 200px;
  left: 200px;
  height: 100px;
  width: 200px;
  overflow: hidden;
`;

const Contents = styled.div`
  /* border: 1px solid black; */
  height: 50px;
  overflow: hidden;
`;
const Contents2 = styled.div`
  /* border: 1px solid black; */
  height: 50px;
  /* overflow: hidden; */
  z-index: 2;
`;

const Item = styled.div`
  /* background-color: pink; */
  /* padding-top:25px; */
  height:50px;
  width:200px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${() => onMove2(0, -50)} 1000ms ease-in infinite;
`;

const onMove = (e: number, i: number) => keyframes`
0% {
  transform: translateY(${e}px);
  /* opacity:1; */
}
100% {
  transform: translateY(${i}px);
  /* opacity:0; */
}

`;

const Item2 = styled.div`
  background-color: pink;
  /* margin:25px 0; */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* animation: ${() => onMove2(0, -50)} 3000ms ease-in-out infinite; */
`;

const onMove2 = (e: number, i: number) => keyframes`
0% {
  transform: translateY(${e}px);
  /* opacity:0; */

}
100% {
  transform: translateY(${i}px);
  /* opacity:1; */
}

`;
