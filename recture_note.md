# Section 1

1. node 를 설치한다.
2. node -v 으로 설치 여부를 확인
3. npm install -g create-react-app 실행

npx create-react-app {name of project}

node 버전이 5.2 이상일때 가능

## javascript

ES5 -- 모든 브라우저 제공
ES2015 -- 거의 모든 브라우저에서 제공
ES2016 -- 지원이 미비함
ES2017 -- 지원이 미비함
ES2018 -- 지원이 미비함
....

그래서 babel (ES5 js)을 사용해서 브라우저가 지원하는 js파일로 바꿔준다.!!

### import

ES2015 modules - import
CommonJS modules - require

- 커먼 js 모둘 시스템을 사용하면 임포트는 require syntax사용.

### 컴포넌트 등록 과정

component is - (Function or Class)) - that produces HTML to show the user (using JSX) - and handles feedback from the user
(using event handlers)

컴포넌트는 function 또는 Class로 생성이 되며, 사용자에게 보여주기 위해 컴포넌트는 HTML로 만들어진다 (JSX를 사용해서)
그리고 사용자로 부터의 이벤트를 핸들러를 통해 받는다.

# Section 2

## What is JSX?

React 에서는 이벤ㅌ가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등 렌더링 로직이 본질적으로 다른 UI 로직과 연결된다는 사실을 받아 들인다.

## Inlind Styling with JSX

html에서 style을 입히는 문법과 JSX에서 style입히는 문법이 다르다.

속성은 camel표기법으로 해야하며, {{}} 이안에 기술이 되어야하고 "" 대신 '' 을 사용한다.

## Class vs ClassName

EX2015 에서 Class가 사용되므로, JSX에서는 엘리먼트의 Class을 ClassName을 사용한다.

## Values JSX can't show

JSX에서는 Object는 보여줄수 없다. 일반 텍스트가능

# Section 3

## Three tenets of components

1. Component Nesting

   - a component can ve shown inside of another

2. Component Resuability

   - we want to make components that can be easily reused through out application

3. Component Configuration
   - we should be able to configure a component when it is created

## Sementic UI

CSS library

```
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
    />
```

index.html에 삽입.

## Specifing images in JSX

https://github.com/Marak/faker.js.git

faker js 라는 오픈소스이다.
mock데이터 들을 다양하게 만들어 사용할수 있다.
이미지 또한 생성해서 만들수 있어서 유용함

```
import faker from "faker";

.
.
.
<img alt="avatar" src={faker.image.avatar()} />
.
.
```

위와 같이 사용하면 된다.

## Component nesting

```
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

```

comment 가 여러개일때 위와 같이 표현할 수 있다.
하지만 React에서는 컴포넌트를 재사용할 수 있는데
중복되는 요소들을 컴포넌트화 하여 중복 코드를 최소화 할 수 있다.

```

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
```

CommentDetail 컴포넌트를 만들어서 중복 코드를 컴포넌트화 하였다.
export default CommentDetail 는 컴포넌트를 프로젝트 어디서든 사용할 수 있게 명시한다.

```
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};
```

위와 같이 표현할 수 있다.

## Props (Properties)

System for passing data from a parent component to a child component

-> Goal is to customize or configure a child component

부모노드에서 자식 노드로 데이터를 패씽하기 위한 시스템

-> 자식 노드를 커스터마이징 또는 설정하기 위함이다.

# Section 4

## Class-Based Components

Functional Component : 간단한 컴포넌트를 만들때 좋다.
Class Component : 모든 부분에서 사용된다.

개발자마다 어떤걸 사용하는게 좋다 의견이 다르다.

Class compoenent 장점

1. 코드 구조가 쉽다.
2. state 사용가능 다른 리액트 시스템에서도..
3. 라이프사이클을 쉽게 이해할수있다.

## Getting user physical location.

Geolocation API

developer.mozilla.org/en-US

## What is going on in app.

JS file loaded by browser
App component gets created
We call geoloaction service
App return JSX, gets rendered to page as HTML
We get reslut of geolocation

## Refector function

Rule of class components

1. Must be a javascript class
2. Must extend (subclass) React.component
3. Must define a 'render' method that returns some amount of JSX

Rule of state

1. Only usable with class components
2. You will confuse props with state
3. 'State' is a JS object that contains data relevant to a component
4. state must be initialized when a component is created
5. State can only be uploaded using the functin 'setState'

```
constructor(){
 super(props);
}
```

위의 constructor는 리액트의 funcfion이 아니라 자바스크립트의 function이다.
무조건 처음 호출이 되는것.

super(props)

React.Component를 상속받았기 때문에...초기화 해줘야함.

## state

```
 this.state = { lat: 40 };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => console.log(error)
    );
```

state를 사용하기전 초기화가 필요하다.
state의 상태를 업데이트를 하려면 반드시 setState를 사용해야 한다.
직접적으로 값을 넣거나 수정하면 안된다.

```
render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>latitude : {this.state.lat}</div>;
    }

    return <div> Loading!</div>;
  }
```

state 를 사용해서 상태에 따른 여러가지 화면을 보여줄수 있다.

## state 초기화 방법

```
constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    .
    .
    .
  }
```

생성자에서 초기화 하는 방법.

```
 this.state = { lat: null, errorMessage: "" };
```

생성자에서 초기화 안해도 위와 같이 간단하게 초기화 할수 있다.
왜냐하면 코드가 바벨에서 변환이 될때 알아서 생성자에서 초기화하도록 바꾸어 준다.

## component lifecycle

1. Constructor
2. render
   2.1 content visible on screen
3. componentDidMount
   3.1 Sit and wait for updates...
4. componentDidUpdate (render 호출후에)
   4.1 Sit and wait until this component is not longer shown
5. componentWillUnmount

componentDidMount : 데이터 로딩 or 다른 프로세스 or 한번만 하면 되는 것.
-> constructor 에서 데이터 로딩을 하지말라고 하고있음.

componentDidUpdate : 더 많은 데이터를 로딩 할 때, state, props 바뀔때.

componentWillUnmount : 컴포넌트를 스크린에서 지울때,

다른 메소드들도 있지만 거의 사용않함

## Props 에 디폴트값이 필요할때

```

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.message}</div>
    </div>
  );
};
```

Spinner 컴포넌트가 있다.
위 코드는 props로 메시지를 받아 화면에 뿌려주도록 재사용가능하도록 만들어졌지만
만약 메시지를 설정을 안했을때 디폴트 값이 뿌려지길 원한다면 두가지 방법이 있다.

```
const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.message || 'loading...}</div>
    </div>
  );
};
```

위와 같이 JSX에서 표현해 주는 방법

```
const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
};
```

위와 같이 defaultProps를 사용하는 방법

# Handlering user input event

```

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    );
  }
  -----------------------------------------------
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              onChange={(event) => console.log(event.target.value)}
            ></input>
          </div>
        </form>
      </div>
    );
  }

}
```

이벤트를 연결할때 두가지 방법이 있다.
엘리먼트에 에로우 펑션을 이용하는 것과
펑션을 생성해서 넣어주는 방법.

## Cannot read property 'state' of undefined

발생 이유:

해결법 1 : 에로우 평션을 사용하면 자동으로 this를 바인딩한다. (?)
해결법 2 : 생성자 생성해서 바인딩
해결책 3 : 인라인 펑션에서 에로우 펑션을 사용

## Communication with child to parent

일반적으로 props를 할때 부모 엘리먼트에서 자식 엘리먼트로 탑다운 방식으로 통신 하였으나
반대로 자식노드에서 부모노드에게 데이터를 전달 할때는
부모노드에서 콜백 함수를 이용해 자식노드의 로직에 넣어 필요한 데이터를 받아오는 방식을 이용하면 된다.

## API request with React

unsplash API : 이미지 서칭 오픈소스 API

axios : 서드파티 , 네트워크 reqeust를 더 핸들링 할수있다.
fetch : 모던 브라우저에서 지원하는 펑션 , 다운받을 필요없다.

이왕이면 axios를 쓰는게 맞는듯하다.

## axios response 처리

```
onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID -efeJQnd_vj3Y-diSIj_Xzt59aks6Yl-O4xGQiUamfQ",
      },
    }).then((response)=>{
      console.log(response);
    });
  }
```

위와 같이 promise(?) 방식으로 처리가능

```
async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID -efeJQnd_vj3Y-diSIj_Xzt59aks6Yl-O4xGQiUamfQ",
      },
    });
  }
```

위와 같이 function 앞에 async를 붙혀주면, await을 사용할수 있다.

> promise 방식과 어떤점이 다른지 알아야 함.
> async 를 사용해서 네트워크 리퀘스트의 결과가 언제오든지 결과를 처리할수 있게끔 하는것 같다.

## binding Callback method

> Unhandled Rejection (TypeError): this.setState is not a function

위에서 해결했던 this 를 바인딩해주는 것과 같이 해결, 같은 원인

## map statement

## Each child in a list should have a unique "key" prop.

엘리먼트에 키값을 주는 것은 리액트가 렌더링이후에 돔에 추가할때 퍼포먼스적으로 많이 영향이 있다.
ID는 레코드를 판별할 유니크 아이디 값이어야한다.

## Grid CSS

## React ref system

특정한 Dom에 접근하기위해서 리액트에서 제공하는 ref 시스템을 이용한다.

# Redux

리덕스는 스테이트를 관리하는 라이브러리이다.

- State management library
- Makes creating complex applications easier
- Not required to create a React app
- Not explicitly designed to work with React

# Redux cycle

1. Action Creator
2. Action
3. dispatch
4. Reducers
5. State

# Modeling Redux

```
const createPolicy = (name, amount) => {
  return {
    type : 'CREATE_POLICY',
    payload: {
      name: 'Alex',
      amount: 20
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    palyload : {
      name : 'Sam'
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    palyload : {
      name : name,
      amountOfMoneyToCollection: amountOfMoneyToCollect
    }
  }

}

// Reducers
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM') {
    // we care about this action {form}

    return [...oldListOfClaims, action.payload];
  }

  // we don't care the action (form)

  return oldListOfClaims;
};

const accounting = (bagOfMoney, action) => {

  if(actino.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if( actino.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
}

const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  }else if(action.type==='DELETE+POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name);
  }

  return listOfPolicies;
}



const {createState, combineRecuders} = Redux;

const ourDepartments = combineReducers({
  accounting : accounting,
  policies : policies,
  claimsHistory, claimsHistory
});

const store = createState(ourDepartments);
const action = createPolicy('Alex', 20);

store.dispatch(action);

console.log(store.getState());
```

## Important Redux

## React-Redux

리액트와 리덕스를 같이 사용하기 위해 사용하는 라이브러리

## Redux project structure

/src

/actions : contains action creators

/components : files components

/reducers : files reducers

/index.js : sets up bothe the react and redux sides of the app

## Calling action creators from Components

```

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
```

mapStateToProps 는 이벤트가 발생하면 다시 호출 된다.

## functional components with connect

## Conditional Rendering

## App env

redux : ther redux library
react-redux : integration layer between react and redux
axios : Helps us make network requests
redux-thunk : Middleware to help us make request in a redux application

## General Data loading with redux

1. Component gets rendered onto the screen
2. Components 'componenetDidMount' lifecycle method gets called
3. we call action creator from 'componentDidMount'
4. Action creator runs code to make an API request
5. API responds with data
6. Action creator returns an 'action' with the fetched data on the 'payload' property
7. Some reducer sees the action, returns the data off the 'payload'
8. Because we generated some new state object, redux/react-redux cause our React app to be rerendered

1~3 : Components are generally responsible for fetching data need by calling an action createor

4~6 : Action creator are responsible for making API requests (this is where Redux-thunk comes into play)

7~9 : We get fetched data into a component by generating new state in our redux store. then getting that into our comopnent through mapStateToProps

## Sysnchonous action creator

: instantly returns an action with data ready to go

## Asynchronous action creator

-> ㅁㅣ들웨어에서 처리(?)
: take some amount of time for it to get its data ready to go

## Middleware in Redux

Normal Rules

1. Action creators must return action object
2. Actions must have a type property
3. ...

이해가 필요함.. (react thunk)

## Rules of reducers

1. Must return any value besides 'undefined'
2. Produces 'state' , or data to be used inside of your app using only previous state and the action
3. Must not return reach 'out of itself' to decide what value to return (reducers are pure)
4. Must not mutate its input 'state' argument

## 중복된 리퀘스트 호출 솔루션

1. lodash 라이브러리 memoize

   - 좀 복잡함.
   - 유지보수가 어려울 것 같음

2. lodash 라이브러리 chain

## OBS

Open Boradcast Software (OBS)

## RTMP

Real Time Messaging Protocol Server

# Navigation 라이브러리

```
npm install --save react-router-dom
```

리액트라우터 라이브러리를 다운받는다.

react-router : Core navigation lib (we don't install this manually)
react-router-dom : Navigation for dom-based apps (we want this)
react-router-native : Navigation for react-native apps
react-router-redux : Bindings between Redux and React Router (not necessery)

# How React Router works

History (Object) -> BrowserRouter

: history 오브젝트는 브라우저라우터와 커뮤니케이션 함
BrowserRouter는 히스토리의 현재 패쓰가 바뀐지 리슨중

# Oauth

## Oauth for Servers

- Results in a 'token' that a server can user to make requests on behalf of the user
- Usually used when we have an app that needs to access user data when they are not logged in
- Difficult to setup because we need to store a lot of info about the user

## Oauth for JS Browser Apps

- Results in a 'token' that a browser app can use to make requests on behalf of the user
- Usually used when we have an app that only needs to access user data while they are logged in
- Very easy to set up thanks to Google's JS lib to automate flow

# Redux with Oauth

# Redux form
