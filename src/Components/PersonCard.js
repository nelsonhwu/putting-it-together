import React, { Component } from 'react'

export class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    addAge = () => {
        this.setState({ 
            age: this.state.age +1
        });
    }

    render() {
        const {firstName, lastName, hairColor } = this.props;
        const {age} = this.state;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.addAge }>Birthday Button for {firstName} {lastName} </button>
            </div>
        )
    }
}

export default PersonCard