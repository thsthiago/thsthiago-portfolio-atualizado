import styled from 'styled-components'

export const Container = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 130px;

  > div:first-of-type {
    height: 170px;
    width: 100%;
    background: url('${(props) => props.img}') no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px 0px;
    position: relative;
    z-index: 2;
  }

  > div:last-of-type {
    background: #031f60;
    width: 100%;
    text-align: center;
    padding: 30px 0px 70px;
    border-radius: 0px 0px 20px 0px;
    position: absolute;
    transition: top 0.6s, padding 0.6s;
    top: 10%;

    strong {
      color: #fff;
    }

    h3 {
      margin-top: 20px;
      color: #fff;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      transition: bottom 0.6s;
    }

    button {
      background: linear-gradient(88.4deg, #9800f9 -7.71%, #302caf 56.51%);
      width: 149px;
      height: 35px;
      border-radius: 3px;
      font-weight: bold;
      margin-top: 20px;

      a {
        color: #fff;
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    div {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;

      img {
        width: 40px;
      }
    }
  }

  &:hover {
    z-index: 10;

    > div:last-of-type {
      padding: 70px 0px 20px;
      top: 90%;

      h3 {
        bottom: 75%;
      }
    }
  }
`
