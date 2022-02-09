import React from 'react'

import Header from '../Header'
import Input from '../Input'
import Label from '../Label'
import Select from '../Select/Select'

const Stage1 = () => (
    <React.Fragment>
        <Header title='Dados Gerais' />

        <Label value ='Qual o seu nome?' />
        <Input 
        width='40%'
        placeholder='Digite seu nome...' />

        <Label value='Qual a sua idade?' />
        <Input 
        width='40%'
        placeholder='Digite sua idade...'
        type='number' />

        <Label value='Qual o seu e-mail' />
        <Input 
        width='40%'
        placeholder='Digite seu e-mail'
        type='email' />

        <Label value='Qual o seu grau de escolaridade?' />
        <Select
        optionDefault='Selecionar'
        option1='Ensino Médio Incompleto'
        option2='Ensino Médio Completo'
        option3='Ensino Superior Incompleto'
        option4='Ensino Superior Completo' />
    </React.Fragment>
)

export default Stage1