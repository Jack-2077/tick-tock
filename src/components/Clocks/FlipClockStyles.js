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

export const StyledFlipClockContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledFlipClockWrapper = styled.div`
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  -webkit-user-select: none;
  user-select: none;
  text-align: center;
  position: relative;
  margin: 1em;

  &::before,
  &::after {
    content: ' '; /* 1 */
    display: table; /* 2 */
  }

  &::after {
    clear: both;
  }
  ul {
    list-style: none;
    position: relative;
    float: left;
    margin: 10px;
    min-width: 170px;
    min-height: 135px;
    font-weight: bold;
    line-height: 87px;
    border-radius: 6px;
    background: #000;

    li {
      z-index: 1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      line-height: 87px;
      text-decoration: none !important;
    }
  }
  a {
    display: block;
    height: 100%;
    -webkit-perspective: 200px;
    -moz-perspective: 200px;
    perspective: 200px;
    margin: 0 !important;
    overflow: visible !important;
    cursor: default !important;

    div {
      z-index: 1;
      position: absolute;
      left: 0;
      width: 100%;
      height: 50%;
      font-size: 80px;
      overflow: hidden;
      outline: 1px solid transparent;
    }
  }

  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .up {
    transform-origin: 50% 100%;
    top: 0;
  }

  .up:after {
    content: '';
    position: absolute;
    top: 65px;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .down {
    transform-origin: 50% 0;
    bottom: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .inn {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 200%;
    color: ${(props) => props.color};
    text-shadow: 0 1px 2px #000;
    text-align: center;
    line-height: 130px;
    background-color: #333;
    border-radius: 6px;
    /* font-size: max(20vw, 30px); */
    font-size: 120px;
  }

  .up .inn {
    top: 0;
  }

  .down .inn {
    bottom: 0;
  }

  /* PLAY */
  .flip-clock-before {
    z-index: 3;

    .up {
      z-index: 2;
      animation: ${turn2} 0.5s linear both;

      .shadow {
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          color-stop(0%, rgba(0, 0, 0, 0.1)),
          color-stop(100%, black)
        );
        animation: ${show} 0.5s linear both;
      }
    }

    .down {
      .shadow {
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          color-stop(0%, black),
          color-stop(100%, rgba(0, 0, 0, 0.1))
        );
        animation: ${show} 0.5s linear both;
      }
    }
  }

  .flip {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  }

  .flip-clock-active {
    animation: ${asd} 0.5s 0.5s linear both;
    z-index: 5;

    .down {
      z-index: 2;
      animation: ${turn} 0.5s 0.5s linear both;

      .shadow {
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          color-stop(0%, black),
          color-stop(100%, rgba(0, 0, 0, 0.1))
        );
        animation: ${hide} 0.5s 0.2s linear both;
      }
    }

    .up {
      .shadow {
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          color-stop(0%, rgba(0, 0, 0, 0.1)),
          color-stop(100%, black)
        );
        animation: ${hide} 0.5s 0.3s linear both;
      }
    }
  }
`;
