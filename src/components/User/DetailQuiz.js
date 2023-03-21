import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from "lodash";
import './DetailQuiz.scss'

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    const location = useLocation();

    console.log(">>>check location: ", location)

    useEffect(() => {
        fetchQuestions();
    }, [quizId])

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        console.log(">>>check questions: ", res)
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDiscription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDiscription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers);
                    })
                    return { questionId: key, questionDiscription, image }
                }
                )
                .value();
            console.log(">>check data", data)
        }
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">Question 1: wwhat ???</div>
                    <div className="answer">
                        <div className="a-child">A</div>
                        <div className="a-child">B</div>
                        <div className="a-child">C</div>
                        <div className="a-child">D</div>
                    </div>
                </div>
                <div className="footer">
                    <buuton className="btn btn-secondary">Prev</buuton>
                    <buuton className="btn btn-primary">Next</buuton>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>


        </div>
    )
}

export default DetailQuiz;