import styled from 'styled-components'

export const Choices = styled.section`
  height: 100px;
  width: 340px;
  border: 2px solid ${props => props.theme.secondary};
  border-top: none;
  border-end-start-radius: 50%;
  border-end-end-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 420px) {
    height: 80px;
  }
`

export const Icons = styled.div`
  margin: 0 20px;
  padding: 6px;
  cursor: pointer;
  transform: scale(0.8);
  transition: all 0.3s ease 0s;
  border: 2px solid ${props => props.theme.secondary};
  border-radius: 50%;

  &:hover {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    transform: scale(0.76);
  }
`