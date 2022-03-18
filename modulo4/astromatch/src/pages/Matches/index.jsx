import React from "react"
import { Header } from "../../components/Header"

export const Matches = props => {

    const switchPage = () => {
        props.switchPage('home')
    }

    return (
        <React.Fragment>
            <Header matches onClick={switchPage} />
        </React.Fragment>
    )
}