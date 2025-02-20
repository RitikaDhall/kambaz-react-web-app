import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import GreenEdit from "./GreenEdit";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { assignments } from "../../Database";
import { useState } from "react";

export default function Assignments() {
    const { cid } = useParams();
    const [isExpanded, setIsExpanded] = useState(true);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        });
    }

    return (
        <div id="wd-assignments">

            <AssignmentControls /><br /><br /><br /><br />

            <ListGroup id="wd-assignment-list" className="rounded-0">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <Button
                            variant="link"
                            className="p-0 text-black"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                        </Button>
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                    {isExpanded &&
                        assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <ListGroup className="wd-lessons rounded-0" key={assignment._id}>
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
                                                {
                                                    assignment.availableFromDate > new Date().toISOString() ?
                                                        <span> <b>Not available until</b> {formatDate(assignment.dueDate)} at 12:00am |</span> :
                                                        ""
                                                }
                                                <br />
                                                <b>Due</b> {formatDate(assignment.dueDate)} at 11:59pm | -/{assignment.points} pts
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
