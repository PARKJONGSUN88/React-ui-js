import React from "react";
import styled from "styled-components";
import Rating from "../../components/Rating/Rating";
import Icon1 from "../../components/Icons/Icon1";
import Icon2 from "../../components/Icons/Icon2";
import Icon5 from "../../components/Icons/Icon5";
import Icon8 from "../../components/Icons/Icon8";

const RatingPage = () => {
  return (
    <Contents>
      <h1>Rating Page입니다.</h1>
      <div className="cover">
        <h3>- default 상태</h3>
        <Rating />
      </div>
      <div className="cover">
        <h3>
          - pieceStyle 및 pickStyle 스타일 적용, 유저커스텀함수가 적용되어
          alert이 실행됨
        </h3>
        <Rating
          pieceStyle={"border: 1px solid black; background-color:skyblue;"}
          pickStyle={"background-color:blue;"}
          userFunc={(e, x) => alert(e)}
        />
      </div>
      <div className="cover">
        <h3>- piece 및 pick에 이미지(컴포넌트로)로 적용</h3>
        <Rating
          piece={<Icon1 color={"skyblue"} />}
          pick={<Icon1 color={"blue"} />}
        />
      </div>
      <div className="cover">
        <h3>- pieceIsHalf 및 pieceStyle, pickStyle가 같이 적용된 상태</h3>
        <Rating
          piece={<Icon2 color={"pink"} />}
          pick={<Icon2 color={"red"} />}
          pieceCount={8}
          pieceIsHalf={true}
          pieceStyle={"border: 1px solid black; background-color:skyblue;"}
          pickStyle={"border: 1px solid black; background-color:skyblue;"}
        />
      </div>
      <div className="cover">
        <h3>- pieceIsHalf 및 pieceStyle, pickStyle가 같이 적용된 상태</h3>
        <Rating
          piece={<Icon2 color={"pink"} />}
          pick={<Icon2 color={"red"} />}
          pieceIsHalf={true}
          pickStyle={"background-color:skyblue;"}
        />
      </div>
      <div className="cover">
        <h3>- defaultPickCount 값을 추가하여 초기 picked 갯수 설정</h3>
        <Rating
          piece={<Icon5 color={"skyblue"} />}
          pick={<Icon5 color={"blue"} />}
          pieceCount={10}
          pieceIsHalf={true}
          pieceStyle={"background-color:gray;"}
        />
      </div>
      <div className="cover">
        <h3>- defaultPickCount 값을 추가하여 초기 picked 갯수 설정</h3>
        <Rating
          piece={<Icon5 color={"skyblue"} />}
          pick={<Icon5 color={"blue"} />}
          defaultPickCount={4}
          pieceCount={10}
          pieceIsHalf={true}
          pieceStyle={"background-color:gray;"}
        />
      </div>
      <div className="cover">
        <h3>- pick에 이미지 태그(HTML이미지)로 적용된 상태</h3>
        <Rating
          piece={""}
          pick={<Icon8 />}
          pieceIsHalf={true}
          defaultPickCount={3}
          pieceCount={10}
          pieceStyle={"background-color:skyblue;"}
          pickStyle={"background-color:skyblue;"}
        />
      </div>
      <div className="cover">
        <h3>- ishover 값을 활성화하여 사용할 경우</h3>
        <Rating
          piece={<Icon5 color={"white"} />}
          pick={<Icon5 color={"blue"} />}
          pieceCount={10}
          pieceIsHalf={true}
          isHover={true}
          pieceStyle={"background-color:gray;"}
        />
      </div>
      <div className="cover">
        <h3>- ishover 값을 활성화하여 사용할 경우</h3>
        <Rating
          piece={<Icon5 color={"white"} />}
          pick={<Icon5 color={"blue"} />}
          hover={<Icon5 color={"blue"} />}
          pieceCount={10}
          pieceIsHalf={true}
          isHover={true}
          pieceStyle={"background-color:gray;"}
        />
      </div>
      <div className="cover">
        <h3>- ishover 값을 활성화하여 사용할 경우</h3>
        <Rating
          piece={<Icon5 color={"white"} />}
          pick={<Icon5 color={"blue"} />}
          hover={<Icon5 color={"skyblue"} />}
          pieceCount={10}
          pieceIsHalf={true}
          isHover={true}
          pieceStyle={"background-color:gray;"}
          hoverStyle={"transform:scale(1.2);"}
        />
      </div>
      <div className="cover">
        <h3>- height, width 값 조정으로 size up된 상태</h3>
        <Rating
          piece={<Icon1 color={"pink"} />}
          pick={<Icon1 />}
          pieceHeight={200}
          pieceWidth={100}
          pieceIsHalf={true}
          pickStyle={"background-color:skyblue;"}
        />
      </div>
      <div className="cover">
        <h3>- right방향 사용</h3>
        <Rating
          piece={<Icon2 color={"pink"} />}
          pick={<Icon2 color={"red"} />}
          direction={"left"}
          pieceIsHalf={true}
          pickStyle={"background-color:skyblue;"}
        />
      </div>
      <div className="down">
        <Rating
          pieceStyle={"border: 1px solid black; background-color:skyblue;"}
          pickStyle={"background-color:blue;"}
          direction={"up"}
          pieceHeight={50}
          pieceWidth={200}
        />
        <h3>- up방향 사용</h3>
      </div>
    </Contents>
  );
};

export default RatingPage;

const Contents = styled.div`
  .cover {
    margin: 100px 30px;
  }
  .down {
    padding: 200px 30px;
  }
`;
