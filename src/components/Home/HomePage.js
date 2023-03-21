import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {

    const navigate = useNavigate();

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
                <div className="homepage-title1">
                    There's a better way to ask
                </div>
                <div className="homepage-title2">
                    You don't want to make a boring form.
                    And your audience won't answer one.
                    Create a typeform instead—and make everyone happy.
                </div>
                <div className="homepage-button">
                    {isAuthenticated === false ?
                        <button onClick={() => navigate('/login')}>Get started - it's free</button>
                        :
                        <button onClick={() => navigate('/users')}>Doing Quiz Now</button>
                    }

                </div>

            </div>
        </div>
    )
}

export default HomePage;