# Web 연습 코드  

## 📖 진행된 학습 내용
### Day 01 - HTML 기본
- HTML의 기본 구조 이해
- <head>와 <body> 태그의 역할
- 제목, 단락, 목록, 링크 및 이미지 태그 사용법
  
### Day 02 - HTML/CSS 복습
- CSS 기본 선택자와 속성
- HTML과 CSS 연결
- 텍스트와 레이아웃 스타일링

### Day 03 - JavaScript 기본
- JavaScript의 역할과 HTML 연동
- DOM(Document Object Model) 이해
- JavaScript를 통한 HTML 요소 조작

### Day 04 - JavaScript 이벤트
- 이벤트 처리 방법
- addEventListener로 사용자 상호작용 처리
- 키보드 및 마우스 이벤트 실습

### Day 05 - Javascript 배열
- **`filter()` 메서드**:
- 주어진 조건을 만족하는 배열 요소만을 반환하는 메서드.
- 콜백 함수로 조건을 지정.
- **`map()` 메서드**:
- 배열의 각 요소를 변경한 새 배열을 반환.

### Day 06 - Javascript 객체와 JSON
- **객체란?**
  - 키-값(key-value) 쌍으로 구성된 데이터 구조.
  - 데이터를 그룹화하거나 관련 데이터를 다룰 때 유용하게 사용.
- **this**키워드
  -  객체 내부에서 현재 객체를 참조할 때 사용.
- **객체 순회**
  -  속성과 값을 반복적으로 탐색.
- **JSON이란**
  -  데이터를 교환하기 위해 사용하는 경량 데이터 형식.
  -  객체와 유사한 구조로, 문자열로 표현됨.

### Day 07 - 비동기 프로그래밍의 이해
- **Promise**
  - 비동기 작업의 결과를 나타내는 객체.
  - `resolve`와 `reject`를 통해 작업 완료 또는 실패를 처리.
  - `.then()`과 `.catch()`를 사용하여 결과를 처리.
- **async/await**
  - 비동기 코드를 동기식처럼 작성할 수 있도록 도와주는 키워드.
  - `async` 함수는 항상 `Promise`를 반환.
  - `await`는 `Promise`가 해결될 때까지 기다림.

### Day 08 - 비동기 프로그래밍 심화
- 비동기 작업 결과를 DOM에 표시.
- 이벤트 리스너와 비동기 함수의 조합.
- `setTimeout`과 `setInterval`을 활용하여 주기적인 데이터 업데이트 구현.

### Day 09 - fetch api
- `fetch` API 사용법
- 서버에서 데이터를 가져오고 처리하는 방법
- Promise와 JSON 데이터 활용
- DOM 조작을 통해 데이터를 웹페이지에 표시

### Day 10 - 복습
- To-Do List 어플리케이션 빌드
- Day 09까지의 학습 내용 복습

### Day 11 - 복습2
- To-Do List 어플리케이션 업데이트
- 클로저와 스코프의 개념을 이해하고 활용
- JavaScript의 최신 문법을 활용하여 코드를 개선

### Day 12 - Local 저장
- 로컬 저장(Local Storage) 활용
  - localStorage.setItem()과 localStorage.getItem()을 사용하여 데이터를 저장하고 불러오는 방법 학습
  - 브라우저를 닫아도 유지되는 데이터를 저장하는 방식 실습
- OR 연산자 (||)
  - 첫 번째 truthy 값을 반환하거나, 모든 값이 falsy일 경우 마지막 값을 반환한다.
- 자바스크립트 내장 함수 활용
  - 다양한 내장 함수들의 기능과 동작 과정을 학습

### Day13 - Session 저장
- 세션 저장(Session Storage) 활용
  - sessionStorage.setItem()과 sessionStorage.getItem()을 사용하여 데이터를 저장하고 불러오는 방법 학습
  - 브라우저를 닫으면 데이터가 사라지는 방식 실습
- 스코프와 클로저 개념 학습
  - 함수 스코프와 블록 스코프의 차이점 이해
  - 클로저의 개념과 활용법 실습
 
### Day14 - Cookies
- 쿠키 저장 및 확인
  - document.cookie를 이용한 쿠키 저장 및 확인 방법 학습
  - 브라우저에서 쿠키가 저장되지 않는 이유 분석
- 로컬 환경에서 쿠키가 동작하지 않는 원인
  - file:// 프로토콜에서는 쿠키가 차단될 수 있음
  - 해결 방법: 로컬 서버(http://localhost:8000) 실행 또는 localStorage 사용
  
## 💻 실행 방법
- 저장소를 클론합니다.

## bash
git clone https://github.com/사용자명/web-dev-exercises.git

## 🙌 목표
- 웹 개발 기본기 다지기
- Git/GitHub 사용법 익히기
- HTML, CSS, JavaScript의 연계 학습
- 실무 프로젝트 준비를 위한 기반 마련
- 
## 🤝 기여
- 이 프로젝트는 개인 학습 목적으로 진행되고 있으나, 제안 사항이나 피드백은 언제든 환영합니다!
