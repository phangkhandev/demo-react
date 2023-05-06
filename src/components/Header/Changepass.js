import React, { useEffect, useState } from 'react';
import { FcPlus } from "react-icons/fc"
import { toast } from 'react-toastify';
import { postUpdateProfile } from '../../services/apiService'
import _ from 'lodash';

import Button from 'react-bootstrap/Button';

const Password = (props) => {


    const handleUpdateProfilePassword = async () => {

    }

    return (
        <>

            <form className="row g-3">
                <div className="col-md-12">
                    <label className="form-label">Current password</label>
                    <input type="text"
                        className="form-control"

                    />
                </div>

                <div className="col-md-12">
                    <label className="form-label">New password</label>
                    <input type="email"
                        className="form-control"

                    />
                </div>

                <div className="col-md-12">
                    <label className="form-label">Confirm password</label>
                    <input type="email"
                        className="form-control mb-2"

                    />
                </div>
            </form>
            <Button variant="primary" onClick={() => handleUpdateProfilePassword()}>
                Update
            </Button>
        </>
    );
}


export default Password;