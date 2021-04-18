import React, {Component} from 'react';

class ClickLabels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ""
        }
    }
    hover = () => {
        this.setState = {
            color: "blue"
        }
    }
    render () {
        return (
            `style = {backgroundColor: this.hover}`
        )   
    }
}

export default ClickLabels;