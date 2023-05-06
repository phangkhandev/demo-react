import React, { useEffect, useState } from 'react';
import { FcPlus } from "react-icons/fc"
import { toast } from 'react-toastify';
import { postUpdateProfile } from '../../services/apiService'
import _ from 'lodash';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

const Yourinfor = (props) => {
    const account = useSelector(state => state.user.account);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [imageReview, setImageReview] = useState("");

    useEffect(() => {
        if (account && !_.isEmpty(account)) {
            //update state
            setEmail(account.email);
            setUsername(account.username);
            setRole(account.role);
            setImage();
            if (account.image) {
                setImageReview(`data:image/jpeg;base64,${account.image}`);
            }


        }
    }, [account]);

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImageReview(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }
    }

    const handleUpdateProfile = async () => {
        let data = await postUpdateProfile(username, image);
        console.log("check api: ", data)
        if (data && data.EC === 0) {
            toast.success(data.EM);
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <>

            <form className="row g-3">
                <div className="col-md-4">
                    <label className="form-label">Username</label>
                    <input type="text"
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <input type="email"
                        className="form-control"
                        value={email}
                        disabled
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Role</label>
                    <select className="form-select" onChange={(event) => setRole(event.target.value)} value={role} disabled>
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>

                    </select>
                </div>
                <div className='col-md-12'>
                    <label className="form-label label-upload " htmlFor="labelUpload">
                        <FcPlus /> Uplooad file Image
                    </label>
                    <input type="file"
                        hidden
                        id="labelUpload"
                        onChange={(event) => handleUploadImage(event)}
                    // value={role}
                    />
                </div>
                <div className='col-md-12 img-review mb-2'>
                    {imageReview ? <img src={imageReview} /> : <span>review image</span>}
                </div>
            </form>
            <Button variant="primary" onClick={() => handleUpdateProfile()}>
                Update
            </Button>
        </>
    );
}


export default Yourinfor;