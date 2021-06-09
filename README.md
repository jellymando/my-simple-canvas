## Why?

VP host에서 simple-canvas 라이브러리를 사용하던 중 에러 발생.

(ios 기기에서 그리기 좌표 안맞음 등)

모바일 브라우저에서 문제 없이 작동하는 심플한 Painter 클래스를 만들기로 함.

## How?

- React + TypeScript
- EventEmitter
- EventListener

## Painter Constructor

- canvas (html canvas element)
- drawOn, figures - 스토리지 저장
- isDrawing (mousedown 여부)
- color, thickness
- removeDrawEvent (언마운트 될 때 등록된 이벤트리스너 제거)

## Painter 인스턴스 생성

color, thickness 값 전달

## setTarget

렌더링 후 뷰어와 호스트의 Cavnas Element가 생성되면 setTarget 메서드를 통해 Cavnas Element를 전달

## addDrawEvent

EventListner들을 추가한다.

## drawStart

touchstart나 mousedown 이벤트가 발생하면 isDrawing을 true로 바꾸고, 그리기 색상와 두께를 설정한다.

## draw

position 파라미터를 받아 실제로 canvas에 그림을 그린다.

그린 좌표를 position 배열에 집어넣는다.

## drawEnd

isDrawing을 true로 바꾸고, position 배열을 figures 배열에 집어넣고 스토리지에 저장한다.

## redraw

새로고침 시 스토리지에 drawOn과 figures 값이 있다면 이전에 그렸던 내역을 다시 그린다.

<br/>

---

## 새롭게 배운 점

- 모바일에서 화면을 상하로 드래그하면 새로고침 동작으로 인식하기 때문에 아래 코드를 추가했다.

```js
if (e.target === this.canvas) {
  e.preventDefault();
}
```

<br/>

- 터치한 좌표와 실제로 그려지는 좌표에 차이가 나는 이슈

`Element.getBoundingClientRect()`는 window를 기준으로 엘리먼트의 위치를 구하는 메서드이다.

mouse/touch event대로 그리면 위치 값이 더해져서 그려지기 때문에 위치 값을 빼주어야 한다.

<img src="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect/element-box-diagram.png"><br/>

```js
const rect = this.canvas!.getBoundingClientRect();

const x = e.touches[0].clientX - rect.left;
const y = e.touches[0].clientY - rect.top;
```

<br/>

[Using Touch Events with the HTML5 Canvas](https://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html)
