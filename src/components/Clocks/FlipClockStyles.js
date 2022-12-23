import styled, { keyframes } from 'styled-components';

const show = keyframes`
0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`;

const hide = keyframes`
0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
`;

const turn = keyframes`
0% {
      transform: rotateX(90deg);
    }

    100% {
      transform: rotateX(0deg);
    }`;

const turn2 = keyframes`
0% {
    transform: rotateX(0deg);
  }

  100% {
    transform: rotateX(-90deg);
  }
`;

const asd = keyframes`
0% {
      z-index: 2;
    }

    20% {
      z-index: 4;
    }

    100% {
      z-index: 4;
    }`;

export const StyledContainer = styled.div`
  .flip-clock-wrapper a {
    cursor: pointer;
    text-decoration: none;
    color: #ccc;
  }

  .flip-clock-wrapper a:hover {
    color: #fff;
  }

  .flip-clock-wrapper ul {
    list-style: none;
  }

  /* Main */
  .flip-clock-wrapper {
    font: normal 11px 'Helvetica Neue', Helvetica, sans-serif;
    -webkit-user-select: none;
    user-select: none;
  }

  .flip-clock-meridium {
    background: none !important;
    box-shadow: 0 0 0 !important;
  }

  .flip-clock-meridium a {
    color: #313333;
  }

  .flip-clock-wrapper {
    text-align: center;
    position: relative;
    width: 100%;
    margin: 1em;
  }

  .flip-clock-wrapper:before,
  .flip-clock-wrapper:after {
    content: ' '; /* 1 */
    display: table; /* 2 */
  }
  .flip-clock-wrapper:after {
    clear: both;
  }

  /* Skeleton */
  .flip-clock-wrapper ul {
    position: relative;
    float: left;
    margin: 10px;
    width: 170px;
    height: 135px;
    font-weight: bold;
    line-height: 87px;
    border-radius: 6px;
    background: #000;
  }

  .flip-clock-wrapper ul li {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 87px;
    text-decoration: none !important;
  }

  .flip-clock-wrapper ul li:first-child {
    z-index: 2;
  }

  .flip-clock-wrapper ul li a {
    display: block;
    height: 100%;
    -webkit-perspective: 200px;
    -moz-perspective: 200px;
    perspective: 200px;
    margin: 0 !important;
    overflow: visible !important;
    cursor: default !important;
  }

  .flip-clock-wrapper ul li a div {
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    font-size: 80px;
    overflow: hidden;
    outline: 1px solid transparent;
  }

  .flip-clock-wrapper ul li a div .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .flip-clock-wrapper ul li a div.up {
    transform-origin: 50% 100%;
    top: 0;
  }

  .flip-clock-wrapper ul li a div.up:after {
    content: '';
    position: absolute;
    top: 65px;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 3px;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .flip-clock-wrapper ul li a div.down {
    transform-origin: 50% 0;
    bottom: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .flip-clock-wrapper ul li a div div.inn {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 200%;
    color: #ccc;
    text-shadow: 0 1px 2px #000;
    text-align: center;
    line-height: 130px;
    background-color: #333;
    border-radius: 6px;
    font-size: 120px;
  }

  .flip-clock-wrapper ul li a div.up div.inn {
    top: 0;
  }

  .flip-clock-wrapper ul li a div.down div.inn {
    bottom: 0;
  }

  /* PLAY */
  .flip-clock-wrapper ul.play li.flip-clock-before {
    z-index: 3;
  }

  .flip-clock-wrapper .flip {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  }

  .flip-clock-wrapper ul.play li.flip-clock-active {
    animation: ${asd} 0.5s 0.5s linear both;
    z-index: 5;
  }

  .flip-clock-divider {
    float: left;
    display: inline-block;
    position: relative;
    width: 20px;
    height: 100px;
  }

  .flip-clock-divider:first-child {
    width: 0;
  }

  .flip-clock-dot {
    display: block;
    background: #323434;
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    left: 5px;
  }

  .flip-clock-divider .flip-clock-label {
    position: absolute;
    top: -1.5em;
    right: -86px;
    color: black;
    text-shadow: none;
  }

  .flip-clock-divider.minutes .flip-clock-label {
    right: -88px;
  }

  .flip-clock-divider.seconds .flip-clock-label {
    right: -91px;
  }

  .flip-clock-dot.top {
    top: 30px;
  }

  .flip-clock-dot.bottom {
    bottom: 30px;
  }

  .flip-clock-wrapper ul.play li.flip-clock-active .down {
    z-index: 2;
    animation: ${turn} 0.5s 0.5s linear both;
  }

  .flip-clock-wrapper ul.play li.flip-clock-before .up {
    z-index: 2;
    animation: ${turn2} 0.5s linear both;
  }

  .flip-clock-wrapper ul li.flip-clock-active {
    z-index: 3;
  }

  /* SHADOW */
  .flip-clock-wrapper ul.play li.flip-clock-before .up .shadow {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(0, 0, 0, 0.1)),
      color-stop(100%, black)
    );
    animation: ${show} 0.5s linear both;
  }

  .flip-clock-wrapper ul.play li.flip-clock-active .up .shadow {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(0, 0, 0, 0.1)),
      color-stop(100%, black)
    );
    animation: ${hide} 0.5s 0.3s linear both;
  }

  /*DOWN*/
  .flip-clock-wrapper ul.play li.flip-clock-before .down .shadow {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, black),
      color-stop(100%, rgba(0, 0, 0, 0.1))
    );
    animation: ${show} 0.5s linear both;
  }

  .flip-clock-wrapper ul.play li.flip-clock-active .down .shadow {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, black),
      color-stop(100%, rgba(0, 0, 0, 0.1))
    );
    animation: ${hide} 0.5s 0.2s linear both;
  }
`;
