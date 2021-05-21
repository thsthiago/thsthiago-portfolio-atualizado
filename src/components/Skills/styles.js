import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  background: #031f60;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  h1 {
    color: #fff;
    text-align: center;
    margin-bottom: 50px;
  }

  > img:first-of-type,
  > img:last-of-type {
    position: absolute;
    height: 200px;
    width: 100%;
  }

  > img:first-of-type {
    top: calc(0px + -200px);
  }

  > img:last-of-type {
    bottom: calc(0px + -200px);
    transform: rotate(-180deg);
  }

  > div {
    width: 100%;
    max-width: 1080px;
    padding: 0 2%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    > img:first-of-type,
    > img:last-of-type {
      position: absolute;
      height: 130px;
      width: 100%;
    }

    > img:first-of-type {
      top: calc(0px + -130px);
    }

    > img:last-of-type {
      bottom: calc(0px + -130px);
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 30px;
    }
  }
`
