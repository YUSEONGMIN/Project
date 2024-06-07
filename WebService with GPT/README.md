## 챗GPT API 적용된 운세보는 챗도지 웹 서비스 만들기 - 조코딩

## 목차

- [Section 1 - 시작](#section-1---시작)
- [Section 2 - BE 구축하기](#section-2---be-구축하기)
- [Section 3- FE 구축하기](#목차)
  - [BE 서버와 연결하기](#be-서버와-연결하기)
  - [채팅 UI](#채팅-ui)


# [Section 1 - 시작](#목차)

## ChatGPT

## ChatGPT Playground


# [Section 2 - BE 구축하기](#목차)


https://www.npmjs.com/package/openai


https://www.npmjs.com/package/express

Node.js

Express란?

Node.js 웹 애플리케이션 프레임워크

**가장 기본적인 Node.js에서 서버를 만드는 프레임워크**

Express를 이용해서 웹 서버를 만듦  
프론트에서 요청하면 실행해서 돌려주는 형태로

Express

```js
const express = require('express') // express 불러오기
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

express 불러와서 app으로 만든 후  
get 요청이 오면 3000 포트에 'Hello World"를 돌려준다는 뜻

실행 후 `localhost:3000` 접속

https://expressjs.com/ko/guide/routing.html



라우트 메소드

```js
// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
```

get 요청은 주소 창에 대화 내용이 담겨 너무 길어지므로  
post 요청으로 받기 (body 값을 줘야 함)

```js
var express = require('express')

var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})
```

프론트엔드에서 요청을 하는데  
그 요청이 json 형태로 들어왔을 때 받으려면 `app.use`

근데 그냥 프론트에서 요청하면 CORS 이슈가 있음  

CORS(Cross-Origin Resource Sharing)  
'CORS 정책을 지킨 리소스 요청'

cors
아무데서나 오는 요청을 다 허용하면 보안에 취약함
어디에서 요청이 왔는지 확인해줌

# [Section 3- FE 구축하기](#목차)

- [BE 서버와 연결하기](#be-서버와-연결하기)
- [채팅 UI](#채팅-ui)


## [BE 서버와 연결하기](#section-3--fe-구축하기)

fetch 이용

https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch


## [채팅 UI](#section-3--fe-구축하기)

https://codepen.io/

# [Section 4 - 기능 고도화](#목차)

Font Awesome

https://fontawesome.com/

# [Section 5 - 배포하기](#목차)

- [FE 배포](#fe-배포)
- [BE 배포](#be-배포)

## [FE 배포](#section-5---배포하기)

https://www.cloudflare.com/

## [BE 배포](#section-5---배포하기)

AWS Lambda

```js
module.exports.handler = serverless(app);
```

![alt text](img/image.png)

![alt text](img/image-1.png)

Create function