import './ManageQuiz.scss'
import Select from 'react-select';
import { FcPlus } from "react-icons/fc"
import { useState } from 'react';

const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' },
];

const ManageQuiz = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('EASY');
    const [image, setImage] = useState(null);

    const handleChangFile = (event) => {

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
                            // onChange={setSelectedOption}
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
                </fieldset>

            </div>
            <div className="list-detail">
                table
            </div>
        </div>
    )
}

export default ManageQuiz;