 ## Quick Button

**일렬로 아이템들이 순서대로 나타납니다.**

실행버튼이 작동되면 내부 요소들을 보여줍니다.

버튼 모음으로 사용하기 좋습니다.

| props name |                             기능                             |               default (단위)                |                       type                       |
| :--------: | :----------------------------------------------------------: | :-----------------------------------------: | :----------------------------------------------: |
|   button   |                           메인버튼                           |                  "button"                   |      React.ReactElement \| string \| number      |
|   bWidth   |                         메인버튼 폭                          |                  100 // px                  |                      number                      |
|  bHeight   |                        메인버튼 높이                         |                  100 // px                  |                      number                      |
|   dials    |                     클릭시 실행될 버튼들                     | [{ url: 'url1', icon: 'icon1' }, object...] |                      Array                       |
| dials.url  |                     버튼클릭시 실행될 키                     |                {url: "url1"}                | string \| number \| boolean \| null \| undefined |
| dials.icon |                     버튼으로 그려질 내용                     |               {icon: "icon1"}               |      React.ReactElement \| string \| number      |
|   width    |                           버튼 폭                            |                  50 // px                   |                      number                      |
|   height   |                          버튼 높이                           |                  50 // px                   |                      number                      |
|  between   |                       버튼들간의 간격                        |                  20 // px                   |                      number                      |
| direction  | 실행시 버튼들이 그려질 방향 // "left" \| "right" \| "up" \| "down" |                   "right"                   |                      string                      |
|   speed    |                 실행시 버튼들이 펼쳐질 속도                  |                  200 // ms                  |                      number                      |
|  userFunc  |                   버튼 클릭시 실행할 함수                    |            (e) => console.log(e)            |                     Function                     |

