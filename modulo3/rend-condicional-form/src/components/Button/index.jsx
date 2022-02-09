import * as Styled from './styled'

const Button = props => (
    <Styled.Button 
    onClick={props.onClick}
    width={props.width}
    height={props.height} >
        {props.value}
    </Styled.Button>
)

export default Button