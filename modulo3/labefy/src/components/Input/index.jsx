import * as Styled from './style'

const Input = props => (
    <Styled.Input placeholder={props.placeholder} 
                onChange={props.onChange}
                value={props.value}
                onKeyDown={props.onKeyDown} />
)

export default Input