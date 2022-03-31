import { useContext } from 'react'
import * as Styled from './styles'

import Moon from '../../assets/img/moon.png'
import Sun from '../../assets/img/sun.png'

import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const Header = props => {
  const [theme, setTheme] = useContext(Context)

  const switchTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  return (
    <Styled.Header>
      <Styled.Title>Astromatch</Styled.Title>

      <Styled.SwitchScreen>
        <Button>
          <Link to={props.to}>{props.button}</Link>
        </Button>
      </Styled.SwitchScreen>
      <Styled.IconThemes
        src={theme === 'light' ? Sun : Moon}
        onClick={switchTheme}
      />
    </Styled.Header>
  )
}
