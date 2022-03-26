import { useState, useEffect } from 'react'
import * as Styled from './styles'

import API from '../../../../services/api'

export const Profile = ({ setProps, isMatch }) => {
  const [profile, setProfile] = useState('')

  useEffect(() => {
    API.get('person').then(res => {
      setProfile(res.data.profile)
      setProps(res.data.profile.id)
    })
  }, [isMatch])

  return (
    <Styled.Card>
      <Styled.Blur src={profile.photo} />
      <Styled.Photo src={profile.photo} />
      <Styled.Name>{profile.name}</Styled.Name>
      <Styled.Age>{profile.age}</Styled.Age>
      <Styled.Bio>{profile.bio}</Styled.Bio>
    </Styled.Card>
  )
}