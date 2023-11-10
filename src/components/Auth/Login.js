import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner10 } from 'react-icons/im';
import Language from '../Header/Language';


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoadng, setIsLoading] = useState(false);



    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async () => {
        //validate
        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            toast.error('Invalid pmail!')
            return;
        }

        if (!password) {
            toast.error('Invalid password')
            return;
        }
        setIsLoading(true);
        //submit apis
        let data = await postLogin(email, password);
        if (data && data.EC === 0) {
            dispatch(doLogin(data))
            toast.success(data.EM);
            setIsLoading(false);
            navigate('/');
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
            setIsLoading(false);
        }
    }

    const handleKeyDown = (event) => {
        if (event && event.keyCode === 13) {
            handleLogin();
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Bạn vẫn chưa có tài khoản?</span>
                <button onClick={() => navigate('/register')}>Đăng ký</button>

            </div>
            <div className='title col-3 mx-auto'>
                Ôn Thi Bằng Lái Xe
            </div>
            <div className='welcom col-3 mx-auto'>
                Xin chào, bạn là ai?
            </div>
            <div className='content-form col-3 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                </div>
                <div className='form-group pass-group'>
                    <label>Mật khẩu</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                    {isShowPassword ?
                        <span
                            className='icons-eye'
                            onClick={() => setIsShowPassword(false)}
                        >
                            <VscEye />
                        </span>
                        :
                        <span
                            className='icons-eye'
                            onClick={() => setIsShowPassword(true)}
                        >
                            <VscEyeClosed />
                        </span>
                    }
                </div>
                <span className='forgot-password'>Quên mật khẩu?</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                        disabled={isLoadng}
                    >
                        {isLoadng === true && <ImSpinner10 className='loader-icon' />}
                        <span> Đăng nhập </span>
                    </button>
                    <div className='text-center'>
                        <span
                            className='back'
                            onClick={() => navigate('/')}
                        >
                            &#60;&#60; Trang Chủ
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;