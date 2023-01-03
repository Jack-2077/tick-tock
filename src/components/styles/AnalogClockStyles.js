import styled from 'styled-components';

export const StyledAnalogClock = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 272px;
  height: 272px;
  background-color: #000;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 30px ${(props) => props.color};
  border: 3.5px solid #282828;

  ul {
    list-style: none;
    height: 38%;
    width: 0;
    position: absolute;
    bottom: 50%;
    left: 50%;
  }

  ul li {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 50% 100%;

    div {
      color: #fff;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -90%);
    }
  }

  .three {
    transform: rotate(90deg);
    div {
      transform: translate(120%, -180%) rotate(-90deg);
    }
  }

  .six {
    transform: rotate(180deg);
    div {
      transform: translate(-50%, -270%) rotate(-180deg);
    }
  }

  .nine {
    transform: rotate(270deg);
    div {
      transform: translate(-220%, -180%) rotate(-270deg);
    }
  }

  span {
    display: block;
    width: 1px;
    height: 95%;
    position: absolute;
    top: 50%;
    left: 50%;

    &::before,
    &::after {
      content: '';
      background-color: #a0a1a4;
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
    }

    &::after {
      top: 0;
    }
  }

  .hour-block {
    &::before,
    &::after {
      background-color: red !important;
      height: 8px !important;
      width: 2px !important;
      border-radius: 0 0 100px 100px;
    }

    &::after {
      border-radius: 100px 100px 0px 0px;
    }
  }

  .circle {
    width: 9px;
    height: 9px;
    background-color: #fdfaf7;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
  }

  .hour-hand,
  .minute-hand {
    width: 3px;
    height: 1px;
    position: absolute;
    left: 49.5%;
    top: 50%;
    transform-origin: 50% 0;
    z-index: 5;

    &::before {
      width: 3px;
      height: 80px;
      background-color: #fff;
      border-radius: 3px;

      content: '';
      position: absolute;
      bottom: 49.5%;
      left: 50%;
      transform-origin: 50% 0;
      transform: translateX(-50%);
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      background: #fff;
      border-radius: 3px;

      width: 3px;
      height: 10px;
      top: 3px;
    }
  }

  .minute-hand {
    opacity: 0.9;
    left: 49.5%;
    z-index: 4;
    &::before {
      height: 105px;
    }
  }

  .second-hand {
    position: absolute;
    border-radius: 100%;
    width: 4px;
    height: 4px;
    background: ${(props) => props.color};
    top: 7.1%;
    left: 51%;
    transform-origin: 0 15vh;
    border-radius: 16px;
  }
`;
