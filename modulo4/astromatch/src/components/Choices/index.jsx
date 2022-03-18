import * as Styled from './style'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

export const Choices = () => {


    
    return (
        <Styled.Choices>
            <Styled.Icon danger><AiOutlineClose size={80} /></Styled.Icon>
            <Styled.Icon><AiOutlineCheck size={80} /></Styled.Icon>
        </Styled.Choices>
    )
}