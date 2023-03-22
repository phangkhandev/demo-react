import './ManageQuiz.scss'
import Select from 'react-select';
import { FcPlus } from "react-icons/fc"
import { useState } from 'react';
import { postCreateNewQuiz } from '../../../../services/apiService';
import { toast } from 'react-toastify';

const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' },
];

const ManageQuiz = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState(null);

    const handleChangFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            // setImageReview(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }
    }

    const handleSubmitQuiz = async () => {
        //validate
        if (!name || !description || !type) {
            toast.error('name/Description/Type is required');
            return;
        }


        let res = await postCreateNewQuiz(description, name, type?.value, image);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            setName('');
            setDescription('');
            setType('');
            setImage(null);
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    }

    return (
        <div className='quiz-container'>
            <div className="title">
                Manage quiz
            </div>
            <hr />
            <div className="add-new">
                <fieldset className="border rounded-3 p-3">
                    <legend className="float-none w-auto px-3">Add new Quiz</legend>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <label>Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            class="form-control"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <label>Description</label>
                    </div>
                    <div className='my-3'>
                        <Select
                            value={type}
                            defaultValue={type}
                            onChange={setType}
                            options={options}
                            placeholder="Quiz type..."
                        />
                    </div>
                    <div className='more-actions form-group'>
                        <label className='mb-1'> <FcPlus />Upload Image </label>
                        <input
                            type="file"
                            className='form-control'
                            onChange={(event) => handleChangFile(event)}
                        />
                    </div>
                    <div className='mt-3'>
                        <button
                            className='btn btn-outline-primary'
                            onClick={() => handleSubmitQuiz()}
                        >
                            Save
                        </button>
                    </div>
                </fieldset>

            </div>
            <div className="list-detail">
                table
            </div>
        </div>
    )
}

export default ManageQuiz;