import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { postChangPassword } from '../../services/apiService';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

const Password = (props) => {

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewP, setConfirmNewP] = useState("");

    const handleUpdatePassword = async () => {
        let data = await postChangPassword(password, newPassword);
        setPassword("");
        setNewPassword("");
        setConfirmNewP("");
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
                <div className="col-md-12">
                    <label className="form-label">Mật khẩu củ</label>
                    <input type="text"
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div className="col-md-12">
                    <label className="form-label">Mật khẩu mới</label>
                    <input type="text"
                        className="form-control"
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                    />
                </div>

                <div className="col-md-12">
                    <label className="form-label">Xác nhận Mật khẩu mới</label>
                    <input type="text"
                        className="form-control"
                        value={confirmNewP}
                        onChange={(event) => setConfirmNewP(event.target.value)}
                    />
                </div>

            </form>
            <br></br>
            <Button variant="primary" onClick={() => handleUpdatePassword()}>
                Cập nhật
            </Button>
        </>
    );
}


export default Password;