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
import Logo3 from "../../assets/ôn tập.jpg"
import Logo4 from "../../assets/biển báo.png"
import Logo5 from "../../assets/làm bài.jpg"
const License = (props) => {

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
                    <h2>Bước 1: Ôn tập các câu hỏi</h2>
                    <br />
                    <div style={{ width: "800px" }}>
                        <img src={Logo3} style={{ width: "100%" }} />
                    </div>
                    <br />
                    <h5>
                        Nên học tập trung theo từng chủ đề sẽ giúp việc ghi nhớ hiệu quả hơn. Cách để đạt điểm hiệu quả hơn là nên hiểu rõ các nguyên tắc và nội dung câu hỏi.
                    </h5>
                    <br />
                    <h2>Bước 2: Tra cứu biển báo</h2>
                    <br />
                    <div style={{ width: "800px" }}>
                        <img src={Logo4} style={{ width: "100%" }} />
                    </div>
                    <br />
                    <h5>
                        Hơn 50% các câu hỏi đều có liên quan đến biển báo, nên cần ôn tập thật kỹ phần này để có kết quả tốt nhất.
                    </h5>
                    <br />
                    <h2>Bước 3: Làm bài thi thử</h2>
                    <br />
                    <div style={{ width: "800px" }}>
                        <img src={Logo5} style={{ width: "100%" }} />
                    </div>
                    <br />
                    <h5>
                        Cố gắn hoàn tất các đề có sẵn, nếu cần có thể thêm phần bài thi với câu hỏi ngẩu nhiên.
                    </h5>
                    <br />
                    <h2 style={{ color: "red" }}>
                        Chúc bạn ôn tập và thi có kết quả tốt!!!
                    </h2>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default License;