import * as Styled from './styles'

import API from '../../../../services/api'

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { MySwal } from '../../../../config/.sweetalert2'

export const Choices = ({ propsId, isMatch, setIsMatch }) => {
  const userChoice = choice => {
    const body = {
      id: propsId,
      choice: choice,
    }

    API.post('choose-person', body).then(res => {
      setIsMatch(!isMatch)

      if (res.data.isMatch) {
        MySwal.fire({
          title: "It's Match!!!",
          background: 'rgba(230, 230, 230, 0.8)',
          confirmButtonText: 'Yessss!!',
          confirmButtonColor: 'rgba(21, 22, 32, 0.9)',
          width: '400px',
        })
      }
    })
  }

  return (
    <Styled.Choices>
      <Styled.Icons onClick={() => userChoice(false)}>
        <AiOutlineClose size={60} />
      </Styled.Icons>

      <Styled.Icons onClick={() => userChoice(true)}>
        <AiOutlineCheck size={60} />
      </Styled.Icons>
    </Styled.Choices>
  )
}
