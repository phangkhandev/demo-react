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

    handleOnChang = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (

            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChang(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>

        );
    }
}

export default MyComponent;