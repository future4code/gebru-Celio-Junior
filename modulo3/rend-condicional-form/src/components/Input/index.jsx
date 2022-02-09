import * as Styled from './styled'

const Input = props => (
    <Styled.Input 
        placeholder={props.placeholder}
        value={props.value}
        width={props.width}
        type={props.type}
    />
)

export default Input