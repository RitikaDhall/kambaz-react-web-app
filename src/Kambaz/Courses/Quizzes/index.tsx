import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { quizzes } from "../../Database";
import QuizControls from "./QuizControls";
import { Button, Col, ListGroup, ListGroupItem, Modal, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import FacultyRoute from "../../Account/FacultyRoute";
import QuizControlButtons from "./QuizControlButtons";
// import { FaTrash } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export default function Quizzes() {
    const { cid } = useParams();
    const [quizzesShown, setQuizzes] = useState<any>(quizzes);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        });
    }

    const getAvailabilityStatus = (quiz: any) => {
        const now = new Date();
        const availableDate = new Date(`${quiz.availableDate}T00:00:00`);
        const untilDate = new Date(`${quiz.untilDate}T23:59:59`);

        if (isNaN(availableDate.getTime()) || isNaN(untilDate.getTime())) {
            return 'Invalid date';
        }

        if (now < availableDate) {
            return `Not available until ${formatDate(quiz.availableDate)}`;
        } else if (now >= availableDate && now <= untilDate) {
            return 'Available';
        } else {
            return 'Closed';
        }
    };

    const handleEdit = (quiz: any) => {
        navigate(`/Kambaz/Courses/${quiz.course}/Quizzes/${quiz._id}`)
    }

    const handleDelete = (quizId: string) => {
        console.log("Delete quiz:", quizId);
        setShowDeleteModal(true);
    }

    const handlePublish = (quizId: string, publish: boolean) => {

        // if(publish) {
        //     // publish on backend
        //     // reducer
        // } else {
        //     // unpublish on backend
        //     // reducer
        // }
        setQuizzes(
            quizzesShown.map((quiz: any) => {
                if (quiz._id === quizId) {
                    return {...quiz, published: publish};
                } else {
                    return quiz;
                }
            })
        )
        // dispatch setquiz
    }

    return (
        <div id="wd-quizzes">
            <QuizControls />

            <br /><br /><br /><br />

            <ListGroup id="wd-quiz-list" className="rounded-0">
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <Button
                            variant="link"
                            className="p-0 text-black me-2"
                        >
                            <IoMdArrowDropdown />
                        </Button>
                        ASSIGNMENT QUIZZES
                    </div>

                    {quizzesShown
                        .filter((quiz: any) => quiz.course === cid)
                        .map((quiz: any) => (
                            <ListGroup className="wd-lessons rounded-0" key={quiz._id}>
                                <ListGroupItem className="wd-lesson p-3 ps-1">

                                    <Row>
                                        <Col xs='auto'>
                                            <HiOutlineRocketLaunch className="text-success fs-4 ms-4 mt-3" />
                                        </Col>

                                        <Col>
                                            <a href={`#/Kambaz/Courses/${quiz.course}/Quizzes/${quiz._id}/Details`} className="wd-quiz-link" >
                                                {quiz.title}
                                            </a>
                                            <br />
                                            <b>{getAvailabilityStatus(quiz)}</b> | <b>Due</b> {formatDate(quiz.dueDate)} at 11:59pm | {quiz.points} pts | {quiz.questions.length} Questions
                                        </Col>

                                        <FacultyRoute>
                                            <Col xs='auto'>
                                                <QuizControlButtons
                                                    quiz={quiz}
                                                    handleEdit={handleEdit}
                                                    handleDelete={handleDelete}
                                                    handlePublish={handlePublish} />
                                            </Col>
                                        </FacultyRoute>
                                    </Row>

                                    <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Delete Quiz</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            Are you sure you want to remove this quiz?
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => setShowDeleteModal(false)}> Cancel </Button>
                                            <Button variant="danger"
                                                onClick={() => {
                                                    // removeAssignment(quiz._id);
                                                    setShowDeleteModal(false);
                                                }} > Delete Quiz </Button>
                                        </Modal.Footer>
                                    </Modal>

                                </ListGroupItem>
                            </ListGroup>
                        ))
                    }
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}