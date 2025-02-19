import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { Col, ListGroup, Row } from "react-bootstrap";
import GreenEdit from "./GreenEdit";
import { IoIosArrowDown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { assignments } from "../../Database";

export default function Assignments() {
    const { cid } = useParams();


    return (
        <div id="wd-assignments">

            <AssignmentControls /><br /><br /><br /><br />

            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <IoIosArrowDown />
                ASSIGNMENTS
                <AssignmentControlButtons />
            </div>
            <ListGroup id="wd-assignment-list" className="rounded-0">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">

                    {assignments
                        .filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
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
                                            <a href={`#/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`} className="wd-assignment-link" >
                                                {assignment.title}
                                            </a>
                                            <br />
                                            <span style={{ color: 'red' }}>Multiple Modules</span> |
                                            <br />
                                            <b>Due</b> Jan 22 at 11:59pm | -/{assignment.points} pts
                                        </Col>
                                        <Col xs="auto">
                                            <LessonControlButtons />
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        ))
                    }
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
