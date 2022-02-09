import React from 'react'

import Header from '../Header'
import Input from '../Input'
import Label from '../Label'

const Stage2 = () => (
    <React.Fragment>
        <Header title='Curso Superior' />

        <Label value ='Qual o curso superior?' />
        <Input 
        width='40%'
        placeholder='Digite seu curso...' />

        <Label value='Qual unidade de ensino?' />
        <Input 
        width='40%'
        placeholder='Digite sua unidade de ensino...' />
    </React.Fragment>
)

export default Stage2