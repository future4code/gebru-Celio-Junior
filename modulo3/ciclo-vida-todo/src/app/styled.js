import styled from 'styled-components'

export const Container = styled.div`
    width: 40%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const ItemList = styled.div`
    padding: 16px;
    border-bottom: 1px solid #bacca4;
    margin-right: 40px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
`

export const CompleteTask = styled.input`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #fff;
`