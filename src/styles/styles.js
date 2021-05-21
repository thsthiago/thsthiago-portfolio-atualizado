import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  h3 {
    color: #4d3bff;
  }

  > div:first-of-type {
    width: 100%;
    max-width: 1100px;
    padding: 0 4%;
    padding-top: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #4d3bff;
      cursor: pointer;
    }

    a:first-of-type svg {
      margin-right: 10px;
    }

    a:last-of-type svg {
      margin-left: 10px;
    }
  }

  > div:nth-child(3) {
    padding: 0 4%;
    text-align: center;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 30px;

    p {
      padding-top: 20px;
    }
  }

  > div:nth-child(4) {
    padding: 0 2%;
    text-align: center;
    width: 100%;
    max-width: 1000px;
    margin: 50px auto 0px;

    h3 {
      margin-bottom: 20px;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      img {
        margin: 10px;
        width: 50px;
      }
    }
  }

  > div:nth-child(5) {
    padding: 0 2%;
    text-align: center;
    width: 100%;
    max-width: 1000px;
    margin: 50px auto;

    h3 {
      margin-bottom: 20px;
    }

    a {
      width: 100%;
      display: block;
      text-align: center;
      cursor: pointer;
      color: black;

      span {
        color: #4d3bff;
      }
    }
  }

  @media (max-width: 400px) {
    > div:first-of-type a {
      font-size: 14px;
    }

    > div:nth-child(5) a {
      width: 100%;
      display: block;
      text-align: center;
      cursor: pointer;
      font-size: 13px;

      span {
        color: #4d3bff;
      }
    }
  }
`

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  max-height: 700px;
  position: relative;
  padding-top: 60px;

  button {
    position: absolute;
    max-width: 80px;
    height: 60%;
    max-height: 400px;
    bottom: 10%;
    color: #fff;
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 100px;
    }
  }

  button:first-of-type {
    background: linear-gradient(284.08deg, #031f60 -94.95%, #c33afc 178.88%);
    border-radius: 0px 30px 30px 0px;
    left: 0;
  }

  button:last-of-type {
    background: linear-gradient(284.08deg, #031f60 -94.95%, #c33afc 178.88%);
    border-radius: 30px 0px 0px 30px;
    right: 0;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
      max-height: 600px;
    }
  }

  @media (max-width: 900px) {
    button {
      width: 60px;

      svg {
        font-size: 70px;
      }
    }
  }

  @media (max-width: 767px) {
    button {
      width: 40px;
      height: 40%;
      bottom: 20%;

      svg {
        font-size: 50px;
      }
    }
  }

  @media (max-width: 430px) {
    button:first-of-type {
      border-radius: 0px 8px 8px 0px;
    }

    button:last-of-type {
      border-radius: 8px 0px 0px 8px;
    }

    button {
      width: 30px;
      height: 30%;
      bottom: 25%;

      svg {
        font-size: 30px;
      }
    }
  }
`

const animationLoader = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  border: 7px solid #fff;
  border-radius: 50%;
  border-top: 7px solid #4d3bff;
  width: 60px;
  height: 60px;
  animation: ${animationLoader} 2s linear infinite;
`
