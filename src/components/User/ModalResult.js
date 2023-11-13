import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';

const ModalResult = (props) => {
    const { show, setShow, dataModalResult, handleShowAnswer } = props;
    const handleClose = () => setShow(false);
    const { t } = useTranslation();

    const quizId = props.quizId;

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Kết quả thi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Tổng số câu hỏi: <b>{dataModalResult.countTotal} </b></div>
                    <div>Tổng số câu đúng: <b>{dataModalResult.countCorrect} </b></div>
                    {/* {quizId == 23 && dataModalResult.countCorrect < 21 ?
                        <div style={{ color: "red" }}>Rớt!</div>
                        :
                        <div style={{ color: "blue" }}>Đậu!</div>
                    } */}

                    {quizId == 23 ?
                        (
                            dataModalResult.countCorrect < 21 ?
                                <div style={{ color: "red" }}>Rớt!</div>
                                :
                                <div style={{ color: "blue" }}>Đậu!</div>
                        )
                        :
                        <div></div>
                    }

                    {quizId > 23 && quizId < 30 ?
                        (
                            dataModalResult.countCorrect < 21 ?
                                <div style={{ color: "red" }}>Rớt!</div>
                                :
                                <div style={{ color: "blue" }}>Đậu!</div>
                        )
                        :
                        <div></div>
                    }

                    {quizId == 30 ?
                        (
                            dataModalResult.countCorrect < 27 ?
                                <div style={{ color: "red" }}>Rớt!</div>
                                :
                                <div style={{ color: "blue" }}>Đậu!</div>
                        )
                        :
                        <div></div>
                    }

                    {quizId == 31 ?
                        (
                            dataModalResult.countCorrect < 32 ?
                                <div style={{ color: "red" }}>Rớt!</div>
                                :
                                <div style={{ color: "blue" }}>Đậu!</div>
                        )
                        :
                        <div></div>
                    }

                    {quizId == 32 ?
                        (
                            dataModalResult.countCorrect < 36 ?
                                <div style={{ color: "red" }}>Rớt!</div>
                                :
                                <div style={{ color: "blue" }}>Đậu!</div>
                        )
                        :
                        <div></div>
                    }

                    {quizId > 32 && quizId < 35 ?
                        (
                            dataModalResult.countCorrect < 41 ?
                                <div style={{ color: "red" }}>Rớt!</div>
                                :
                                <div style={{ color: "blue" }}>Đậu!</div>
                        )
                        :
                        <div></div>
                    }


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose();
                        props.handleShowAnswer();
                    }}>
                        Hiển thị đáp án
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult;