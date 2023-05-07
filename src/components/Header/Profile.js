import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Yourinfor from './Yourinfor';
import Password from './Changepass'

const Profile = (props) => {

    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false);
    }



    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className="modal-Profile"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Main infor">
                            <Yourinfor />
                        </Tab>
                        <Tab eventKey="profile" title="Password">
                            <Password />
                        </Tab>
                        <Tab eventKey="history" title="History">
                            history
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Profile