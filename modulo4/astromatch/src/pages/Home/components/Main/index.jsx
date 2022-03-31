import { useState } from 'react'
import * as Styled from './styles'

import { Choices } from '../Choices'
import { Profile } from '../Profile'

export const MainHome = () => {
  const [profileId, setProfileId] = useState(null)
  const [isMatch, setIsMatch] = useState(false)

  return (
    <Styled.Container>
      <Profile setProps={setProfileId} isMatch={isMatch} />
      <Choices
        propsId={profileId}
        isMatch={isMatch}
        setIsMatch={setIsMatch}
      />
    </Styled.Container>
  )
}