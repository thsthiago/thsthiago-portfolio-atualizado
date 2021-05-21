import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 150px;
  margin-bottom: 50px;

  h2 {
    font-size: clamp(30px, 3.5vw, 40px);
    color: #4d3bff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 30px auto;
    font-weight: normal;
  }

  > div {
    width: 100%;
    padding: 160px 0px;
    padding-bottom: 50px;

    > div {
      width: 100%;
      max-width: 1080px;
      padding: 0 2%;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }
`
