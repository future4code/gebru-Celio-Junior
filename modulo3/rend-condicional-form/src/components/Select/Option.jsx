import * as Styled from './styled'

const Option = props => (
    <Styled.Option value={props.value}>
        {props.name}
    </Styled.Option>
)

export default Option