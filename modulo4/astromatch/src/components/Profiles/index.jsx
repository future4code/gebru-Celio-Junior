import axios from 'axios'
import React, { useState, useEffect } from 'react'

import * as Styled from './style'

const student = 'celio'
const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${student}`

export const Profiles = props => {

    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        axios.get(`${url}/person`)
            .then(res => {
                console.log(res.data.profile)
                setProfiles(res.data.profile)
            })
    }, [])


    return (
        <Styled.Profiles>
            {/* <Styled.Image src={profiles.photo}/> */}
        </Styled.Profiles>
    )
}