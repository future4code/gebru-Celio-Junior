import * as Styled from './styled'
import Option from './Option'

const Select = props => (
    <Styled.Select name={props.nameSelect} onChange={props.onChange}>
        <Option value={props.valueDefault} name={props.optionDefault} />    
        <Option value={1} name={props.option1} />    
        <Option value={2} name={props.option2} />    
        <Option value={3} name={props.option3} />    
        <Option value={4} name={props.option4} />    
    </Styled.Select>
)

export default Select