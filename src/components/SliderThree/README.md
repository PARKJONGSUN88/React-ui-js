 ## SliderThree

**현재, 이전, 다음  아이템을 보여줍니다.** 
<br>
<img width="1280" alt="2" src="https://user-images.githubusercontent.com/50945715/90135338-7c237280-ddad-11ea-8013-1d9fe1a2a6a4.gif">
<br>

작성된 아이템들이 클릭시 순서대로 나타납니다.

양쪽 버튼을 이용하여 다음, 이전을 선택할 수 있습니다.

중간에 현재 아이템, 그리고 다음, 이전 아이템이 보여집니다.

| props name |              기능              |                  default (단위)                   |                       type                       |
| :--------: | :----------------------------: | :-----------------------------------------------: | :----------------------------------------------: |
|   items    |    애니메이션 진행될 내용들    | [{ item: '1번내용', url: '1번 클릭' }, object...] |                      Array                       |
| items.item | 애니메이션에 들어갈 세부 내용  |                {item: "1번 내용"}                 |      React.ReactElement \| string \| number      |
| items.url  | 세부 창 클릭시 실행할 것(주소) |                 {url: "1번 클릭"}                 | string \| number \| null \| boolean \| undefined |
|   width    |        현재 아이템의 폭        |                     400 // px                     |                      number                      |
|   height   |       현재 아이템의 높이       |                     250 // px                     |                      number                      |
|   speed    |      애니메이션 진행 속도      |                     500 // ms                     |                      number                      |
|  userFunc  |       클릭시 실행할 함수       |               (e) => console.log(e)               |                     Function                     |