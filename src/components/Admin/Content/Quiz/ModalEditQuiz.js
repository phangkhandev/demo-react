import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc"
import { toast } from 'react-toastify';
import { putEditQuiz } from '../../../../services/apiService';

import _ from 'lodash';

const ModalEditQuiz = (props) => {
    const { show, setShow, dataEdit } = props;

    const handleClose = () => {
        setShow(false)
        setName("");
        setDescription("");
        setDifficulty("");
        setImage("");
        setImageReview("");
    };

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [image, setImage] = useState("");
    const [imageReview, setImageReview] = useState("");


    useEffect(() => {
        if (!_.isEmpty(dataEdit)) {
            //update state
            setName(dataEdit.name);
            setDescription(dataEdit.description);
            setDifficulty(dataEdit.difficulty);
            setImage();
            if (dataEdit.image) {
                setImageReview(`data:image/jpeg;base64,${dataEdit.image}`);
            }
        }
    }, [dataEdit]);

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setImageReview(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }
    }


    const handleEditQuiz = async () => {
        let data = await putEditQuiz(dataEdit.id, description, name, difficulty, image);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchQuiz();
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update a quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input type="type"
                                className="form-control"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <input type="type"
                                className="form-control"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Type</label>
                            <select className="form-select" onChange={(event) => setDifficulty(event.target.value)} value={difficulty}>
                                <option value="EASY">EASY</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HARD">HARD</option>
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
                            />
                        </div>
                        <div className='col-md-12 img-review'>
                            {imageReview ? <img src={imageReview} /> : <span>review image</span>}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEditQuiz()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalEditQuiz;