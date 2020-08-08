 ## Relay Board

| props name |                   기능                    |                  default (단위)                   |                       type                       |
| :--------: | :---------------------------------------: | :-----------------------------------------------: | :----------------------------------------------: |
| ViewWidht  |          유저에게 보이는 창의 폭          |                     400 // px                     |                      number                      |
| ViewHeight |         유저에게 보이는 창의 높이         |                     50 // px                      |                      number                      |
| direction  | 애니메이션 진행 방향 // "row" \| "column" |                     "column"                      |                      string                      |
|   items    |         애니메이션 진행될 내용들          | [{ item: '1번내용', url: '1번 클릭' }, object...] |                      Array                       |
| items.item |       애니메이션에 들어갈 세부 내용       |                {item: "1번 내용"}                 |      React.ReactElement \| string \| number      |
| items.url  |      세부 창 클릭시 실행할 것(주소)       |                 {url: "1번 클릭"}                 | string \| number \| null \| boolean \| undefined |
|   width    |               세부 창의 폭                |                     400 // px                     |                      number                      |
|   height   |              세부 창의 높이               |                     50 // px                      |                      number                      |
|   speed    |           애니메이션 진행 속도            |                 10 // s (Second)                  |                      number                      |
|  userFunc  |            클릭시 실행할 함수             |               (e) => console.log(e)               |                     Function                     |
