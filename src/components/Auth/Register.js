import { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        //validate

        //submit apis
        let data = await postRegister(email, password, username);
        console.log(">>>check data", data)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login');
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <div className="register-container">
            <div className='header'>
                <span>Already have an account?</span>
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
            <div className='title col-3 mx-auto'>
                App làm bài thi
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
                    />
                </div>
                <div className='form-group pass-group'>
                    <label>Password (*)</label>
                    <input
                        type={isShowPassword ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
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
                    />
                </div>

                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                    >
                        Register
                    </button>
                    <div className='text-center'>
                        <span
                            className='back'
                            onClick={() => navigate('/')}
                        >
                            &#60;&#60; Go Back Home
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;