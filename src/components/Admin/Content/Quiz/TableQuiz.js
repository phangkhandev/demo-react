import { useEffect } from "react";
import { useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiService";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalEditQuiz from "./ModalEditQuiz";
import './ManageQuiz.scss'

const TableQuiz = (props) => {
    const { dataSubmit } = props;

    const [listQuiz, setListQuiz] = useState([]);

    const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
    const [showModalEditQuiz, setShowModalEditQuiz] = useState(false);
    const [dataDelete, setDataDelete] = useState({});
    const [dataEdit, setDataEdit] = useState({});

    useEffect(() => {
        fetchQuiz();
    }, [dataSubmit])

    const fetchQuiz = async (props) => {
        setDataDelete({});
        setDataEdit({});
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT);
        }
    }

    const handleDeleteQuiz = (quiz) => {
        setDataDelete(quiz);
        setShowModalDeleteQuiz(true);
    }

    const handleEditQuiz = (quiz) => {
        setDataEdit(quiz);
        setShowModalEditQuiz(true);

    }

    return (
        <>
            <div className="list-quiz">List Quizzes </div>
            <table className="table table-bordered table-hover mt-2 my-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuiz && listQuiz.length > 0 &&
                        listQuiz.map((item, index) => {
                            return (
                                <tr key={`table-quiz-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.difficulty}</td>
                                    <td style={{ display: "flex", gap: "15px" }}>
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => handleEditQuiz(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDeleteQuiz(item)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <ModalDeleteQuiz
                show={showModalDeleteQuiz}
                setShow={setShowModalDeleteQuiz}
                dataDelete={dataDelete}
                fetchQuiz={fetchQuiz}
            />

            <ModalEditQuiz
                show={showModalEditQuiz}
                setShow={setShowModalEditQuiz}
                dataEdit={dataEdit}
                fetchQuiz={fetchQuiz}
                setDataEdit={setDataEdit}
            />
        </>
    )
}

export default TableQuiz;