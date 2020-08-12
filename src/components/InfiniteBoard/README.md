 ## Infinite Board

**끊기지 않고 연속으로 아이템들을 보여줍니다.** 

작성된 모든 아이템들이 다함께 움직이는 형식입니다.

그러나 첫 로테이션과 다음 로테이션이 진행되는 사이에 공백이 없는 것 처럼 연출되어

연속해서 이벤트가 진행됩니다. 

| props name |                            기능                             |                  default (단위)                   |                       type                       |
| :--------: | :---------------------------------------------------------: | :-----------------------------------------------: | :----------------------------------------------: |
| ViewWidht  |                   유저에게 보이는 창의 폭                   |                     200 // px                     |                      number                      |
| ViewHeight |                  유저에게 보이는 창의 높이                  |                     200 // px                     |                      number                      |
| direction  | 애니메이션 진행 방향 // "left" \| "right" \| "up" \| "down" |                      "left"                       |                      string                      |
|   items    |                  애니메이션 진행될 내용들                   | [{ item: '1번내용', url: '1번 클릭' }, object...] |                      Array                       |
| items.item |                애니메이션에 들어갈 세부 내용                |                {item: "1번 내용"}                 |      React.ReactElement \| string \| number      |
| items.url  |               세부 창 클릭시 실행할 것(주소)                |                 {url: "1번 클릭"}                 | string \| number \| null \| boolean \| undefined |
|   width    |                        세부 창의 폭                         |                     100 // px                     |                      number                      |
|   height   |                       세부 창의 높이                        |                     100 // px                     |                      number                      |
|   speed    |                    애니메이션 진행 속도                     |                 10 // s (Second)                  |                      number                      |
|  userFunc  |                     클릭시 실행할 함수                      |               (e) => console.log(e)               |                     Function                     |

