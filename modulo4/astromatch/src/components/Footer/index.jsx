import * as Styled from './styles'

import API from '../../services/api'

import { Button } from '../Button'
import { MySwal } from '../../config/.sweetalert2'

export const Footer = () => {
  const clearMatches = () => {
    MySwal.fire({
      title: 'Deseja resetar os matches?',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',
      background: 'rgba(230, 230, 230, 0.8)',
      confirmButtonColor: 'rgba(228, 67, 67, 0.9)',
      denyButtonColor: 'rgba(21, 22, 32, 0.9)',
      color: 'rgba(21, 22, 32, 0.9)',
    }).then(result => {
      if (result.isConfirmed) {
        API.put('clear')
        MySwal.fire({
          title: 'Matches Resetados!',
          color: 'rgba(21, 22, 32, 0.9)',
          background: 'rgba(230, 230, 230, 0.8)',
          confirmButtonColor: 'rgba(21, 22, 32, 0.9)',
        })
      } else {
        MySwal.fire({
          title: 'Operação Cancelada!',
          color: 'rgba(21, 22, 32, 0.9)',
          background: 'rgba(230, 230, 230, 0.8)',
          confirmButtonColor: 'rgba(21, 22, 32, 0.9)',
        })
      }
    })
  }

  return (
    <Styled.Footer>
      <Styled.Text>❤❤❤</Styled.Text>
      <Styled.ClearButton onClick={clearMatches}>
        <Button>
          <span>Limpar Matches</span>
        </Button>
      </Styled.ClearButton>
    </Styled.Footer>
  )
}
