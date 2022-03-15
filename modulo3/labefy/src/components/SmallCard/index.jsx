import * as Styled from './style'

const SmallCard = props => (
    <Styled.CardList light={props.light} onMouseDown={props.onClick}>
        <Styled.MainName>{props.mainName}</Styled.MainName>
        <Styled.SecondaryName>{props.secondaryName}</Styled.SecondaryName>
    </Styled.CardList>
)

export default SmallCard