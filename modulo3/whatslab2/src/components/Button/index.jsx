import * as Styled from './styled'

const Button = props => (
    <Styled.Button 
    onClick={props.onClick}
    width={props.width}
    height={props.height} >
        {props.name}
    </Styled.Button>
)

export default Button