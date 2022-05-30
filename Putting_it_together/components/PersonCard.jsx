import React from 'react'

export class PersonCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            age: props.age
        }
    }
    count() {
        this.setState({ age: this.state.age + 1 })
    }
    render() {
        const { lastname, firstname, hairColor } = this.props
        return (
            < >
                <h1>{lastname}, {firstname}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onclick={() => this.count()}>Birthday Button for {lastname}, {firstname}</button>
            </>
        )
    }
}

export default PersonCard