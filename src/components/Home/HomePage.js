import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import Logo from "../../assets/sa-hinh-la-gi-1.jpg";
import Logo2 from "../../assets/anh-minh-hoa-1564047067734550662695-crop-1564047073690577996465.jpg"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./HomePage.scss";
import { Link } from 'react-router-dom'
const HomePage = (props) => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);


    return (
        <>
            <div className="row container">
                <div className="col-5">
                    <br />
                    <h2>
                        Ôn thi theo bộ đề!
                    </h2>
                    <br />

                    <div>
                        <ButtonGroup size="lg" className="mb-2">
                            <Button onClick={() => navigate('/user')}>A1</Button>
                            <Button onClick={() => navigate('/user')}>A2</Button>
                            <Button onClick={() => navigate('/user')}>A3</Button>
                            <Button onClick={() => navigate('/user')}>A4</Button>
                            <Button onClick={() => navigate('/user')}>B1</Button>
                            <Button onClick={() => navigate('/user')}>B2</Button>
                            <Button onClick={() => navigate('/user')}>C</Button>
                            <Button onClick={() => navigate('/user')}>D</Button>
                            <Button onClick={() => navigate('/user')}>E</Button>
                        </ButtonGroup>
                    </div>

                    <br />


                    <div>
                        {isAuthenticated === false ?
                            <button className="btn btn-secondary" onClick={() => navigate('/login')}>Làm bài bây giờ</button>
                            :
                            <button className="btn btn-secondary" onClick={() => navigate('/baithi')}>Làm bài bây giờ</button>
                        }
                    </div>


                    <br />

                    <Button variant="success" onClick={() => navigate('/cacloaigiayphep')}><b>Các loại giấy phép lái xe hiện nay</b></Button>
                    <br />
                    <br />
                    <Button href="https://lythuyet.onthigplx.vn/cac-loai-bien-bao-giao-thong-duong-bo/" variant="warning" ><b>Các loại biển báo giao thông đường bộ </b><b style={{ color: "red" }}> {'>>'}lythuyet.onthigplx.vn</b></Button>
                    <br />
                    <br />
                    <Button variant="danger" href="https://www.csgt.vn/tra-cuu-phuong-tien-vi-pham.html"><b>Tra cứu phạt nguội</b></Button>
                    <br />
                    <br />
                    <Button variant="info" onClick={() => navigate('/meoonthi')}><b>Mẹo ôn thi hiệu quả</b></Button>

                </div>
                <div className="col-7">
                    <br />
                    <h2>Xe nào được quyền đi trước?</h2>
                    <br />
                    <div style={{ width: "800px" }}>
                        <img src={Logo2} style={{ width: "100%" }} />
                    </div>
                    <br />
                    <h2>Số lượng câu hỏi cần ôn tập thi sát hạch lý thuyết lái xe</h2>
                    <br />
                    <h5>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tất cả có 10 hạng bằng lái xe cơ bản gồm: A1, A2, A3, A4, B1, B2, C, D, E. Tuy có nhiều hạng bằng như thế nhưng khi thi sát hạch thì một số hạng được gộp chung với nhau, và có cùng bộ đề để ôn và thi lý thuyết. Cụ thể là có 5 nhóm đề thi lý thuyết sát hạch như sau:
                    </h5>
                    <br />

                    <h4>Câu hỏi dùng cho sát hạch lái xe hạng B2, C, D, E</h4>

                    <p>Đối với các hạng bằng lái này bạn phải ôn luyện đủ 600 câu hỏi.</p>

                    <h4>Câu hỏi dùng cho sát hạch lái xe mô tô hạng B1</h4>

                    <p>Đối với hạng bằng này bạn cần ôn 574 câu hỏi bao gồm:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Nhóm câu hỏi khái niệm và quy tắc giao thông đường bộ (166 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Nhóm câu hỏi Văn hóa giao thông và đạo đức người lái xe (21 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Nhóm câu hỏi Kỹ thuật lái xe (54 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Nhóm câu hỏi Hệ thống báo hiệu đường bộ (182 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Nhóm câu hỏi Giải các thế sa hình và kỹ năng xử lý tình huống giao thông (35 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Nhóm 60 câu về tình huống mất an toàn giao thông nghiêm trọng (60 câu)</p>

                    <h4>Câu hỏi dùng cho sát hạch lái xe mô tô hạng A1</h4>

                    <p>Đối với hạng bằng này bạn cần ôn 200 câu hỏi bao gồm:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Nhóm câu hỏi khái niệm và quy tắc giao thông đường bộ (83 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Nhóm câu hỏi Văn hóa giao thông và đạo đức người lái xe (05 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Nhóm câu hỏi Kỹ thuật lái xe (12 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Nhóm câu hỏi Hệ thống báo hiệu đường bộ (65 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Nhóm câu hỏi Giải các thế sa hình và kỹ năng xử lý tình huống giao thông (35 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Nhóm 60 câu về tình huống mất an toàn giao thông nghiêm trọng (20 câu)</p>

                    <h4>Câu hỏi dùng cho sát hạch lái xe mô tô hạng A2</h4>

                    <p>Đối với hạng bằng này bạn cần ôn luyện 450 câu hỏi câu hỏi bao gồm:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Nhóm câu hỏi khái niệm và quy tắc giao thông đường bộ (161 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Nhóm câu hỏi Văn hóa giao thông và đạo đức người lái xe (05 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Nhóm câu hỏi Kỹ thuật lái xe (17 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Nhóm câu hỏi Hệ thống báo hiệu đường bộ (182 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Nhóm câu hỏi Giải các thế sa hình và kỹ năng xử lý tình huống giao thông (83)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Nhóm 60 câu về tình huống mất an toàn giao thông nghiêm trọng (50 câu)</p>

                    <h4>Câu hỏi dùng cho sát hạch lái xe hạng A3, A4</h4>

                    <p>Đối với hạng bằng này bạn cần ôn luyện 500 câu hỏi bao gồm:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Nhóm câu hỏi khái niệm và quy tắc giao thông đường bộ (166 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Nhóm câu hỏi Văn hóa giao thông và đạo đức người lái xe (21 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Nhóm câu hỏi Kỹ thuật lái xe (17 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Nhóm câu hỏi Hệ thống báo hiệu đường bộ (182 câu)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Nhóm câu hỏi Giải các thế sa hình và kỹ năng xử lý tình huống giao thông (114)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Nhóm 60 câu về tình huống mất an toàn giao thông nghiêm trọng (54 câu)</p>

                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default HomePage;