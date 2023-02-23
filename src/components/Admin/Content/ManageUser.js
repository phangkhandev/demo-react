import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                ManageUser
            </div>
            <div className="users-content">
                <div className="">
                    <button>add new users</button>
                </div>
                <div className="">
                    table users
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}

export default ManageUser;