import React from "react";
import DisplayInfor from "./DisplayInfor";
import Userinfor from "./Userinfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Phan Duong Khang", age: "22" },
            { id: 2, name: "Dominic Phan", age: "23" },
            { id: 3, name: "DomPhanDev", age: "24" },
            { id: 4, name: "PhangKhanDev", age: "25" }
        ]
    }

    render() {
        return (
            <div>
                <Userinfor />
                <br /> <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>

        );
    }
}

export default MyComponent;