import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand>PhangKhanDev</Navbar.Brand> */}
                <NavLink className="navbar-brand" to="/"><b>App làm bài thi</b></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/users">Users</NavLink>
                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                    </Nav>

                    <Nav>
                        <button className='btn-login' onClick={() => handleLogin()}>

                            Log in
                        </button>
                        <button
                            onClick={() => handleRegister()}
                            className='btn-signup'
                        >
                            Sign up
                        </button>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item>Log in</NavDropdown.Item>
                            <NavDropdown.Item>Log out</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;