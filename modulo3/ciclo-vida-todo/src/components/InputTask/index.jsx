import * as Styled from './styled'
import Label from '../Label'
import Input from '../Input'

const InputTask = props => (
    <Styled.InputTask>
        <Label label='Insert task' />
        <Input
        value={props.value}
        width='97%'
        height='30px'
        onChange={props.onChange}
        onKeyDown={props.onKeyDown} />
    </Styled.InputTask>
)

export default InputTask