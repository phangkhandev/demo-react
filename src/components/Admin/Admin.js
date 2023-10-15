import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Language from "../Header/Language";
import { useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import Profile from "../Header/Profile";
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from "../../redux/action/userAction";
import { logout } from "../../services/apiService";
import { toast } from 'react-toastify';


const Admin = (props) => {
    const [isShowModalProfile, setIsShowModalProfile] = useState(false);
    const [collapsed, setcollapsed] = useState(false);
    const account = useSelector(state => state.user.account);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const handleLogOut = async () => {
        let res = await logout(account.access_token, account.refresh_token);
        if (res && res.EC === 0) {
            dispatch(doLogout());
            navigate('/login');
        } else {
            toast.error(res.EM);
        }
    }
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>

            <div className="admin-content">
                <div className="admin-header">
                    <span onClick={() => setcollapsed(!collapsed)}>
                        <FaBars className="leftside" />
                    </span>

                    <div className="rightside">
                        <NavDropdown title="Cài đặt" id="basic-nav-dropdown" style={{ marginRight: "40px" }}>
                            <NavDropdown.Item onClick={() => setIsShowModalProfile(true)}>Thông tin cá nhân</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleLogOut()}>Đăng xuất</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
                <div className="admin-main">
                    <PerfectScrollbar>
                        <Outlet />
                    </PerfectScrollbar>
                </div>
            </div>

            <Profile
                show={isShowModalProfile}
                setShow={setIsShowModalProfile}
            />


        </div >

    )
}

export default Admin;