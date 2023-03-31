import { useEffect, useState } from 'react';
import Select from 'react-select';
import './QuizQA.scss';
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsPatchMinusFill } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import Lightbox from "react-awesome-lightbox";
import { getAllQuizForAdmin, getQuizWithQA, postCreateNewQuestionForQuiz, postCreateNewAnswerForQuestion } from "../../../../services/apiService";
import { toast } from 'react-toastify';


const QuizQA = (props) => {

    const initQuestions = [
        {
            id: uuidv4(),
            description: "",
            imageFile: '',
            imageName: '',
            test: false,
            answers: [
                {
                    id: uuidv4(),
                    description: '',
                    isCorrect: false,
                }
            ]
        }
    ];

    const [isValidQuestion, setIsValidQuestion] = useState(false);
    const [isValidAnswer, setIsValidAnswer] = useState(false);

    const [questions, setQuestions] = useState(initQuestions);

    const [isPreviewImage, setIsPreviewImage] = useState(false);
    const [dataImageReview, setDataImageReview] = useState({
        title: '',
        url: ''
    })

    const [selectedQuiz, setSelectedQuiz] = useState({});
    const [listQuiz, setListQuiz] = useState([]);

    useEffect(() => {
        fetchQuiz();
    }, [])

    useEffect(() => {
        fetchQuizWithQA();
    }, [selectedQuiz])

    const fetchQuizWithQA = async () => {
        let res = await getQuizWithQA(selectedQuiz.value);
        console.log("check res: ", res)
    }

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


    const handleAddRemoveQuestion = (type, id) => {
        if (type === 'ADD') {
            const newQuestion = {
                id: uuidv4(),
                description: '',
                imageFile: '',
                imageName: '',
                answers: [
                    {
                        id: uuidv4(),
                        description: '',
                        isCorrect: false
                    }
                ]
            };
            setQuestions([...questions, newQuestion]);
        }

        if (type === 'REMOVE') {
            let questionClone = _.cloneDeep(questions);

            questionClone = questionClone.filter(item => item.id !== id);
            setQuestions(questionClone);
        }
    }

    const handleAddRemoveAnswer = (type, questionId, answerId) => {
        let questionClone = _.cloneDeep(questions);
        if (type === 'ADD') {
            const newAnswer = {
                id: uuidv4(),
                description: '',
                isCorrect: false
            };

            let index = questionClone.findIndex(item => item.id === questionId);
            questionClone[index].answers.push(newAnswer)
            setQuestions(questionClone);
        }

        if (type === 'REMOVE') {
            let index = questionClone.findIndex(item => item.id === questionId);
            questionClone[index].answers = questionClone[index].answers.filter(item => item.id !== answerId);
            setQuestions(questionClone);
        }
    }

    const handleOnChange = (type, questionId, value) => {
        if (type === 'QUESTION') {
            let questionClone = _.cloneDeep(questions);
            let index = questionClone.findIndex(item => item.id === questionId);
            if (index > -1) {
                questionClone[index].description = value;
                setQuestions(questionClone);
            }
        }
    }

    const handleOnChangeFileQuestion = (questionId, event) => {
        let questionClone = _.cloneDeep(questions);
        let index = questionClone.findIndex(item => item.id === questionId);
        if (index > -1 && event.target && event.target.files && event.target.files[0]) {
            questionClone[index].imageFile = event.target.files[0];
            questionClone[index].imageName = event.target.files[0].name;
            setQuestions(questionClone);
        }
    }

    const handleAnswerQuestion = (type, answerId, questionId, value) => {
        let questionClone = _.cloneDeep(questions);
        let index = questionClone.findIndex(item => item.id === questionId);
        if (index > -1) {
            questionClone[index].answers = questionClone[index].answers.map(answer => {
                if (answer.id === answerId) {
                    if (type === 'CHECKBOX') {
                        answer.isCorrect = value;
                    }
                    if (type === 'INPUT') {
                        answer.description = value
                    }
                }
                return answer;
            })
            setQuestions(questionClone);
        }
    }

    const handleSubmitQuestionForQuiz = async () => {
        console.log("questions: ", questions, selectedQuiz)
        //submit question
        // await Promise.all(questions.map(async (question) => {
        //     const q = await postCreateNewQuestionForQuiz(+selectedQuiz.value, question.description, question.imageFile);
        //     await Promise.all(question.answers.map(async (answer) => {
        //         await postCreateNewAnswerForQuestion(answer.description, answer.isCorrect, q.DT.id)
        //     }))
        // }));

        //todo
        if (_.isEmpty(selectedQuiz)) {
            toast.error("Please choose a Quiz!")
            return;
        }

        //validate question
        let isValidQ = true;
        let indexQ1 = 0;
        for (let i = 0; i < questions.length; i++) {
            if (!questions[i].description) {
                isValidQ = false;
                indexQ1 = i;
                setIsValidQuestion(true);
                break;
            }
        }

        if (isValidQ === false) {
            toast.error(`Not empty description for Question ${indexQ1 + 1}`);
            return;
        }

        //validate answer
        let isValidA = true;
        let indexQ = 0, indexA = 0;
        for (let i = 0; i < questions.length; i++) {

            for (let j = 0; j < questions[i].answers.length; j++) {
                if (!questions[i].answers[j].description) {
                    isValidA = false;
                    setIsValidAnswer(true);
                    indexA = j;
                    break;
                }
            }
            indexQ = i;
            if (isValidA === false) break;
        }

        if (isValidA === false) {
            toast.error(`Not empty answer ${indexA + 1} at Question ${indexQ + 1}`);
            return;
        }


        //submit question
        for (const question of questions) {
            const q = await postCreateNewQuestionForQuiz(
                +selectedQuiz.value, question.description, question.imageFile
            );
            //submit answer
            for (const answer of question.answers) {
                await postCreateNewAnswerForQuestion(
                    answer.description, answer.isCorrect, q.DT.id
                )
            }
        }

        toast.success(`Create questions and answers succed!`)
        setQuestions(initQuestions);
    }

    const handleReviewImage = (questionId) => {
        let questionClone = _.cloneDeep(questions);
        let index = questionClone.findIndex(item => item.id === questionId);
        if (index > -1) {
            setDataImageReview({
                url: URL.createObjectURL(questionClone[index].imageFile),
                title: questionClone[index].imageName
            })
            setIsPreviewImage(true);
        }
    }

    return (
        <div className="questions-container">
            <div className="add-new-question">
                <div className='mb-2'>
                    <label>Select Quiz:</label>
                    <Select
                        defaultValue={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={listQuiz}
                    />
                </div>
                <div className='mt-3 mb-2'>
                    Add questions:
                </div>
                {
                    questions && questions.length > 0 &&
                    questions.map((question, index) => {
                        return (
                            <div key={question.id} className='q-main mb-4'>
                                <div className='questions-content'>
                                    <div className="form-floating description">
                                        {isValidQuestion === true && question.description === '' ?
                                            <input
                                                type="type"
                                                className="form-control is-invalid"
                                                placeholder="name@example.com"
                                                value={question.description}
                                                onChange={(event) => handleOnChange('QUESTION', question.id, event.target.value)}
                                            />
                                            :
                                            <input
                                                type="type"
                                                className="form-control"
                                                placeholder="name@example.com"
                                                value={question.description}
                                                onChange={(event) => handleOnChange('QUESTION', question.id, event.target.value)}
                                            />
                                        }
                                        <label>Question {index + 1}'s description</label>
                                    </div>
                                    <div className='group-upload'>
                                        <label htmlFor={`${question.id}`}>
                                            <RiImageAddFill className='label-upload' />
                                        </label>
                                        <input
                                            id={`${question.id}`}
                                            onChange={(event) => handleOnChangeFileQuestion(question.id, event)}
                                            type={'file'}
                                            hidden
                                        />
                                        <span>
                                            {question.imageName ?
                                                <span
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => handleReviewImage(question.id)}
                                                >
                                                    {question.imageName}
                                                </span> : '0 file is upload'}
                                        </span>
                                    </div>
                                    <div className='btn-add'>
                                        <span onClick={() => handleAddRemoveQuestion('ADD', '')}>
                                            <BsFillPatchPlusFill className='icon-add' />
                                        </span>
                                        {questions.length > 1 &&
                                            <span
                                                onClick={() => handleAddRemoveQuestion('REMOVE', question.id)}
                                            >
                                                <BsPatchMinusFill className='icon-remove' />
                                            </span>
                                        }
                                    </div>

                                </div>
                                {question.answers && question.answers.length > 0 &&
                                    question.answers.map((answer, index) => {
                                        return (
                                            <div key={answer.id} className='answers-content'>
                                                <input
                                                    className="form-check-input iscorrect"
                                                    type="checkbox"
                                                    checked={answer.isCorrect}
                                                    onChange={(event) => handleAnswerQuestion('CHECKBOX', answer.id, question.id, event.target.checked)}
                                                />
                                                <div className="form-floating answer-name">
                                                    {isValidAnswer === true && answer.description === '' ?
                                                        <input
                                                            onChange={(event) => handleAnswerQuestion('INPUT', answer.id, question.id, event.target.value)}
                                                            value={answer.description}
                                                            type="type"
                                                            className="form-control is-invalid"
                                                            placeholder="name@example.com"
                                                        />
                                                        :
                                                        <input
                                                            onChange={(event) => handleAnswerQuestion('INPUT', answer.id, question.id, event.target.value)}
                                                            value={answer.description}
                                                            type="type"
                                                            className="form-control"
                                                            placeholder="name@example.com"
                                                        />
                                                    }
                                                    <label>answers {index + 1}</label>
                                                </div>
                                                <div className='btn-group'>
                                                    <span
                                                        onClick={() => handleAddRemoveAnswer('ADD', question.id)}
                                                    >
                                                        <AiFillPlusSquare className='icon-add' />
                                                    </span>
                                                    {question.answers.length > 1 &&
                                                        <span
                                                            onClick={() => handleAddRemoveAnswer('REMOVE', question.id, answer.id)}
                                                        >
                                                            <AiOutlineMinusCircle className='icon-remove' />
                                                        </span>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                {
                    questions && questions.length > 0 &&
                    <div>
                        <button
                            onClick={() => handleSubmitQuestionForQuiz()}
                            className='btn btn-warning'
                        >
                            Save Question
                        </button>
                    </div>
                }

                {isPreviewImage === true &&
                    <Lightbox
                        image={dataImageReview.url}
                        title={dataImageReview.title}
                        onClose={() => setIsPreviewImage(false)}
                    >

                    </Lightbox>
                }
            </div>

        </div>
    )
}

export default QuizQA;