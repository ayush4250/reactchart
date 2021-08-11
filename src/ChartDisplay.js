import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2'
import { number } from 'prop-types';

export class ChartDisplay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const title = this.props.title;
        const description = this.props.description;
        const numbers = this.props.numbers;
        const labels = this.props.labels;
        const colors = this.props.colors;

        const settings = {
            labels : labels,
            datasets: [
                {
                    backgroundColor : colors,
                    data : numbers
                }
            ]
        }
        return (
            <div style={{width: '40%', marginLeft: '15%'}}>
                <Doughnut 
                data={settings}
                options={{
                    responsive : true,
                    mainttainAspectRatio : true,
                    title : {
                        display: true,
                        fontSize : 23,
                        text: [title,description]
                    },
                    legend:{
                        display : true,
                        position: 'left'
                    }
                }} 
                />
            </div>
        )
    }
}

export default ChartDisplay
