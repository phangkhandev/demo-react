import Select from 'react-select';
import { useState, useEffect } from 'react';
import { getAllQuizForAdmin, getAllUsers } from '../../../../services/apiService';

const AssignQuiz = (props) => {
    const [selectedQuiz, setSelectedQuiz] = useState({});
    const [listQuiz, setListQuiz] = useState([]);

    const [selectedUser, setSelectedUser] = useState({});
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchQuiz();
        fetchUser();
    }, [])

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            let newQuiz = res.DT.map(item => {
                return {
                    value: item.id,
                    label: `${item.id} - ${item.description}`
                }
            })
            setListQuiz(newQuiz);
        }
    }

    const fetchUser = async () => {
        let res = await getAllUsers();
        console.log("check res: ", res)
        if (res && res.EC === 0) {
            let users = res.DT.map(item => {
                return {
                    value: item.id,
                    label: `${item.id} - ${item.username} - ${item.email}`
                }
            })
            setListUser(users);
        }
    }

    return (
        <div className="assign-quiz-container row">
            <div className='mb-2 col-6'>
                <label>Select Quiz:</label>
                <Select
                    defaultValue={selectedQuiz}
                    onChange={setSelectedQuiz}
                    options={listQuiz}
                />
            </div>

            <div className='mb-2 col-6'>
                <label>Select User:</label>
                <Select
                    defaultValue={selectedUser}
                    onChange={setSelectedUser}
                    options={listUser}
                />
            </div>

            <div>
                <button className='btn btn-warning bt-3'>Assign</button>
            </div>
        </div>
    )
}

export default AssignQuiz;