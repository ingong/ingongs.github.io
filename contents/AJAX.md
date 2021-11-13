---
date: '2021-10-13'
title: 'AJAX 란 무엇인가'
categories: ['Web']
summary: '비동기 프로그래밍을 하기 위해서 AJAX 는 반드시 필요한 기술이다. AJAX 는 하나의 특정한 기술을 말하는 것이 아니라, 함께 사용하는 기술의 묶음을 지징하는 것이다. 비동기적인 웹 어플리케이션의 제작을 위해서는 HTML, CSS, DOM, XMLHttpRequest 등이 필요하다.'
thumbnail: './test.png'
---

이번 포스트에서는 비동기 프로그래밍을 위해서 반드시 필요한 AJAX 에 대해서 이야기해보려고 한다.

### TL;DR

- AJAX 는 비동기적인 웹 어플리케이션 제작을 위한 웹 개발 기법이다.
- AJAX 를 통해 대역폭 낭비를ㅁ방지하고, 사용자의 상호작용을 향상시킬 수 있다.

## AJAX 란?

- Ajax(Asynchronous JavaScript and XML, 에이잭스) 의 약자이다.
- 비동기적인 웹 애플리케이션의 제작을 위해 아래와 같은 조합을 이용하는 웹 개발 기법이다.
  - HTML, CSS (**표현 정보**)
  - DOM, JS (**동적인 화면 출력** 및 **상호작용**)
  - XML, XSLT, XMLHttpRequest (웹 서버와 **비동기적으로** 데이터를 교환하고 조작)
- Ajax는 자체가 하나의 특정한 기술을 말하는 것이 아니며, 함께 사용하는 기술의 묶음을 지칭하는 용어이다.

## AJAX 를 왜 사용하는가?

기존의 웹 어플리케이션 기술의 단점을 극복하기 위해서 등장한 기술이 AJAX 이다. <br/>
기존의 웹 어플리케이션 방식에 대해서 간단하게 알아보자.

### 기존의 웹 어플리케이션

1. FE : 브라우저에서 폼을 채우고 이를 웹 서버로 제출(submit)
2. BE : 웹 서버는 요청된 내용에 따라서 데이터를 가공하여 새로운 웹 페이지를 작성하고 응답으로 되돌려줌
3. FE : 최초에 폼을 가지고 있던 페이지와 서버로부터 받은 결과물 유사

이는 대역폭을 낭비하고 금전적인 손실을 야기했으며, 대역폭의 낭비는 사용자의 상호작용도 어렵게 했다.

### AJAX 기술을 활용한 웹 어플리케이션

1. 필요한 데이터만을 웹서버에 요청해서 받은 후 클라이언트에서 데이터에 대한 처리.
2. 보통 SOAP이나 XML 기반의 웹 서비스 프로토콜이 사용
3. 웹 서버의 응답을 처리하기 위해 클라이언트 쪽에서는 JS 사용
4. 웹 서버에서 전적으로 처리되던 데이터 처리의 일부분이 클라이언트 쪽에서 처리
   - 웹 브라우저와 웹 서버 사이에 교환되는 데이터량 감소 → 애플리케이션의 응답성 향상
   - 웹서버의 데이터 처리량 감소 → 애플리케이션의 응답성 향상

<div align="center">
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bb91e27d-0303-4738-93bf-dfe20589b447/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-09-28_14.40.50.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211107T154115Z&X-Amz-Expires=86400&X-Amz-Signature=02f09c124aa26530e966edd4ac4952044c34880e0bad745deb9ecc86284ed922&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202021-09-28%252014.40.50.png%22" height="500" width="600">
</div>

#### 장점

- 페이지 이동없이 고속으로 화면을 전환할 수 있다.
- 서버 처리를 기다리지 않고, 비동기 요청이 가능하다.
- 수신하는 데이터 양을 줄일 수 있고, 클라이언트에게 데이터 처리를 위임할 수 있다.
- 플러그인 없이도 인터렉티브한 웹페이지 구현할 수 있다.

#### 단점

- Ajax를 쓸 수 없는 브라우저에 대한 문제가 있다.
- HTTP 클라이언트의 기능이 한정된다.
- 페이지 이동없는 통신으로 인한 보안상의 문제가 발생할 수 있다.
- 스크립트로 작성되므로 디버깅이 어렵다.
- CORS 문제로 다른 도메인과는 통신이 불가능하다.

웹 개발을 하면서 AJAX 의 단점을 체감해본적은 없다. 아마 보안상의 문제는 지금 개발자를 준비하면서 감은 눈으로 바라보고 있어서 그럴 수도 있을 것 같다. 해당 단점은 웹 보안 관련해서 공부해보면서 알게 될 것 같다.

## Fetch API 를 폴리필하기 위해서 Babel 을 사용할까?

<div align="center">
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/20260b3d-1442-407f-878f-c10a082ed06a/24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211107T160005Z&X-Amz-Expires=86400&X-Amz-Signature=c9369edbb328002ded84d6ee755f1c9908626e98ff4f01f3f3c29926e4c65cec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2224.png%22" width="300">
</div>

웹 개발을 처음 했을 때는 Fetch 를 JS 에서 사용되는 API 중 하나라고 생각했었다. 정말 엄청난 착각이였다. Web API 는 실행 환경이 Web 이며 WHATWG 에서 표준을 관리하고, JS 는 실행 환경이 JS Engine 이며, ECMAScript 에서 표준을 관리한다고 한다.

즉, Fetch API 는 Babel 을 통한 폴리필이 불가능하다. Babel 은 Ecmascript 스펙만 지원하기 때문에 Fetch 를 지원하지 않는다 따라서 WHATWG 에서 제공하는 Fetch Polyfill 을 사용해야한다. WHATWG 는 W3C 와의 웹 표준 전쟁에서 승리한 단체이며, 현재 Web API 의 표준은 WHATWG 가 관리한다.

Web API 는 실행 환경이 Web 이며, WHATWG 에서 표준을 관리한다. 예시로는 console, setTimeout, fetch, XMLHttpRequest 이 있다. JavaScript 는 실행 환경이 JS Engine 이며, ECMAScript 에서 표준을 관리한다. 예시로는 map, reduce, forEach, class 가 있다. ECMAScript 는 스크립트 언어가 어떻게 생겨야 하는지에 대한 사양을 스펙으로 명시한다.

## 마무리

AJAX 라는 기술에 대한 내용과 등장 배경 그리고 장점과 단점에 대해서 알아봤다. 기술들의 등장 배경을 학습하다보면 항상 비효율적인 문제들을 해결하기 위해 등장했었고, AJAX 또한 어플리케이션의 응답성을 향상시키고 네트워크 대역 손실을 방지하기 위해 등장했다. 비동기 프로그래밍을 구현하기 위해서 반드시 필요한 기술이며, 당연하게 써왔던 것들에 대해 그 등장 배경과 관련한 내용을 학습할 수 있었던 좋은 기회였다.
