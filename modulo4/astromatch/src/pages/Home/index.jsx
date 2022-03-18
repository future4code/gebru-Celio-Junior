import React from "react"

import { Header } from "../../components/Header"
import { Profiles } from "../../components/Profiles"
import { Choices } from "../../components/Choices"


export const Home = props => {

    const switchPage = () => {
        props.switchPage('matches')
    }

    return (
        <React.Fragment>
            <Header home onClick={switchPage} />
            <Profiles />
            <Choices />
        </React.Fragment>
    )
}