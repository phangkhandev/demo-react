import { useState, useEffect } from "react";
import { getHistory } from "../../services/apiService";
import moment from 'moment';
import Table from 'react-bootstrap/Table';

const History = (props) => {

    const [listHistory, setListHistory] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        let res = await getHistory();
        if (res && res.EC === 0) {
            let newData = res?.DT?.data?.map(item => {
                return {
                    total_correct: item.total_correct,
                    total_questions: item.total_questions,
                    name: item?.quizHistory?.name ?? "",
                    description: item?.quizHistory?.description ?? "",
                    id: item.id,
                    date: moment(item.updatedAt).utc('HH:mm').format('DD/MM/YYYY HH:mm:ss A')

                }
            })
            if (newData && newData.length > 7) {
                newData = newData.slice(newData.length - 7, newData.length);
            }
            setListHistory(newData);
        }

    }




    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên Bài Thi</th>
                        <th>Loại Bài Thi</th>
                        <th>Tổng số câu hỏi</th>
                        <th>Tổng số câu đúng</th>
                        <th>Ngày làm bài</th>
                    </tr>
                </thead>
                <tbody>
                    {listHistory && listHistory.length > 0 &&
                        listHistory.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.total_questions}</td>
                                    <td>{item.total_correct}</td>
                                    <td>{item.date}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default History;