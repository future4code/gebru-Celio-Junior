import * as Styled from './styled'

const Input = props => (
    <Styled.Input 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        width={props.width}
        height={props.height}
        onKeyDown={props.onKeyDown}
    />
)

export default Input