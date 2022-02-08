import * as Styled from './styled'
import Input from '../Input'
import Button from '../Button'

const UserInput = props => (
    <Styled.UserInputBox>
        <Input 
        placeholder='Username'
        width='20%'
        height='100%'
        value={props.valueUsername}
        onChange={props.onChangeUsername} />
        <Input 
        placeholder='Message'
        width='70%'
        height='100%'
        value={props.valueMessage}
        onChange={props.onChangeMessage}
        onKeyDown={props.onKeyDown} />
        <Button 
        name='Send'
        width='10%;'
        height='100%'
        onClick={props.onClickButton} />
    </Styled.UserInputBox>
)

export default UserInput