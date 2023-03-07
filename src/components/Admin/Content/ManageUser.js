import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc"
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>
            <div className="users-content">
                <div className="btn-add-new">

                    <button className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus />add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser />

                </div>
                <ModalCreateUser
                    setShow={setShowModalCreateUser}
                    show={showModalCreateUser} />
            </div>
        </div>
    )
}

export default ManageUser;