import styled from 'styled-components';

export const StyledAnalogClock = styled.div`
  .clock {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-width: 5px;
    box-shadow: -15px 10px 150px -9px #7a66f7;
    /* box-shadow: 0px 10px 35px -11px ${(props) => props.color}; */
    /* box-shadow: 0 2px 30px ${(props) => props.color}; */
    font-size: 24px;
    color: #fff;
    text-align: center;
    /* background: ${(props) => props.color}; */
  }

  .clock::after {
    background: #50cf9f;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #50cf9f;
  }

  .hour_hand {
    position: absolute;
    width: 6px;
    height: 60px;
    background: #aaffdf;
    top: 30%;
    left: 49%;
    transform-origin: bottom;
    border-radius: 16px;
  }

  .min_hand {
    position: absolute;
    width: 4px;
    height: 85px;
    background: #fff;
    top: 22%;
    left: 48.9%;
    transform-origin: bottom;
    border-radius: 16px;
  }

  .sec_hand {
    position: absolute;
    width: 1.5px;
    height: 115px;
    background: #50cf9f;
    top: 12%;
    left: 49.8%;
    transform-origin: bottom;
    border-radius: 16px;
  }

  .clock span {
    position: absolute;
    font-weight: 700;
  }

  .one,
  .two,
  .four,
  .five,
  .seven,
  .eight,
  .ten,
  .eleven {
    display: block;
    height: 10px;
    width: 4px;
    border-radius: 0 0 100px 100px;
    background-color: #fff;
  }

  .minutes {
    display: block;
    width: 1px;
    height: 5px;

    top: 50%;
    left: 50%;
  }

  .twelve {
    top: 10px;
    left: 46%;
  }

  .one {
    top: 10%;
    right: 26%;
    transform: translate(-50%, -50%) rotate(30deg);
  }

  .eleven {
    top: 10%;
    left: 26%;
    transform: translate(-50%, -50%) rotate(330deg);
  }

  .two {
    top: 25%;
    right: 10%;
    transform: translate(-50%, -50%) rotate(60deg);
  }

  .three {
    right: 10px;
    top: 46%;
  }

  .four {
    right: 30px;
    top: 67%;
    transform: translate(-50%, -50%) rotate(120deg);
  }

  .five {
    right: 78px;
    top: 80%;
    transform: translate(-50%, -50%) rotate(150deg);
  }

  .six {
    bottom: 10px;
    left: 50%;
  }

  .seven {
    left: 80px;
    top: 82%;
    transform: translate(-50%, -50%) rotate(210deg);
  }

  .eight {
    left: 30px;
    top: 67%;
    transform: translate(-50%, -50%) rotate(240deg);
  }

  .nine {
    left: 10px;
    top: 46%;
  }

  .ten {
    top: 25%;
    left: 10%;
    transform: translate(-50%, -50%) rotate(300deg);
  }
`;
