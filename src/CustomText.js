import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class CustomText extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        
    }
    
    render() {
        return (
            <Form.Group>
                <Form.Label controlId={this.props.customId}>
                    <h4>{this.props.label}</h4>
                </Form.Label>
                <Form.Control
                    type='text'
                    size='lg'
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.val}
                    onChange={this.props.inputHandler}
                    />
                    <Form.Text>
                        
                    </Form.Text>
            </Form.Group>
        )
    }
}

export default CustomText
