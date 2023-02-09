// có 2 cách định nghĩa component
// 1. class component
// 2. func component

import React from "react";

class MyComponent extends React.Component {
    //JSX 
    render() {
        return (

            <div> my first component

                {Math.random()}
            </div>

        );
    }
}

export default MyComponent;