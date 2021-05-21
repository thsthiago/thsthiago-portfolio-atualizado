import styled, { css, keyframes } from 'styled-components'

const barsEffect = {
  barsEffect: css`
    width: 0px;
    background: #c33afc;
    &::before {
      background: #c33afc;
      transform: rotate(45deg) translate(0px);
      -webkit-transform: rotate(45deg) translate(0px);
    }
    &::after {
      background: #c33afc;
      transform: rotate(-45deg) translate(0px);
      -webkit-transform: rotate(-45deg) translate(0px);
    }
  `
}

const animationRocket = keyframes`
  0% {
    bottom: -30%;
    left: 5%;
  }
  50% {
    bottom: -50%;
    left: 0;
  }
  100% {
    bottom: -30%;
    left: 5%;
  }
`

export const Header = styled.header`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 90px;
  padding: 0 3%;
  display: flex;
  align-items: center;

  > div {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
    z-index: 100;
    cursor: pointer;

    div {
      cursor: pointer;
      margin-left: -50%;
      margin-top: -7.5px;
      background: white;
      top: 50%;
      left: 50%;

      &,
      &::before,
      &::after {
        cursor: pointer;
        position: absolute;
        width: 40px;
        height: 5px;
        border-radius: 5px;
        background: #fff;
        transition: 0.4s;
        -webkit-transition: 0.4s;
      }

      &::before {
        content: '';
        transform: translateY(-15px);
        -webkit-transform: translateY(-15px);
      }

      &:after {
        content: '';
        transform: translateY(15px);
        -webkit-transform: translateY(15px);
      }

      & {
        ${(props) => props.bars && barsEffect.barsEffect}
      }
    }
  }

  nav {
    display: flex;
    overflow-y: hidden;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0px;
    right: 0%;
    background: #fff;
    width: 0px;
    height: 100vh;
    min-height: 450px;
    transition: width 0.5s, border-radius 0.5s;
    border-radius: 200% 0% 0% 200%;
    z-index: 3;

    a {
      text-decoration: none;
      width: 100%;
      text-align: center;
      color: var(--background-secondary);
      font-weight: 600;
      padding: 20px 5px;
      position: relative;
      border-left: 4px solid var(--title);
      margin-bottom: 1%;
      cursor: pointer;

      &:hover {
        color: #c33afc;
      }

      svg {
        position: absolute;
        top: 50%;
        left: 2%;
        transform: translateY(-50%);
      }
    }
    ${(props) => props.bars && 'width: 50%; border-radius: 0%'}
  }

  @media (max-width: 1023px) {
    nav {
      ${(props) => props.bars && 'width: 60%; border-radius: 0%'}
    }
  }

  @media (max-width: 767px) {
    > a {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      img {
        height: 25px;
      }
    }
    > div:first-of-type {
      display: none;
    }
    > div:last-of-type {
      display: block;
    }
  }

  @media (max-width: 400px) {
    nav {
      ${(props) => props.bars && 'width: 100%; border-radius: 0%'}
    }
  }

  img {
    height: 45px;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    27.64% 40.46% at 77.64% 46.62%,
    #9800f9 0%,
    #031f60 100%
  );

  > div {
    width: 100%;
    height: 100%;

    > div {
      width: 100%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      div:first-of-type {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1 {
          font-size: 60px;
          color: #fff;
          font-weight: normal;
        }

        h3 {
          margin-top: 10px;
          font-size: 25px;
          color: #c33afc;
        }

        div {
          display: flex;
          flex-direction: initial;
          justify-content: space-between;
          align-items: center;
          width: 120px;
          margin-top: 20px;

          svg {
            font-size: 30px;
            color: #fff;
            transition: color 0.4s;
          }

          svg:hover {
            color: #c33afc;
          }
        }
      }

      div:last-of-type {
        width: 50%;
        height: 60%;
        position: relative;

        img:first-of-type {
          width: 100%;
          right: 0;
          position: absolute;
          top: -50%;
        }

        img:last-of-type {
          width: 20%;
          position: absolute;
          bottom: -40%;
          left: 25%;
          animation: ${animationRocket} 5s infinite;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    > div > div {
      padding: 0 5%;

      div:first-of-type {
        h1 {
          font-size: 40px;
        }

        h3 {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    > div > div {
      padding: 0 5%;

      > div:first-of-type {
        position: absolute;
        width: 100%;
        z-index: 2;

        h1 {
          font-size: 40px;
        }

        h3 {
          font-size: 20px;
        }
      }

      div:last-of-type {
        width: 100%;
        height: 60%;
        position: relative;

        img:first-of-type {
          width: 40%;
          right: 0;
          position: absolute;
          top: -50%;
        }

        img:last-of-type {
          width: 15%;
          position: absolute;
          bottom: -40%;
          left: 25%;
          animation: ${animationRocket} 5s infinite;
        }
      }
    }
  }

  @media (max-width: 400px) {
    > div > div {
      > div:first-of-type {
        position: absolute;
        width: 100%;
        z-index: 2;

        h1 {
          font-size: 30px;
        }

        h3 {
          font-size: 15px;
        }

        div {
          width: 80px;

          svg {
            font-size: 25px;
          }
        }
      }

      div:last-of-type {
        width: 100%;
        height: 60%;
        position: relative;

        img:first-of-type {
          width: 50%;
          right: 0;
          position: absolute;
          top: -50%;
        }

        img:last-of-type {
          width: 15%;
          position: absolute;
          bottom: -40%;
          left: 25%;
          animation: ${animationRocket} 5s infinite;
        }
      }
    }
  }
`
