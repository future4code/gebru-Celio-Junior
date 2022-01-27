import React from 'react'
import {StyledContainer, StyledImg, StyledName, StyledText} from './styled-bigcard'

export default function BigCard(props) {
	return (
		<StyledContainer>
			<StyledImg src={props.src} />
			<StyledName>{props.title}</StyledName>
			<StyledText>{props.text}</StyledText>
		</StyledContainer>
	)
}
