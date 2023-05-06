import './Dashboard.scss';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { getOverView } from '../../../services/apiService';
import { useState } from 'react';
import { useEffect } from 'react';

const DashBoard = (props) => {
    const [dataOverView, setDataOverview] = useState([]);
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetchDataOverView();
    }, []);

    const fetchDataOverView = async () => {
        let res = await getOverView();
        if (res && res.EC === 0) {
            setDataOverview(res.DT);

            let Qz = 0, Qs = 0, Ans = 0;
            Qz = res?.DT?.others.countQuiz ?? 0;
            Qs = res?.DT?.others.countQuestions ?? 0;
            Ans = res?.DT?.others.countAnswers ?? 0;
            const data = [
                {
                    "name": "Quizzes",
                    "Qz": Qz
                },
                {
                    "name": "Questions",
                    "Qs": Qs
                },
                {
                    "name": "Answers",
                    "Ans": Ans
                }
            ]

            setDataChart(data);
        }
    }


    return (
        <div className="dashboard-container">
            <div className='title'>
                Analytics DashBoard
            </div>

            <div className='content'>
                <div className='c-left'>
                    <div className='child'>
                        <span className='text-1'>Total Users</span>
                        <span className='text-2'>
                            {dataOverView && dataOverView.users ? <>{dataOverView.users.total}</> : <>0</>}
                        </span>
                    </div>
                    <div className='child'>
                        <span className='text-1'>Total Quizzes</span>
                        <span className='text-2'>
                            {dataOverView && dataOverView.others ? <>{dataOverView.others.countQuiz}</> : <>0</>}
                        </span>
                    </div>
                    <div className='child'>
                        <span className='text-1'>Total Questions</span>
                        <span className='text-2'>
                            {dataOverView && dataOverView.others ? <>{dataOverView.others.countQuestions}</> : <>0</>}
                        </span>
                    </div>
                    <div className='child'>
                        <span className='text-1'>Total Answers</span>
                        <span className='text-2'>
                            {dataOverView && dataOverView.others ? <>{dataOverView.others.countAnswers}</> : <>0</>}
                        </span>
                    </div>
                </div>

                <div className='c-right'>
                    <ResponsiveContainer width={"95%"} height={"100%"} >
                        <BarChart data={dataChart} >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="name" />
                            {/* <YAxis /> */}
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Qz" fill="#8884d8" />
                            <Bar dataKey="Qs" fill="#82ca9d" />
                            <Bar dataKey="Ans" fill="#E67E22" />
                        </BarChart  >
                    </ResponsiveContainer>

                </div>
            </div>
        </div>
    )
}

export default DashBoard;