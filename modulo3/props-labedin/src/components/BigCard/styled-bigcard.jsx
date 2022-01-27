import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr 1fr;
	align-items: center;
	height: 200px;
	width: 60%;
	border: 2px solid #000;
	padding: 20px;
	margin-bottom: 30px;
`

const StyledImg = styled.img`
	grid-column: 1;
	grid-row: 1 / 3;
	height: 100px;
	justify-self: right;
	margin-right: 40px;
	border-radius: 50%;
`

const StyledName = styled.h2`
	grid-column: 2;
	grid-row: 1;
	word-break: break-all;
	width: 100%;
	font-size: 26px;
`

const StyledText = styled.p`
	grid-column: 2;
	grid-row: 2;
	margin-bottom: 30px;
	font-size: 18px;
`

export {
	StyledContainer,
	StyledImg,
	StyledName,
	StyledText
}
