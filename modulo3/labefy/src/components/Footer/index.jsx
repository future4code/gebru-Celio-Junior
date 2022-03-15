import * as Styled from './style'

const Footer = props => (
    <Styled.Footer>
        <Styled.Title>{props.title}</Styled.Title>
        <Styled.ItemLeft>{props.itemLeft}</Styled.ItemLeft>
        <Styled.ItemCenter>{props.itemCenter}</Styled.ItemCenter>
        <Styled.ItemRight>{props.itemRight}</Styled.ItemRight>
    </Styled.Footer>
)

export default Footer