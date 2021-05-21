import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2%;
  padding-bottom: 100px;

  > h2 {
    text-align: center;
    color: #4d3bff;
    font-size: 50px;
    font-weight: normal;
    margin-bottom: 50px;
  }

  > div {
    display: flex;
    align-items: center;
    overflow-x: hidden;

    div {
      width: 50%;

      > div {
        width: 70%;
        margin: 0 auto;

        h2 {
          font-size: clamp(22px, 3vw, 30px);
          font-weight: 500;
          color: #4d3bff;
        }

        a {
          margin-top: 10px;
          font-weight: 500;
          color: var(--text);

          span {
            color: #4d3bff;
            font-weight: 500;
          }
        }

        div {
          width: 280px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;

          a {
            margin: 0 20px;
            font-size: 30px;
          }

          a:nth-of-type(1) {
            color: #0a66c2;
          }

          a:nth-of-type(3) {
            color: #00e676;
          }
        }
      }
    }

    img {
      width: 50%;
    }
  }

  @media (max-width: 767px) {
    padding: 30px;

    > div {
      flex-direction: column;

      > div {
        width: 70%;
        margin-bottom: 50px;

        h2 {
          font-size: 18px;
          font-weight: 500;
          color: #4d3bff;
        }

        a {
          margin-top: 10px;
          font-weight: 500;
          color: var(--text);

          span {
            color: #4d3bff;
            font-weight: 500;
          }
        }
      }

      img {
        width: 70%;
      }
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 30px;
      font-weight: normal;
    }

    > div {
      flex-direction: column;

      div > div {
        width: 100%;
        margin-bottom: 50px;

        div {
          width: 140px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;

          a {
            margin: 0 20px;
            font-size: 30px;
          }

          a:nth-of-type(1) {
            color: #0a66c2;
          }

          a:nth-of-type(3) {
            color: #00e676;
          }
        }
      }

      img {
        width: 70%;
      }
    }
  }
`
