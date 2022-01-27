import React from 'react'
import {StyledButton, StyledImg, StyledText} from './styled-buttonimg'

export default function ButtonImg(props) {
  return (
      <StyledButton href={props.href}>
        <StyledImg src={props.src} />
        <StyledText>{props.text}</StyledText>
      </StyledButton>
  )
}
