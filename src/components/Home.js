import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <h3>Our first class-based component</h3>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Home
