import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import Logo from "../../assets/sa-hinh-la-gi-1.jpg";
const HomePage = (props) => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);


    return (
        <div className="homepage-container">
            <video autoPlay loop muted>
                <source
                    src={videoHomePage}
                    type="video/mp4"
                />

            </video>

            <div className="homapage-content">
                <div>
                    <img src={Logo} />
                </div>
                <div className="homepage-title1">

                    {t('homepage.title1')}
                </div>
                <div className="homepage-title2">
                    {t('homepage.title2')}
                </div>
                <div className="homepage-button">
                    {isAuthenticated === false ?
                        <button onClick={() => navigate('/login')}>Làm bài bây giờ</button>
                        :
                        <button onClick={() => navigate('/baithi')}>Làm bài bây giờ</button>
                    }

                </div>
                <div>
                    <br />
                </div>

            </div>
        </div>
    )
}

export default HomePage;