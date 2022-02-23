import * as Styled from './styled'

const Tasks = props => (
    <Styled.Tasks>
        <Styled.List>
            {props.listItem}
        </Styled.List>
    </Styled.Tasks>
)

export default Tasks