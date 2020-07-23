import React from "react";
import styled from "styled-components";
import SpeedDial from "../../components/SpeedDial/SpeedDial";
import Icon1 from "../../components/Icons/Icon1";
import Icon2 from "../../components/Icons/Icon2";
import Icon3 from "../../components/Icons/Icon3";
import Icon4 from "../../components/Icons/Icon4";
import Icon5 from "../../components/Icons/Icon5";
import Icon6 from "../../components/Icons/Icon6";
import Icon7 from "../../components/Icons/Icon7";
import Icon8 from "../../components/Icons/Icon8";

const SpeedDialPage = () => {
  return (
    <>
      <Background onClick={() => console.log("배경")}>
        <h1>Speed Dial Page입니다.</h1>
        <div className="info">
          <div>
            배경이 클릭될시 console을 확인해보세요!
            <br />
            <br />
            UI 컴포넌트가 활성화되면 배경이 클릭되지 않습니다.
            <br />
            <br />
            컴포넌트별 icon클릭 함수도 확인해보세요.
          </div>
        </div>
      </Background>
      <Contents>
        <div className="cover3 cover">
          <h3>- default 상태</h3>
          <SpeedDial />
        </div>
        <div className="cover1 cover">
          <h3>- 컴포넌트 방향 및 색상이 적용 / 실행버튼의 회전이 비활성화</h3>
          <SpeedDial
            switchIcon={<Icon7 />}
            iconList={[
              { url: "/1", icon: <Icon1 /> },
              { url: "/2", icon: <Icon2 /> },
              { url: "/3", icon: <Icon3 /> },
            ]}
            iconGroupDirection={"right"}
            switchIconHoverColor={"green"}
            iconHoverColor={"green"}
            isSwitchIconRotate={false}
          />
        </div>
        <div className="cover2 cover">
          <h3>
            - 버튼 및 아이콘 크기 조절(up) / 사용자 커스텀 함수 적용 / 아이콘간
            간격 조절(up)
          </h3>
          <SpeedDial
            switchIcon={<Icon8 />}
            iconList={[
              { url: "/1", icon: <Icon1 /> },
              { url: "/2", icon: <Icon2 /> },
              { url: "/3", icon: <Icon3 /> },
              { url: "/4", icon: <Icon4 /> },
            ]}
            iconGroupDirection={"right"}
            userFunc={() => {
              console.log("2번 컴포넌트 작동중입니다");
            }}
            switchIconHoverColor={"blue"}
            iconHoverColor={"red"}
            iconWidth={100}
            iconHeight={100}
            iconSpaceBetween={100}
          />
        </div>
        <div className="cover4 cover">
          <h3>
            - 아이콘의 배경 네모 적용 / 실행버튼 hover될때만 스타일 적용 /
            실행버튼 회전방향 및 속도 조절
          </h3>
          <SpeedDial
            switchIcon={<Icon5 />}
            iconList={[
              { url: "/1", icon: <Icon3 /> },
              { url: "/2", icon: <Icon4 /> },
              { url: "/3", icon: <Icon5 /> },
              { url: "/4", icon: <Icon6 /> },
            ]}
            userFunc={(e) => {
              console.log(e, "4번 커스텀 함수");
            }}
            iconGroupDirection={"up"}
            iconWidth={100}
            iconHeight={100}
            switchIconHoverColor={"skyblue"}
            switchIconRotateAngle={180}
            iconHoverRadius={1}
            isToggleSwitchColorStay={false}
          />
        </div>
      </Contents>
    </>
  );
};

export default SpeedDialPage;

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 200vh;
  .info {
    position: absolute;
    right: 10%;
    width: 400px;
    height: 150px;
    border: 1px solid pink;
  }
`;

const Contents = styled.div`
  .cover {
    position: fixed;
    margin: 0 0 100px 20px;
    left: 5%;
  }
  .cover3 {
    top: 20%;
  }
  .cover1 {
    top: 40%;
  }
  .cover2 {
    top: 60%;
  }
  .cover4 {
    top: 80%;
    left: 40%;
  }
`;
