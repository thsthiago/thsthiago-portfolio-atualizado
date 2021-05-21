import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  > div {
    width: 100%;
    height: 100%;
    max-width: 1100px;
    padding: 0 2%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 50%;
    }

    div {
      padding-left: 50px;

      h1 {
        text-align: center;
        color: #4d3bff;
        padding-bottom: 80px;
        font-size: 40px;
        font-weight: normal;
      }

      p {
        font-size: 20px;

        span {
          display: block;

          & + span {
            margin-top: 20px;
          }
        }

        strong {
          font-weight: normal;
          color: #4d3bff;
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding: 30px;
    height: auto;

    > div {
      flex-direction: column-reverse;

      img {
        width: 70%;
      }

      div {
        padding-left: 0px;
        width: 90%;
        margin-bottom: 70px;

        h1 {
          padding-bottom: 50px;
        }
      }
    }
  }

  @media (max-width: 400px) {
    > div {
      img {
        width: 80%;
      }

      div {
        padding-left: 0px;
        width: 90%;
        margin-bottom: 70px;

        h1 {
          font-size: 30px;
          padding-bottom: 50px;
        }

        p {
          font-size: 16px;
        }
      }
    }
  }
`
