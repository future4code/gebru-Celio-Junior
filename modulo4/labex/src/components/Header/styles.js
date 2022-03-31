import styled, { keyframes } from 'styled-components'

const toLeftTop = keyframes`
  from {
    // transform: translate(50%);
    // padding-top: 60px;
    // left: 50%;
    // margin-left: -120px;
    // font-size: 100px;
  }
  
  to {
    // transform: translateX(0);
    // left: 0;
    align-items: flex-start;
    justify-content: flex-start;
    // font-size: 60px;
  }
`

export const ContainerTop = styled.header`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  animation: ${toLeftTop} 4s;
`

export const Header = styled.header`
  height: 80px;
`

export const Title = styled.h1`
  font-weight: 300;
  margin-left: 40px;
  padding-top: 10px;
  
  font-size: 60px;
  position: absolute;
`
