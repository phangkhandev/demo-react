import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../../services/apiService';
import { toast } from 'react-toastify';
import { doLogout } from '../../redux/action/userAction';
import Language from './Language';
import Profile from './Profile';
import { useState } from 'react';
import './Header.scss'

const Header = () => {

    const account = useSelector(state => state.user.account);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const [isShowModalProfile, setIsShowModalProfile] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    const handleRegister = () => {
        navigate('/register');
    }

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
        <div style={{ backgroundColor: "green" }}>
            <Navbar bg="light" expand="lg">
                <Container className='Containerscss'>
                    {/* <Navbar.Brand>PhangKhanDev</Navbar.Brand> */}
                    <NavLink className="navbar-brand" to="/"><b style={{ color: "white" }}>Thi Bằng Lái Xe</b></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ fontWeight: "600" }}>

                        <Nav className="me-auto">
                            <NavLink className="nav-link" to="/">Trang Chủ</NavLink>
                            <NavLink className="nav-link" to="/baithi">Bài Thi</NavLink>
                            <NavLink className="nav-link" to="/bienbao">Chủ đề Biển Báo</NavLink>
                            <NavLink className="nav-link" to="/sahinh">Chủ đề Sa Hình</NavLink>
                            <NavLink className="nav-link" to="/vanhoa">Văn hoá giao thông</NavLink>
                            <NavLink className="nav-link" to="/diemliet">Câu hỏi điểm liệt</NavLink>
                        </Nav>


                        {/* {account && account.role === "ADMIN" ?
                            <Nav className="me-auto">
                                <>
                                    <NavLink className="nav-link" to="/">Trang Chủ</NavLink>
                                    <NavLink className="nav-link" to="/baithi">Bài Thi</NavLink>
                                    <NavLink className="nav-link" to="/bienbao">Chủ đề Biển Báo</NavLink>
                                    <NavLink className="nav-link" to="/sahinh">Chủ đề Sa Hình</NavLink>
                                    <NavLink className="nav-link" to="/vanhoa">Văn hoá giao thông</NavLink>
                                    <NavLink className="nav-link" to="/diemliet">Câu hỏi điểm liệt</NavLink>
                                </>
                            </Nav>
                            :
                            <Nav className="me-auto">
                                <NavLink className="nav-link" to="/">Trang Chủ</NavLink>
                                <NavLink className="nav-link" to="/baithi">Bài Thi</NavLink>
                                <NavLink className="nav-link" to="/bienbao">Chủ đề Biển Báo</NavLink>
                                <NavLink className="nav-link" to="/sahinh">Chủ đề Sa Hình</NavLink>
                                <NavLink className="nav-link" to="/vanhoa">Văn hoá giao thông</NavLink>
                                <NavLink className="nav-link" to="/diemliet">Câu hỏi điểm liệt</NavLink>
                            </Nav>
                        } */}

                        <Nav>
                            {isAuthenticated === false ?

                                <>
                                    <button className='btn-login' onClick={() => handleLogin()}>
                                        Đăng nhập
                                    </button>
                                    <button className='btn-signup' onClick={() => handleRegister()}>
                                        Đăng ký
                                    </button>
                                </>
                                :
                                <>
                                    {account && account.role === "USER" ?
                                        <NavDropdown title="Cài đặt" id="basic-nav-dropdown" style={{ marginRight: "40px" }}>
                                            <NavDropdown.Item onClick={() => setIsShowModalProfile(true)}>Thông tin cá nhân</NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => handleLogOut()}>Đăng xuất</NavDropdown.Item>
                                        </NavDropdown>
                                        :
                                        <>
                                            <NavDropdown title="Cài đặt" id="basic-nav-dropdown" style={{ marginRight: "40px" }}>
                                                <NavDropdown.Item onClick={() => setIsShowModalProfile(true)}>Thông tin cá nhân</NavDropdown.Item>
                                                <NavDropdown.Item onClick={() => handleLogOut()}>Đăng xuất</NavDropdown.Item>
                                            </NavDropdown>
                                            <div style={{ fontWeight: "800" }}><NavLink className="nav-link" to="/admin">Admin</NavLink></div>
                                        </>


                                    }


                                </>

                            }




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Profile
                show={isShowModalProfile}
                setShow={setIsShowModalProfile}
            />
        </div>

    );
}

export default Header;