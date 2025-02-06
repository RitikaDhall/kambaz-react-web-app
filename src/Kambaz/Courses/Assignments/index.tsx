import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { Col, ListGroup, Row } from "react-bootstrap";
import GreenEdit from "./GreenEdit";
import { IoIosArrowDown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments">

            <AssignmentControls /><br /><br /><br /><br />

            <ListGroup id="wd-assignment-list" className="rounded-0">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <IoIosArrowDown />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <Row>
                                <Col xs="auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                </Col>
                                <Col xs="auto">
                                    <GreenEdit />
                                </Col>
                                <Col>
                                    <a href="#/Kambaz/Courses/1234/Assignments/1" className="wd-assignment-link" >
                                        A1 - ENV + HTML
                                    </a>
                                    <br />
                                    <span style={{ color: 'red' }}>Multiple Modules</span> |
                                    <br />
                                    <b>Due</b> Jan 22 at 11:59pm | -/100 pts
                                </Col>
                                <Col xs="auto">
                                    <LessonControlButtons />
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <Row>
                                <Col xs="auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                </Col>
                                <Col xs="auto">
                                    <GreenEdit />
                                </Col>
                                <Col>
                                    <a href="#/Kambaz/Courses/1234/Assignments/2" className="wd-assignment-link" >
                                        A2 - CSS + BOOTSTRAP
                                    </a>
                                    <br />
                                    <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> Jan 17 at 12am |
                                    <br />
                                    <b>Due</b> Feb 5 at 11:59pm | -/100 pts
                                </Col>
                                <Col xs="auto">
                                    <LessonControlButtons />
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <Row>
                                <Col xs="auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                </Col>
                                <Col xs="auto">
                                    <GreenEdit />
                                </Col>
                                <Col>
                                    <a href="#/Kambaz/Courses/1234/Assignments/3" className="wd-assignment-link" >
                                        A3 - JAVASCRIPT + REACT
                                    </a>
                                    <br />
                                    <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> Jan 31 at 12am |
                                    <br />
                                    <b>Due</b> Feb 19 at 11:59pm | -/100 pts
                                </Col>
                                <Col xs="auto">
                                    <LessonControlButtons />
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <Row>
                                <Col xs="auto">
                                    <BsGripVertical className="me-2 fs-3" />
                                </Col>
                                <Col xs="auto">
                                    <GreenEdit />
                                </Col>
                                <Col>
                                    <a href="#/Kambaz/Courses/1234/Assignments/4" className="wd-assignment-link" >
                                        A4 - NODE + MONGO.DB
                                    </a>
                                    <br />
                                    <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> Feb 14 at 12am |
                                    <br />
                                    <b>Due</b> Mar 12 at 11:59pm | -/100 pts
                                </Col>
                                <Col xs="auto">
                                    <LessonControlButtons />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
