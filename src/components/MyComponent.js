// có 2 cách định nghĩa component
// 1. class component
// 2. func component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Dominic Phan',
        address: 'DT',
        age: 22
    };

    handleClick(event) {

        this.setState({
            name: 'Phan Duong Khang',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }


    render() {
        return (

            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>

        );
    }
}

export default MyComponent;