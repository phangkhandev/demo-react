import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc"
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ViewUser from "./ViewUser";

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showViewUser, setShowViewUser] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});

    const [listUsers, setListUsers] = useState([])

    //componentDidmount
    useEffect(() => {
        fetchListUsers()
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    const handleClickBtnView = (user) => {
        setShowViewUser(true);
        setDataUpdate(user);
    }

    const resetUpdateUser = () => {
        setDataUpdate({});
    }

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
                    <TableUser
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        listUsers={listUsers}
                        handleClickBtnView={handleClickBtnView}
                    />

                </div>
                <ModalCreateUser
                    setShow={setShowModalCreateUser}
                    show={showModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateUser={resetUpdateUser}
                />
                <ViewUser
                    show={showViewUser}
                    setShow={setShowViewUser}
                    dataUpdate={dataUpdate}
                    resetUpdateUser={resetUpdateUser}
                />
            </div>
        </div>
    )
}

export default ManageUser;