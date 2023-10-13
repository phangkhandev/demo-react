import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { ImSpinner10 } from 'react-icons/im';
import Language from '../Header/Language';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();
    const [isLoadng, setIsLoading] = useState(false);


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
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
        let data = await postRegister(email, password, username);
        console.log(">>>check data", data)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            setIsLoading(false);
            navigate('/login');
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM)
            setIsLoading(false);
        }
    }

    const handleKeyDown = (event) => {
        if (event && event.keyCode === 13) {
            handleRegister();
        }
    }

    return (
        <div className="register-container">
            <div className='header'>
                <span>Already have an account?</span>
                <button onClick={() => navigate('/login')}>Login</button>
                <Language />
            </div>
            <div className='title col-3 mx-auto'>
                Thi Bằng Lái Xe
            </div>
            <div className='welcom col-3 mx-auto'>
                start your journey?
            </div>
            <div className='content-form col-3 mx-auto'>
                <div className='form-group'>
                    <label>Email (*)</label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                </div>
                <div className='form-group pass-group'>
                    <label>Password (*)</label>
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

                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type={"text"}
                        className="form-control"
                        onChange={(event) => setUsername(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                </div>

                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                        disabled={isLoadng}
                    >
                        {isLoadng === true && <ImSpinner10 className='loader-icon' />}
                        <span> Register </span>
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

export default Register;