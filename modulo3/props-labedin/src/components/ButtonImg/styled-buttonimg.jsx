import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
  width: 240px;
  height: 80px;
  border: 2px solid #000;
  border-radius: 100px;
  display: flex;
  margin-bottom: 30px;
`

const StyledImg = styled.img`
  height: 50px;
  width: 50px;
  margin: 18px;
`

const StyledText = styled.h3`
  text-align: center;
  display: inline;
  margin: 26px 0 0 16px;
  font-size: 20px;
`

export {
  StyledButton,
  StyledImg,
  StyledText
}
