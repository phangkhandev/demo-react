import React from "react";
import DisplayInfor from "./DisplayInfor";
import Userinfor from "./Userinfor";

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <Userinfor></Userinfor>
                <br /> <br />
                <DisplayInfor name="Phan Duong Khang" age="18" />
            </div>

        );
    }
}

export default MyComponent;