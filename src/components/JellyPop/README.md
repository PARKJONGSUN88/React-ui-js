 ## Jelly Pop

**하위 메뉴를 젤리가 튕기는 것처럼 출현시켜줍니다.**
<br>
<img width="640" alt="2" src="https://user-images.githubusercontent.com/50945715/90135331-7af24580-ddad-11ea-81d8-7d808869108b.gif">
<br>
실행버튼이 작동되면 하위 메뉴를 보여줍니다.

hidden 메뉴로 사용하기 좋습니다.

| props name  |                       기능                        | default (단위) |                  type                   |
| :---------: | :-----------------------------------------------: | :------------: | :-------------------------------------: |
|   button    |                  실행버튼의 내용                  |  "클릭하세요"  | React.ReactElement \| string \| number  |
|    width    |                    실행버튼 폭                    |   100 // px    |                 number                  |
|   height    |                   실행버튼 높이                   |   100 // px    |                 number                  |
|    items    |             클릭시 실행될 아이템 내용             |  "내용입니다"  | React.ReactElement  \| string \| number |
| itemsWidth  |                실행될 아이템의 폭                 |   100 // px    |                 number                  |
| itemsHeight |               실행될 아이템의 높이                |   100 // px    |                 number                  |
|    speed    |            실행시 아이템이 펼쳐질 속도            |   1000 // ms   |                 number                  |
|  direction  | 실행시 아이템이 그려질 방향 // "down"  \| "right" |     "down"     |                 string                  |

- button, items에 원하는 컴포넌트를 만들어 넣어 사용하면 편리함.

- 뷰포트의 역방향인 left, up방향은 결국 간편한 컴포넌트 구현에 실패하였다. 시도해볼 수 있는 방법은 다 해본것 같은데 역방향은 사용순간에 지정이 안되면 불가능하다는게 최종 결론이다. 컴포넌트로 만드는 것이 아닌 단일 사용이면 모르겠는데 우선은 실패이다.

