## Speed Dial

React로 재사용이 가능한 UI 컴포넌트를 만들고자 한다.

재사용이 가능하게, 나만 사용하는 것이  아닌 남들에게 배포한다는 생각으로 만들어 본다.



| props name              | default 내용 및 타입 // 사용 예시                            | 기능(설명)                                                   | type    |
| :---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| switchIcon              | "button"                                                     | 아이콘 모음을 on/off 하는 메인버튼 내용                      | any     |
| iconList                | [{ url: "/url1", icon: "icon1" }, { url: "/url2", icon: "icon2" }] | 아이콘 모음의 아이콘 내용들                                  | array   |
| iconList.url            | url:"/url1"                                                  | array안의 인자가 클릭됬을시 사용할 값. 아이콘을 클릭하여 이동할 주소로 사용하면 된다. | string  |
| iconList.icon           | icon:"icon" // icon:<Icon1 /> 컴포넌트                       | array안의 인자로 그려질 내용. 실제 아이콘 내용(모양)         | any     |
| userFunc                | (e) => console.log(e)  // userFunc= (e) => history.push(e)   | array안의 인자가 클릭될시 실행될 함수 / default처럼 파라미터가 있을시 array의 인자 순서에 맞는 url값을 반환 / 파라미터가 없을시 일괄적은 값을 반환. | Func(n) |
| iconGroupDirection      | "left"                                                       | 아이콘 모음이 실행될 방향. "left", "right", "up", "down"     | string  |
| iconWidth               | 50 // (px) // 0 ~                                            | iconList.icon을 둘러싼 cover의 width값 / 해당 값 외 icon에서의 값을 custom하여 사용. | number  |
| iconHeight              | 50 // (px) // 0 ~                                            | iconList.icon을 둘러싼 cover의 height값 /해당 값 외 icon에서의 값을 custom하여 사용. | number  |
| iconSpaceBetween        | 20 // (px) // 0 ~                                            | iconList.icon을 둘러싼 cover간의 margin값 / 값이 클수록 간격이 벌어진다. | number  |
| toggleSpeed             | 200  // (ms) // 0 ~                                          | toggle이 활성화/비활성화 되는데 걸리는 시간 / 클수록 느려진다. | number  |
| isSwitchIconHoverColor  | true                                                         | switch를 켰을때 switch의 배경색을 사용할 것인지?             | boolean |
| switchIconHoverColor    | "gray" // "rgba()"                                           | switch를 켰을때 switch의 배경색                              | string  |
| switchIconHoverRadius   | 100 // 0 ~                                                   | switch를 켰을때 switch의 배경테두리 / 클수록 원, 작으면 사각형이 된다. | number  |
| isSwitchIconRotate      | true                                                         | switch를 켰을때 switch 회전 애니메이션을 사용할 것인지?      | boolean |
| switchIconRotateAngle   | -45 // -360 ~ 360                                            | switch 회전 애니메이션의 회전 각도 / -값은 반시계방향        | number  |
| switchIconRotateSpeed   | 200  // (ms) // 0 ~                                          | switch 회전 애니메이션의 회전 속도 / 클수록 느려진다.        | number  |
| isIconHoverColor        | true                                                         | icon에 hover 했을때 icon의 배경색을 사용할 것인지?           | boolean |
| iconHoverColor          | "gray"// "rgba()"                                            | icon에 hover 했을때 icon의 배경색                            | string  |
| iconHoverRadius         | 100 // 0 ~                                                   | icon에 hover 했을때 icon의 배경테두리 / 클수록 원, 작으면 사각형이 된다. | number  |
| isToggleSwitchColorStay | true                                                         | toggle이 유지되는 동안 switch에 배경색을 유지할 것인지, switch에 hover시에만 배경색을 유지할 것인지 | boolean |



### story..

- 20.07.06 : 

  원래는 React-Native, Typescript로 적용할 예정이었으나 아직은 React, js이다.

  https://material-ui.com/api/에서 해당하는 UI가 어떤 일을 하는 UI인지만 확인하고 로직은 스스로 작성한다.

  

- 20.07.06 : 

  1차로 js, react버전 완료.. (+ 디버깅 완료)

  만들다보니 props만 21개나 제공하도록 만들었다...ㅋㅋ 

  keyframe animation에서 props가 전이되는 것인지 오염되는 것인지 다른 컴포넌트한테도 전달되는 현상이 있어서 수정하였다. 똑같은 방식으로 props를 사용하여 styled컴포넌트에서 css를 그때 그때 바꾸도록 하였는데 keyframe만 그런 현상이 발견되어 수정하였다.
  
  <br>
  
  참고 : https://material-ui.com/api/speed-dial/
  
  검색 도움 : https://stackoverflow.com/questions/50802681/how-to-pass-props-to-keyframes-in-styled-component-with-react
  
  
  
- 20.07.09 : 사용자가 커스텀할 수 있는 함수명이 겹쳐서 수정하였다.
- 20.07.11 : typescript 버전 완료.
- 20.07.13 : react-native 버전 완료.
