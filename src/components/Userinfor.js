import React from "react";

class Userinfor extends React.Component {
    state = {
        name: 'Dominic Phan',
        address: 'DT',
        age: 22
    };

    handleOnChang = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangAge = (event) => {
        this.setState({
            age: event.target.value
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
                    <label>Your name</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChang(event)}
                    />


                    <label>Your age</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Userinfor;