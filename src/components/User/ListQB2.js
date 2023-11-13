import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import "./ListQuiz.scss";
import { useNavigate } from "react-router-dom";

const ListQB2 = (props) => {
    const [arrQuiz, setArrQuiz] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getQuizData();
    }, [])

    const getQuizData = async () => {
        const res = await getQuizByUser();
        console.log(">>>> ", res.DT.id)
        if (res && res.EC === 0) {
            setArrQuiz(res.DT);
        }
    }



    return (
        <div>
            <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>Đề thi B2 gồm 35 câu thời gian làm bài 22 phút số câu đúng tối thiểu là 32/35</p>

            <div className="list-quiz-container container">
                {arrQuiz && arrQuiz.length > 0 &&
                    arrQuiz.sort((a, b) => a.id - b.id).map((quiz, index) => {
                        if (quiz.id > 156 && quiz.id < 175) {
                            return (
                                <div key={`${index}-quiz`} className="card" style={{ width: "8rem" }}>
                                    <img src={`data:image/jpeg;base64, ${quiz.image}`} style={{ width: "3rem", height: "3rem", marginLeft: "36px" }} alt="..." />
                                    <div className="card-body">

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

export default ListQB2;