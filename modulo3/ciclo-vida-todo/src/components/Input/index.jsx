import * as Styled from './styled'

const Input = props => (
    <Styled.Input 
    value={props.value}
    placeholder={props.placeholder}
    width={props.width}
    height={props.height}
    onChange={props.onChange}
    onKeyDown={props.onKeyDown} />
)

export default Input