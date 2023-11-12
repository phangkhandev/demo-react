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
                    <h2>Các loại giấy phép lái xe hiện nay</h2>
                    <br />
                    <h5>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Giấy phép lái xe hay còn gọi là bằng lái xe là một loại giấy phép, chứng chỉ do cơ quan nhà nước hoặc cơ quan có thẩm quyền cấp cho một người. Mỗi loại giấy phép lái xe sẽ có thời gian hiệu lực, phương tiện giao thông được vận hành, điều kiện dự thi sát hạch khác nhau.
                    </h5>
                    <br />

                    <h3>Các loại giấy phép lái xe 2,3 bánh</h3>
                    <br />
                    <h4>Bằng lái xe hạng A1</h4>

                    <p>Điều kiện thi sát hạch hạng A1:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Người đủ 18 tuổi (phải đủ cả ngày, tháng, năm).</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các giấy tờ hồ sơ: Đơn đăng kí, CMND, giấy khám sức khỏe,…</p>

                    <p>Thời hạn bằng lái xe hạng A1: Vô thời hạn</p>

                    <p>Quy định gplx hạng A1:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Cấp cho người lái xe để điều khiển xe mô tô hai bánh có dung tích xy lanh từ 50 cm3 đến dưới 175 cm3.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Người khuyết tật điều khiển xe mô tô ba bánh dùng cho người khuyết tật.</p>

                    <h4>Bằng lái xe hạng A2</h4>

                    <p>Điều kiện thi sát hạch hạng A2:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Người đủ 18 tuổi (phải đủ cả ngày, tháng, năm).</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các giấy tờ hồ sơ: Đơn đăng kí, CMND, giấy khám sức khỏe,…</p>

                    <p>Thời hạn bằng lái xe hạng A2: Vô thời hạn</p>

                    <p>Quy định gplx hạng A2:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Cấp cho người lái xe để điều khiển xe mô tô hai bánh có dung tích xy lanh từ 175 cm3 trở lên và các loại xe quy định cho giấy phép lái xe hạng A1.</p>

                    <h4>Bằng lái xe hạng A3</h4>

                    <p>Điều kiện thi sát hạch hạng A3:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Người đủ 18 tuổi (phải đủ cả ngày, tháng, năm).</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các giấy tờ hồ sơ: Đơn đăng kí, CMND, giấy khám sức khỏe,…</p>

                    <p>Thời hạn bằng lái xe hạng A3: Vô thời hạn</p>

                    <p>Quy định gplx hạng A3:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Cấp cho người lái xe để điều khiển xe mô tô ba bánh, bao gồm cả xe lam, xích lô máy và các loại xe quy định cho giấy phép lối xe hạng A1.</p>

                    <h4>Bằng lái xe hạng A4</h4>

                    <p>Điều kiện thi sát hạch hạng A4:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Người đủ 18 tuổi (phải đủ cả ngày, tháng, năm).</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các giấy tờ hồ sơ: Đơn đăng kí, CMND, giấy khám sức khỏe,…</p>

                    <p>Thời hạn bằng lái xe hạng A4: <b>10 năm</b> kể từ ngày cấp.</p>

                    <p>Quy định gplx hạng A4:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Cấp cho người lái xe để điều khiển các loại máy kéo nhỏ có trọng tải đến 1000 kg.</p>

                    <h3>Các loại giấy phép lái xe ô tô 4 bánh trở lên</h3>

                    <h4>Bằng lái xe hạng B1</h4>

                    <p>Điều kiện thi sát hạch hạng B1:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Người từ 18 tuổi trở lên.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các giấy tờ hồ sơ: Đơn đăng kí, CMND, giấy khám sức khỏe,…</p>

                    <p>Thời hạn bằng lái xe hạng B1:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Có thời hạn đến khi người lái xe đủ 55 tuổi đối với nữ và đủ 60 tuổi đối với nam.</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; 10 năm trong trường hợp người lái xe dưới 45 tuổi đối với nữ và dưới 50 tuổi đối với nam.</p>

                    <p>Quy định gplx hạng B1:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Cấp cho người không hành nghề lái xe để điều khiển các loại xe số tự động sau đây:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Ô tô dùng cho người khuyết tật.</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Cấp cho người không hành nghề lái xe để điều khiển các loại xe số sàn sau đây:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg.</p>

                    <h4>Bằng lái xe hạng B2</h4>

                    <p>Điều kiện thi sát hạch hạng B2:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Người từ 18 tuổi trở lên.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các giấy tờ hồ sơ: Đơn đăng kí, CMND, giấy khám sức khỏe,…</p>

                    <p>Thời hạn bằng lái xe hạng B2:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; 10 năm kể từ ngày cấp</p>

                    <p>Quy định gplx hạng B2:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Hạng B2 cấp cho người hành nghề lái xe để điều khiển các loại xe sau đây:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Người lái xe ô tô 4 - 9 chỗ, ô tô chuyên dùng có trọng tải thiết kế dưới 3,5 tấn</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226; Các loại xe quy định cho giấy phép lái xe hạng B1.</p>

                    <h4>Bằng lái xe hạng C</h4>

                    <p>Điều kiện thi sát hạch hạng C:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Người từ 21 tuổi trở lên.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các giấy tờ hồ sơ: Đơn đăng kí, CMND, giấy khám sức khỏe,…</p>

                    <p>Thời hạn bằng lái xe hạng C:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; 5 năm kể từ ngày cấp</p>

                    <p>Quy định gplx hạng C:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Ô tô tải, kể cả ô tô tải chuyên dùng, ô tô chuyên dùng có trọng tải thiết kế từ 3500 kg trở lên.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Máy kéo kéo một rơ moóc có trọng tải thiết kế từ 3500 kg trở lên.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các loại xe quy định cho giấy phép lái xe hạng B1, B2.</p>

                    <h4>Bằng lái xe hạng D</h4>

                    <p>Điều kiện thi sát hạch hạng D:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Người từ 24 tuổi trở lên. Có ít nhất trên 05 năm hành nghề lái xe, phải có bằng lái hạng B2 hoặc C và 100.000 km lái xe an toàn. Để được nâng dấu lên bằng D, người lái xe phải có trình độ học vấn trung học cơ sở trở lên. Trong trường hợp làm hồ sơ có thể dùng bằng cấp 2 hoặc bằng cấp 3, hoặc bằng ĐH/CĐ.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các giấy tờ hồ sơ: Đơn đăng kí, CMND, giấy khám sức khỏe,…</p>

                    <p>Thời hạn bằng lái xe hạng D:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; 5 năm kể từ ngày cấp</p>

                    <p>Quy định gplx hạng D:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Ô tô chở người từ 10 đến 30 chỗ ngồi, kể cả chỗ ngồi cho người lái xe.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các loại xe quy định cho giấy phép lái xe hạng B1, B2 và C.</p>

                    <h4>Bằng lái xe hạng E</h4>

                    <p>Điều kiện thi sát hạch hạng E:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Người từ 24 tuổi trở lên, có ít nhất trên 05 năm hành nghề lái xe, phải có bằng tốt nghiệp trung học cơ sở hoặc tương đương trở lên.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Có bằng lái hạng B2 lên C, C lên D, D lên E; các hạng B2, C, D, E lên hạng F tương ứng; các hạng D, E lên FC: thời gian hành nghề từ 03 năm trở lên và 50.000 km lái xe an toàn trở lên.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Hoặc bằng lái hạng B2 lên D, C lên E: thời gian hành nghề từ 05 năm trở lên và 100.000 km lái xe an toàn trở lên.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các giấy tờ hồ sơ: Đơn đăng kí, CMND, giấy khám sức khỏe,…</p>

                    <p>Thời hạn bằng lái xe hạng E:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; 5 năm kể từ ngày cấp</p>

                    <p>Quy định gplx hạng E:</p>

                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Ô tô chở người trên 30 chỗ ngồi</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8718; Các loại xe quy định cho giấy phép lái xe hạng B1, B2, C và D.</p>

                    <p><b>Lưu ý: Người có giấy phép lái xe các hạng B1, B2, C, D và E khi điều khiển các loại xe tương ứng được kéo thêm một rơ moóc có trọng tải thiết kế không quá 750 kg.</b></p>
                </div>
            </div>
            <br />
            <br />
        </>
    )
}

export default License;