import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Phan Duong Khang", age: "22" },
            { id: 2, name: "Dominic Phan", age: "20" },
            { id: 3, name: "DomPhanDev", age: "80" },
            { id: 4, name: "PhangKhanDev", age: "16" }
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })

    }

    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /> <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>

        );
    }
}

export default MyComponent;