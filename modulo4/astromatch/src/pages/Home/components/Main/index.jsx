import { useState } from 'react'
import * as Styled from './styles'

import { Choices } from '../Choices'
import { Profile } from '../Profile'

export const MainHome = () => {
  const [profileId, setProfileId] = useState(null)
  const [isMatch, setIsMatch] = useState(false)

  return (
    <Styled.Container>
      <Profile setProps={setProfileId} itsMatch={isMatch} />
      <Choices
        propsId={profileId}
        itsMatch={isMatch}
        setItsMatch={setIsMatch}
      />
    </Styled.Container>
  )
}