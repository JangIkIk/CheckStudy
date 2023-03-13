환경설정
1. CRA: redux-toolkit을 기초적인 동작까지 볼수있게 구성되어있다.
npx create-react-app [명칭] --template redux

2. CRA(TypeScript): redux-toolkit을 Typescript로 기초적인 동작까지 볼수있게 구성되어있다.
npx create-react-app [명칭] --template redux-typescript

3. 기존 앱에 적용: 기존앱에 패키지만 설치
npm i @reduxjs/toolkit

### 사용한설정: 기존 앱에 적용

[설치과정]
1. npm i create-react-app toolkit : react 기본환경 구성
2. npm i @reduxjs/toolkit : redux-toolkit 패키지 설치
3. npm i react-redux : react에서 redux를 사용하기위한 설치

[파일구분]
- store.js: 저장소 설정 및 미들웨어
- count: 최상위 컴포넌트
- counter-reducer.js: 리듀서 및 액션정의
- Rtk.js: Api컴포넌트
- api-reducer.js: 리듀서 및 액션정의

[Count관련]

### counter-reducer.js
1. createSlice 설정
 - name: 슬라이스 이름
 - initialState: 초기상태값
 - reducers: 액션생성자와, 액션 유형으로 리듀서를 자동생성
 [ 원래의 redux는 action생성 -> action type에 따른 reducer함수 설정을 따로 한다. 해당설정을 사용하면createReducer() + createAction() 을 결합하여 사용가능하다
]
2. slice.actions: 해당 슬라이스의 액션 내보내기 
3. slice.reducer: 해당 슬라이스의 reducer를 default 내보내기

### store.js
1. configureStore 저장소 구성옵션 래핑설정
2. configureStore reducer 옵션설정
reducer:{
    [지정리듀서명]:[사용할slcieFile.reducer],
    [지정리듀서명]:[사용할slcieFile.reducer]
}
3. middleware: 미들웨어를 사용할때이는데
미들웨어를 추가하는것은 스프레드 연산자보다는
concat 메서드를 사용하는게 좋다!
스프레드 연산자는 경우에 따라 중요한 정보를 잃수있다(공식문서내용)
4. getDefaultMiddleware: 기본미들웨어와 함께 사용자 지정미들웨어를 추가할수있는 함수.
*  RTK-Query를 사용하고 API용 미들웨어를 저장소에 추가한다.

### index.js
1. Provider 저장소 영역설정
2. <Provider store={store파일}/>
    - store 파일: 저장소를 래핑설정한 파일
    * 파일은 역할에 따라 구분하는것이 좋기때문에 다른파일에서 작성

### App.js(Count.js, Rtk.js)
1. react-redux의 useDispatch, useSelector 설정
const selctor = useSelector( state =>  state.리듀서함수이름.가져올값)
    * 기본적으로 store의 리듀서들을 가르킨다.
const dispatch = useDispatch();

[Api관련]

### api-reducer.js
[createApi]
1. RTK 쿼리기능의 데이터를 가져오고,변환,검색,엔드포인트등 전체적인 구조역할

2. reducerPath: 고유의 key이며 서버와의 통신을 두번 이상할경우 필요하다.
https://redux-toolkit.js.org/rtk-query/api/created-api/redux-integration#reducerpath


3. baseQuery: 서버에서 데이터를 가져오는 방법을 알고 있는 함수
https://redux-toolkit.js.org/rtk-query/api/createApi

4. fetchBaseQuery: HTTP요청을 단순화 시키는 함수
https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#baseurl

5. baseUrl: 필수값이며 기본 Url을 적는다

6. prepareHeaders(선택): 요청에 헤더를 지정하는 설정
*https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery

7. endpoints: 서버와의 상호작용하기 위해 정의한 일련의 작업집합 함수
https://redux-toolkit.js.org/rtk-query/api/createApi

[endpoints-options]
fetchBreeds : 쿼리를 정의하며 query를 사용해야한다.
query: RTK의 데이터를 요청할때만 쓰인다
Mutations: 서버의 데이터변경













