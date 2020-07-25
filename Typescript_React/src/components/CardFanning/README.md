 ## Card Fanning

| props name |                             기능                             |              default (단위)              |                       type                       |
| :--------: | :----------------------------------------------------------: | :--------------------------------------: | :----------------------------------------------: |
|   button   |                           메인버튼                           |                 "button"                 |      React.ReactElement \| string \| number      |
|   bWidth   |                         메인버튼 폭                          |                100 // px                 |                      number                      |
|  bHeight   |                        메인버튼 높이                         |                100 // px                 |                      number                      |
|   dials    |                     클릭시 실행될 버튼들                     | [{ url: 'url1', icon: 'icon1' }, object] |                      Array                       |
| dials.url  |                     버튼클릭시 실행될 키                     |              {url: "url1"}               | string \| number \| boolean \| null \| undefined |
| dials.icon |                     버튼으로 그려질 내용                     |             {icon: "icon1"}              |      React.ReactElement \| string \| number      |
|   width    |                           버튼 폭                            |                 50 // px                 |                      number                      |
|   height   |                          버튼 높이                           |                 50 // px                 |                      number                      |
|  between   |                     메인버튼과 버튼 간격                     |                150 // px                 |                      number                      |
|    fDeg    | 1번 버튼의 시작 위치 각도 // +는 시계, -는 반시계 방향으로 그려진다 |                90 // deg                 |                      number                      |
|    deg     | 버튼들의 간격 각도 // +는 시계, -는 반시계 방향으로 그려진다 |                -30 // deg                |                      number                      |
|   speed    |                 실행시 버튼들이 펼쳐질 속도                  |                1000 // ms                |                      number                      |
|  userFunc  |                   버튼 클릭시 실행할 함수                    |          (e) => console.log(e)           |                     Function                     |

