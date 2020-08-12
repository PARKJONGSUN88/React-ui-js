import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface JellyPopType {
  width?: number;
  height?: number;
  button?: React.ReactElement | string | number;
  items?: React.ReactElement | string | number;
  direction?: 'down' | 'right';
  itemsWidth?: number;
  itemsHeight?: number;
  speed?: number;
}

interface ContentsType {
  toggle: boolean;
  width: number;
  height: number;
  direction: 'down' | 'right';
  itemsWidth: number;
  itemsHeight: number;
  speed: number;
  start: boolean;
}

interface WrapType {
  width: number;
  height: number;
  direction: 'down' | 'right';
  itemsWidth: number;
  itemsHeight: number;
}

interface ButtonType {
  width: number;
  height: number;
  direction: 'down' | 'right';
}

const JellyPop: React.FC<JellyPopType> = ({
  width = 100,
  height = 100,
  button = '클릭하세요',
  items = '내용입니다',
  direction = 'down',
  itemsWidth = 100,
  itemsHeight = 100,
  speed = 1000,
}) => {
  const [toggle, setToggle] = useState(false);
  const [start, setStart] = useState(false);
  return (
    <Contents
      toggle={toggle}
      width={width}
      height={height}
      direction={direction}
      itemsWidth={itemsWidth}
      itemsHeight={itemsHeight}
      speed={speed}
      start={start}
    >
      <Wrap
        width={width}
        height={height}
        direction={direction}
        itemsWidth={itemsWidth}
        itemsHeight={itemsHeight}
      >
        <Button
          width={width}
          height={height}
          direction={direction}
          onClick={() => {
            setToggle(!toggle);
            setStart(true);
          }}
        >
          <div>{button}</div>
        </Button>
        <Items
          toggle={toggle}
          width={width}
          height={height}
          direction={direction}
          itemsWidth={itemsWidth}
          itemsHeight={itemsHeight}
          speed={speed}
          start={start}
        >
          <div>{items}</div>
        </Items>
      </Wrap>
    </Contents>
  );
};

export default JellyPop;

const Contents = styled.div<ContentsType>`
  ${({
    direction,
    toggle,
    width,
    height,
    itemsWidth,
    itemsHeight,
    speed,
    start,
  }) =>
    toggle
      ? direction === 'down'
        ? css`
            display: flex;
            justify-content: center;
            animation: ${onMove(
                width > itemsWidth ? width : itemsWidth,
                width > itemsWidth ? width : itemsWidth,
                height,
                height + itemsHeight,
              )}
              ${start ? speed : 0}ms cubic-bezier(0.75, 0, 0.25, 1.75) forwards;
          `
        : css`
            animation: ${onMove(
                width,
                width + itemsWidth,
                height > itemsHeight ? height : itemsHeight,
                height > itemsHeight ? height : itemsHeight,
              )}
              ${start ? speed : 0}ms cubic-bezier(0.75, 0, 0.25, 1.75) forwards;
          `
      : direction === 'down'
      ? css`
          display: flex;
          justify-content: center;
          animation: ${onMove(
              width > itemsWidth ? width : itemsWidth,
              width > itemsWidth ? width : itemsWidth,
              height + itemsHeight,
              height,
            )}
            ${start ? speed : 0}ms cubic-bezier(0.75, -0.75, 0.25, 1) forwards;
        `
      : css`
          animation: ${onMove(
              width + itemsWidth,
              width,
              height > itemsHeight ? height : itemsHeight,
              height > itemsHeight ? height : itemsHeight,
            )}
            ${start ? speed : 0}ms cubic-bezier(0.75, -0.75, 0.25, 1) forwards;
        `};
`;

const Wrap = styled.div<WrapType>`
  width: ${({ width, height, direction, itemsWidth, itemsHeight }) =>
    direction === 'down'
      ? width > itemsWidth
        ? width
        : itemsWidth
      : height > itemsHeight
      ? height
      : itemsHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform-origin: top left;
  ${({ direction, height, itemsHeight }) =>
    direction !== 'down' &&
    css`
      transform: rotate(-90deg)
        translateX(${-(height > itemsHeight ? height : itemsHeight) + 'px'});
    `};
`;

const Button = styled.div<ButtonType>`
  width: ${({ width, height, direction }) =>
    direction === 'down' ? width : height}px;
  height: ${({ width, height, direction }) =>
    direction === 'down' ? height : width}px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    ${({ direction }) =>
      direction !== 'down' &&
      css`
        transform: rotate(90deg);
      `};
  }
`;

const Items = styled.div<ContentsType>`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) =>
    direction === 'down' ? 'column' : 'row'};
  ${({ direction, toggle, itemsWidth, itemsHeight, speed, start }) =>
    toggle
      ? direction === 'down'
        ? css`
            animation: ${onMove(itemsWidth, itemsWidth, 0, itemsHeight)}
              ${start ? speed : 0}ms cubic-bezier(0.75, 0, 0.25, 1.75) forwards;
          `
        : css`
            animation: ${onMove(itemsHeight, itemsHeight, 0, itemsWidth)}
              ${start ? speed : 0}ms cubic-bezier(0.75, 0, 0.25, 1.75) forwards;
          `
      : direction === 'down'
      ? css`
          animation: ${onMove(itemsWidth, itemsWidth, itemsHeight, 0)}
            ${start ? speed : 0}ms cubic-bezier(0.75, -0.75, 0.25, 1) forwards;
        `
      : css`
          animation: ${onMove(itemsHeight, itemsHeight, itemsWidth, 0)}
            ${start ? speed : 0}ms cubic-bezier(0.75, -0.75, 0.25, 1) forwards;
        `};
  & > div {
    overflow: hidden;
    position: absolute;
    bottom: 0px;
    width: ${({ itemsWidth }) => itemsWidth}px;
    height: ${({ itemsHeight }) => itemsHeight}px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ direction, itemsWidth, itemsHeight }) =>
      direction !== 'down' &&
      css`
        transform: rotate(90deg)
          translateX(${(itemsHeight - itemsWidth) / 2 + 'px'});
      `};
  }
`;

const onMove = (e: number, i: number, y: number, z: number) => keyframes`
  0% {
    width:${e}px;
    height:${y}px;
  }
  100% {
    width:${i}px;
    height:${z}px;
  }
`;
