import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import "./ListQuiz.scss";
import { useNavigate } from "react-router-dom";

const ListQuiz4 = (props) => {
    const [arrQuiz, setArrQuiz] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getQuizData();
    }, [])

    const getQuizData = async () => {
        const res = await getQuizByUser();
        if (res && res.EC === 0) {
            setArrQuiz(res.DT);
        }
    }

    return (
        <div>

            <div className="list-quiz-container container">
                {arrQuiz && arrQuiz.length > 0 &&
                    arrQuiz.map((quiz, index) => {
                        if (quiz.id > 52 && quiz.id < 62) {

                            return (
                                <div key={`${index}-quiz`} className="card" style={{ width: "18rem" }}>
                                    <img src={`data:image/jpeg;base64, ${quiz.image}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Quiz {index + 1}</h5>
                                        <p className="card-text">{quiz.description}</p>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => navigate(`/quiz/${quiz.id}`, { state: { quizTitle: quiz.description } })}
                                        >Làm Bài
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

                {arrQuiz && arrQuiz.length === 0 &&
                    <div>
                        You don't have any quiz now...
                    </div>
                }

            </div>


            <div style={{ marginBottom: "60px" }}></div>
        </div>
    )
}

export default ListQuiz4;