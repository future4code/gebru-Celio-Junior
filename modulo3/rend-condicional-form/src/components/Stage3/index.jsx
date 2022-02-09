import React from 'react'

import Header from '../Header'
import Input from '../Input'
import Select from '../Select/Select'
import Label from '../Label'

const Stage3 = () => (
    <React.Fragment>
        <Header title='Ensino Básico' />

        <Label value ='Por que não terminou um curso de graduação?' />
        <Input 
        width='40%'
        placeholder='Digite aqui...' />

        <Label value='Você fez algum curso complementar?' />
        <Select
        optionDefault='Selecionar'
        option1='Curso técnico'
        option2='Curso de inglês'
        option3='Não fiz curso complementar' />
    </React.Fragment>
)

export default Stage3