import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';


//stateless vs stateful
// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>>> call me render ')
//         const { listUsers } = this.props;
//         return (
//             <div className="display-ifnor-container">

//                 {true &&
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 22 ? "red" : "green"}>
//                                     <div>My name's {user.name}</div>
//                                     <div>My age's {user.age}</div>
//                                     <hr />
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    console.log('>>> call me render')

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You delete all the users')
            }
            console.log('>>> call me useEffect')

        }, [listUsers]
    );

    useEffect(
        () => {
            if (listUsers.length > 5) {
                alert('No No No')
            }
            console.log('>>> call me useEffect')

        }, [listUsers]
    );

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide List User" : "Show List User"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 22 ? "red" : "green"}>
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age}</div>
                                <hr />
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )

}

export default DisplayInfor;