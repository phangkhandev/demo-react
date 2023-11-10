import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarContent,
} from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import './Admin.scss';

import { FaGem } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
import { FaTrafficLight } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';


const SideBar = (props) => {
    const { collapsed, toggled, handleToggleSidebar } = props;
    const navigate = useNavigate();
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <div className='admin-back' onClick={() => navigate('/')}>
                            <FaTrafficLight color='#00bfff' size={'2em'} />{`  `}
                            <span>Ôn Thi Bằng Lái Xe</span>
                        </div>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={< MdDashboard />}
                        >
                            <Link to="/admin">Dashboard</Link>
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            icon={<FaGem />}
                            title="Features"
                        >
                            <MenuItem> <Link to="manage-users">Quản lý Users</Link></MenuItem>
                            <MenuItem> <Link to="manage-quizzes">Quản lý bài Quiz</Link></MenuItem>
                            <MenuItem> <Link to="manage-questions">Quản lý câu hỏi</Link></MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </>
    )
}

export default SideBar;