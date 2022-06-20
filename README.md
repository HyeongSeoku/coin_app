<h1 align="center"> Rankypto </h1>
<h3 align="center"> 암호 화폐 api를 이용하여 암호화폐의 정보 및 순위를 보여주는 프로젝트 </h3>
<p align="center">
  <img src="https://img.shields.io/badge/-Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=React%20Query&logoColor=white">
</p>

<h2 align="center"><a href="https://coin-app-ebon.vercel.app/">배포 페이지</a></h2>

# 과제 설명

## 🛠 기술 스택
- TypeScript
- React
- Recoil
- Scss
- axios

그외 라이브러리

- dayjs
- victory
- store

api
- https://api.coinpaprika.com

## 실행 방법

```
npm i -f
npm start
```

- React 18 버전을 사용하여 18.x 버전을 의존성으로 갖지 않는 라이브러리가 있습니다.

- force 옵션을 통해 설치하여야 합니다.

## 🗂 폴더 구조

```
.
├── assets
│   └── svgs
│       ├── activity.svg
│       ├── coinIcon
│       │   ├── atomLogo.svg
│       │   ├── avaxLogo.svg
│       │   ├── binanceLogo.svg
│       │   ├── bitcoinLogo.svg
│       │   ├── bnbLogo.svg
│       │   ├── btcbLogo.svg
│       │   ├── cardanoLogo.svg
│       │   ├── chainlinkLogo.svg
│       │   ├── croLogo.svg
│       │   ├── daiLogo.svg
│       │   ├── defaultCoin.svg
│       │   ├── dogecoinLogo.svg
│       │   ├── ethereumLogo.svg
│       │   ├── hbtcLogo.svg
│       │   ├── hexLogo.svg
│       │   ├── ltcLogo.svg
│       │   ├── nearLogo.svg
│       │   ├── paxgLogo.svg
│       │   ├── polkadotLogo.svg
│       │   ├── polygonLogo.svg
│       │   ├── shibLogo.svg
│       │   ├── solanaLogo.svg
│       │   ├── terraLunaLogo.svg
│       │   ├── tetherLogo.svg
│       │   ├── thrLogo.svg
│       │   ├── trxLogo.svg
│       │   ├── uniLogo.svg
│       │   ├── usdcLogo.svg
│       │   ├── usdtLogo.svg
│       │   ├── wbtcLogo.svg
│       │   └── xrpLogo.svg
│       ├── down.svg
│       ├── emptyStar.svg
│       ├── goBackLogo.svg
│       ├── heart.svg
│       ├── home.svg
│       ├── index.ts
│       ├── loader.svg
│       ├── mainLogo.svg
│       ├── notChangeIcon.svg
│       ├── notfound.svg
│       ├── searchIcon.svg
│       ├── star.svg
│       └── up.svg
├── components
│   ├── CoinCard
│   │   ├── coinCard.module.scss
│   │   └── index.tsx
│   ├── DropDown
│   │   ├── DropDownItem.tsx
│   │   ├── dropDown.module.scss
│   │   └── index.tsx
│   ├── ErrorMessage
│   │   └── index.tsx
│   ├── Layout
│   │   ├── Footer
│   │   │   ├── footer.module.scss
│   │   │   └── index.tsx
│   │   ├── Header
│   │   │   ├── header.module.scss
│   │   │   └── index.tsx
│   │   ├── Nav
│   │   │   ├── index.tsx
│   │   │   └── nav.module.scss
│   │   ├── index.tsx
│   │   └── layout.module.scss
│   ├── LineChart
│   │   └── index.tsx
│   ├── Loader
│   │   ├── index.tsx
│   │   └── loader.module.scss
│   ├── Modal
│   │   ├── index.tsx
│   │   └── modal.module.scss
│   └── Toggle
│       ├── index.tsx
│       └── toggle.module.scss
├── constants
│   ├── color.ts
│   ├── favorite.ts
│   ├── home.tsx
│   └── icons.tsx
├── global.d.ts
├── hooks
│   ├── index.tsx
│   ├── useDebounce.ts
│   ├── useTimeoutFn.tsx
│   └── useVariance.tsx
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── routes
│   ├── Home
│   │   ├── CoinTickerList
│   │   │   ├── coinTickerList.module.scss
│   │   │   └── index.tsx
│   │   ├── HomeToggle
│   │   │   ├── MyFeed.tsx
│   │   │   ├── TodayBestList.tsx
│   │   │   ├── homeToggle.module.scss
│   │   │   └── index.tsx
│   │   ├── SearchForm
│   │   │   ├── index.tsx
│   │   │   └── searchForm.module.scss
│   │   ├── TopPriceCoinCardList
│   │   │   ├── TopCard.tsx
│   │   │   ├── index.tsx
│   │   │   └── topCoinCardList.module.scss
│   │   ├── home.module.scss
│   │   └── index.tsx
│   ├── NotFound404
│   │   ├── index.tsx
│   │   └── notFound404.module.scss
│   ├── Search
│   │   ├── DefaultList.tsx
│   │   ├── Detail
│   │   │   ├── DetailChart.tsx
│   │   │   ├── detail.module.scss
│   │   │   ├── index.tsx
│   │   │   └── utils
│   │   ├── ResultList.tsx
│   │   ├── index.tsx
│   │   └── search.module.scss
│   └── index.tsx
├── services
│   └── coin.ts
├── setupTests.ts
├── states
│   ├── coin.ts
│   ├── favorite.ts
│   ├── modal.ts
│   └── search.ts
├── styles
│   ├── base
│   │   ├── _fonts.scss
│   │   ├── _more.scss
│   │   └── _reset.scss
│   ├── constants
│   │   └── _colors.scss
│   ├── global.scss
│   ├── index.scss
│   ├── index.ts
│   └── mixins
│       └── _animation.scss
├── types
│   ├── coin.d.ts
│   └── search.d.ts
└── utils
    ├── calculateDate.ts
    ├── favoriteControl.ts
    └── transformNumber.ts

```

폴더 구조 상세 설명
- assets : svg 파일들을 위한 폴더
- components : 프로젝트 전역에서 쓰이는 컴포넌트들을 저장하기 위한 폴더
- constants : 정적으로 쓰일 변수들을 정의하기 위한 파일을 저장하는 폴더
- hooks : 커스텀 훅을 위한 폴더
- routes : page를 위한 폴더
- services : api를 위한 폴더
- states : 전역 상태 관리 파일들을 위한 폴더
- utils : 프로젝트 내에서 자주 쓰이는 함수들을 위한 폴더

<br>

---


## 데모
![demo](https://user-images.githubusercontent.com/48541850/173223272-c90538c7-31e5-47ab-ad69-f3f6f8c99cec.gif)

<br>

---

### 네비게이션

<div style="display:flex; flex-direction:row">

![navIcon_demo](https://user-images.githubusercontent.com/48541850/173225753-5ae2fe9f-c308-4638-a4d2-862ce8cccae3.gif)
![search_url_demo](https://user-images.githubusercontent.com/48541850/173225754-d82faaf9-e420-4707-92e1-772d65aa88f8.gif)

</div>

💁 설명 

    url 상태에 따라 nav icon의 classname이 변경되도록 구현했으며, classname에 따라 fill 색상이 변경 되는것으로 사용자에게 알려줄 수 있도록 구현했습니다.


<br>

---

### 검색 창 & 검색어 드롭 다운

<div style="display:flex; flex-direction:row">

![searchForm_demo](https://user-images.githubusercontent.com/48541850/173223764-7fae6356-caa3-4ca2-a07b-5d36b45800cb.gif)

![search_modal_demo](https://user-images.githubusercontent.com/48541850/173223936-99fbdc86-1769-4dfc-b021-eb368e7ce3cd.gif)

</div>

💁 설명 

    프로젝트 전역에서 쓸 수 있도록 recoil을 통해 검색어 state를 저장하고
    드롭다운이 열리는 상태를 명시하는 dropDownState에 따라 열리고 닫히도록 구현했습니다.
    추가적으로 빈 검색어를 입력시 모달로 이동되도록 구현했습니다.
    
    드롭 다운의 경우 startsWith 메소드를 사용했으며 일치하는 글자는 mark태그에 넣어서 랜더링되도록 하고 나머지는 span태그에 랜더링 되도록 처리하였습니다.

    모달의 경우 react-portal을 적용하였습니다.

<br>

---
### 탭

![home_toggle_demo](https://user-images.githubusercontent.com/48541850/173224073-5331713a-a280-4677-af13-2bc82786faf4.gif)

💁 설명 

    Tab 컴포넌트는 재사용성을 위해 props로 contents,currentTabState,setTabState를 받고
    객체 배열로된 contents에 따라 랜더링 되는 탭의 개수 , 탭의 제목이 변경 될 수 있도록 구현하였습니다

    이 토글을 사용하는 HomeTab 컴포넌트는 props로 넘기는 setTabState에 따라 표시되는 콘텐츠가 달라지도록 구현했습니다.
    
    또한 선택된 Tab을 사용자에게 알려주기 위해 scss를 통해 checked 상태에 따라 opacity와 background color가 바뀌도록 구현했습니다.

### Coin card

![스크린샷 2022-06-12 오후 5 21 22](https://user-images.githubusercontent.com/48541850/173224187-6e1492da-7f0f-4118-896b-0c954e92b5f4.png)

💁 설명 

    각각 props로 전달받은 name, symbol, price, percentChange1h을 화면에 보여주도록 구현했으며, 

    커스텀 훅으로 빼둔 useVariance를 이용하여
    percentChange1h를 useVariance의 매개변수로 넘기고 반환값인 varianceText에 따라 price를 담고있는 div의 classname이 설정되고 color 속성이 바뀌도록 구현했고, 
    또 다른 반환 값인 varianceIcon에 따라 변동 icon이 설정되도록 구현했습니다.

    price의 경우 utils디렉토리의 transformNumber를 통해서 가격에 K,M등을 붙여서 반환 될 수 있도록 구현했습니다.

    특별히 코인의 로고의 경우 api로 넘어오는 값이 없어서 
    
    아래와 같이 constants 폴더의 icons.tsx에서 처리해서 name값에 따라 일치하는 아이콘이 할당되거나 일치하는 값이 없으면 기본 아이콘이 할당되도록 처리했습니다.

    
  
  ```ts
  interface ICoinProps {
    BTC: JSX.Element
    ETH: JSX.Element
    USDT: JSX.Element
    // ... 중략

    [key: string]: any
  }

  export const COIN_ICON: ICoinProps = {
  BTC: <Bitcoin />,
  ETH: <Ethereum />,
  USDT: <Usdt />,
  // ... 중략
  }
  ```

  사용하는 곳
  ```tsx
   const coinLogo = COIN_ICON[symbol] || DEFAULT_COIN_ICON
  ```

<br>

---

### 가격 상위 10개 코인

![topCard_demo](https://user-images.githubusercontent.com/48541850/173225435-61c0ba8a-faec-47e9-a4f8-9efada7d866d.gif)


💁 설명 

    lodash의 sortBy메소드와 내장 기본 메소드인reverse() 를 사용하여 높은 순으로 정렬한뒤
    splice메소드를 사용하여 10개만 잘라서 랜더링 되도록 구현하였고

    scss를 통해 가로 스크롤 되도록 처리하였습니다.

<br>

#### **Top coin card**
![스크린샷 2022-06-12 오후 5 58 55](https://user-images.githubusercontent.com/48541850/173225557-954316c8-02b8-486e-a6c0-13a909a681b4.png)


💁 설명 

    코인 로고와 상승률 , 상승에 따른 아이콘의 경우 coin card와 동일하게 구현하였으며, 특별히 차트 데이터를 넣어주어야 해서 useQuery를 사용하여 id값에 따른 그래프를 그릴수 있는 데이터를 요청하였고,
  
    그래프를 담당하는 LineChart 컴포넌트에 해당 데이터를 넣어서 랜더링 해주었습니다.

<br>

---

### 즐겨찾기
![favroite_demo](https://user-images.githubusercontent.com/48541850/173225735-a9ac3ced-efe4-449e-b987-5d0aa6e9edd8.gif)


💁 설명 

    localStorage를 쉽게 사용할 수 있게 해주는 store 라이브러리를 사용하여 즐겨찾기에 추가하고 삭제할 수 있도록 구현하였으며,

    localStorage에 해당 코인이 있는지 없는지를 판단하여 star Icon이 변경되도록 구현했습니다.

<br>

---

### 코인 상세 정보
![detail_demo](https://user-images.githubusercontent.com/48541850/173226237-337427f5-861b-480f-9103-462f689acaf1.gif)


💁 설명 

    coin card 컴포넌트와 top coin 컴포넌트에 Link태그를 사용하여 해당 코인의 정보로 이동될 수 있도록 구현하였으며,

    이동된 아이디 값과 useQuery를 통해 데이터를 받아오고 그 데이터를 통해 화면에 그려지도록 구현했습니다.
<br>

---


### 검색 페이지

![searchPage_demo](https://user-images.githubusercontent.com/48541850/173225764-bcfd3f54-ea24-49dd-8cee-7a85940de08a.gif)




💁 설명 

    useSearchParams 메소드를 이용하여 검색을 통해 페이지 이동이 아닌 그냥 검색 탭을 눌러서 이동했을 경우 모든 코인 리스트를 반환하는 DefaultList 컴포넌트가 랜더링 되도록 하였고, 

    검색을 통해서 또는 검색탭에서 검색을 했을 경우
    ResultList컴포넌트가 랜더링 되도록 구현했습니다.

<br>

---


### Not Found page

![notfound_demo](https://user-images.githubusercontent.com/48541850/174527613-67092d15-60e3-4e1f-833c-578a750a7473.gif)

💁 설명 

    설정되어있는 이외의 경로에 접근할 경우 not found 페이지가 나타나도록 구현

<br>

### ETC

💁 `calculateData.ts`설명 

    api가 현재 시간을 기준으로 8시간전의 데이터까지만 조회가 가능해서 api에 요청하는 날짜를 처리해서 리턴해주는 함수를 작성했습니다 . 



## ✏️ 배운 점
- 코인 로고를 동적으로 할당해주는 작업을 처리해 볼수 있어서 좋은 경험이였습니다.
- useQuery를 사용해보았고 굉장히 편한 라이브러리라는 것을 체감할 수 있었습니다. react query의 더 다양한 기능들에 대해서 공부할 생각입니다.
- 커스텀 훅을 만들어서 사용해볼 좋은 기회가 되어서 즐거웠습니다.
- 애니메이션을 담당하는 파일에서 만들어서 처리하니 코드량도 줄고 가독성이 좋아서 좋은 경험이 되었습니다.

## 😢 아쉬운 점
- 로직이 매끄럽지 않은 부분이 존재하는 점 -> 추후 리팩토링 예정
- 기능이 다양하지 않은 점 -> 추후 더 구현 예정 (로그인,구매/판매 기능,포트폴리오)
- 디자인을 dribble을 참고하고 하였지만 구현 과정에서 아직 구현할 수 없는 기능도 있어서
디자인을 시안대로 처리 할 수 없어서 디자인적으로 아쉬웠습니다. 추후 많은 디자인들을 보면서 디자인 감각을 키워야겠다고 생각합니다.
