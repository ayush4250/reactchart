import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'


export class ColorPicker extends Component {
    render() {
        return (
            <Form.Group controlId='currentColor'>
                <Form.Label>
                    <h4>Color Picker</h4>
                </Form.Label> 
                <Form.Control 
                    as='select'
                    name='currentColor'
                    value={this.props.val}
                    onChange={this.props.inputHandler}
                >
                    <option value='Orange'></option>
                    <option value='green'></option>
                    <option value='red'></option>
                    <option value='blue'></option>
                    <option value='purple'></option>
                    <option value='yellow'></option>
                    <option value='pink'></option>
                </Form.Control>
                <Form.Text>
                    Select a color
                </Form.Text>
            </Form.Group>
        )
    }
}

export default ColorPicker
