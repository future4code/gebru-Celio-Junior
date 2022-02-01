import React from 'react'
import {StyledContainer, StyledImg} from './styled-smallcard'

export default function SmallCard(props) {
  return (
    <StyledContainer>
      <StyledImg src={props.src} />
      <span><b>{props.title}: </b>{props.text}</span>
    </StyledContainer>
  )
}
