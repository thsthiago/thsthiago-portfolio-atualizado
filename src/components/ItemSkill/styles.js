import styled from 'styled-components'

export const Container = styled.div`
  width: 46%;
  height: 65px;
  position: relative;
  margin-bottom: 110px;

  div:first-of-type {
    display: flex;
    align-items: center;
    color: #f2f2f2;

    img {
      height: 50px;
    }

    span {
      font-size: clamp(14px, 1.8vw, 25px);
      margin-left: 15px;
    }
  }

  > div:last-of-type {
    position: relative;
    width: 100%;
    height: 55px;
    margin-top: 20px;

    span {
      display: block;
    }

    > span:first-of-type {
      height: 100%;
      background: linear-gradient(90deg, #9800f9 -4.15%, #302caf 109.79%);
      border-radius: 100px;
      position: absolute;
      top: 0;
      z-index: 2;

      span {
        font-weight: bold;
        color: #f2f2f2;
        font-size: clamp(14px, 2vw, 22px);
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
      }
    }

    > span:last-of-type {
      width: 100%;
      height: 100%;
      background: #cac8f6;
      border-radius: 100px;

      position: relative;
    }
  }

  @media (max-width: 600px) {
    width: 90%;
    height: 65px;
    position: relative;
    margin: 0 auto;
    margin-bottom: 110px;
    line-height: 50px;

    img,
    > div:last-of-type span:first-of-type,
    > div:last-of-type span:last-of-type {
      line-height: 50px;
    }

    > div:last-of-type {
      height: 50px;
    }
  }
`
