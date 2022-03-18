import React, { useState } from 'react'
import * as Styled from './style'

import { Home } from '../../pages/Home'
import { Matches } from '../../pages/Matches'

export const Display = () => {

    const [currentPage, setCurrentPage] = useState('home')

    const switchPage = page => {
        setCurrentPage(page)
    }

    switch (currentPage) {
        case 'home':
            return (
                <Styled.Display>
                    <Home switchPage={page => switchPage(page)} />
                </Styled.Display>
            )
        case 'matches':
            return (
                <Styled.Display>
                    <Matches switchPage={page => switchPage(page)} />
                </Styled.Display>
            )
    }
}