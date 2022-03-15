import React from 'react'
import * as Styled from './style'

import Input from '../Input'
import Button from '../Button'

class Card extends React.Component {

    // Ao adicionar uma playlist ou música o scroll do card sempre irá focar no que está mais abaixo
    scrollToBottom = () => {
        this.scrollEnd.scrollIntoView({ behavior: 'smooth' })
    }

    componentDidUpdate() {
        if (this.props.preventScroll) {
            this.scrollToBottom()
        }
    }

    render() {

        return (
            <Styled.Card>
                <Styled.Title>
                    {this.props.title}
                </Styled.Title>

                {this.props.inputOne ? <Input placeholder={this.props.placeholder1} onChange={this.props.onChange1} value={this.props.value1} onKeyDown={this.props.onKeyDown} /> : ''}
                {this.props.inputTwo ? <Input placeholder={this.props.placeholder2} onChange={this.props.onChange2} value={this.props.value2} onKeyDown={this.props.onKeyDown} /> : ''}
                {this.props.inputThree ? <Input placeholder={this.props.placeholder3} onChange={this.props.onChange3} value={this.props.value3} onKeyDown={this.props.onKeyDown} /> : ''}
                {this.props.button ? <Button onClick={this.props.onClick} /> : ''}

                {this.props.content}

                <Styled.ScrollBottom ref={el => (this.scrollEnd = el)}></Styled.ScrollBottom>
            </Styled.Card>
        )
    }
}

export default Card