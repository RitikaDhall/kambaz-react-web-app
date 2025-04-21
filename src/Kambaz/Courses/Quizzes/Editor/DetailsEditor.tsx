import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function DetailsEditor({ quiz, setQuiz }: {
    quiz: any;
    setQuiz: (quiz: any) => void;
}) {
    const { cid } = useParams();
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const createQuizForCourse = async (quiz: any) => {
        if (!cid) return;
        console.log(quiz);
        // const assign = await coursesClient.createAssignmentForCourse(cid, quiz);
        // dispatch(addAssignment(assign));
    };

    const saveQuiz = async (quiz: any) => {
        console.log(quiz);
        // await assignmentsClient.updateAssignment(quiz);
        // dispatch(updateAssignment(quiz));
    };

    const handleSave = (quiz: any) => {
        if (location.pathname.includes("New")) {
            createQuizForCourse(quiz);
        }
        else {
            saveQuiz(quiz);
        }
        navigate(`/Kambaz/Courses/${cid}/Quizzes`);
    }

    return (
        <Form id="wd-quiz-details-editor">
            <div>
                <FormGroup className="mb-2">
                    <FormLabel htmlFor="wd-quiz-title">Quiz Title</FormLabel>
                    <FormControl id="wd-quiz-title"
                        value={quiz?.title}
                        onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, title: e.target.value }))}
                    />
                </FormGroup>

                <FormGroup className="mb-2">
                    <FormLabel htmlFor="wd-quiz-description">Quiz Instructions:</FormLabel>
                    <FormControl as="textarea" id="wd-quiz-description" rows={5}
                        defaultValue={quiz?.description}
                        onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, description: e.target.value }))}
                    />
                </FormGroup>

                {/* <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="4" htmlFor="wd-points" className="text-sm-end">
                        Points
                    </FormLabel>
                    <Col sm="8">
                        <FormControl id="wd-points"
                            value={quiz?.points}
                            onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, points: e.target.value }))}
                        />
                    </Col>
                </FormGroup> */}

                <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="4" htmlFor="wd-quiz-type" className="text-sm-end">
                        Quiz Type
                    </FormLabel>
                    <Col sm="4">
                        <FormSelect id="wd-quiz-type" name="wd-quiz-type"
                            defaultValue={quiz?.quizType}
                            onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, quizType: e.target.value }))}
                        >
                            <option value="GRADED_QUIZ">Graded Quiz</option>
                            <option value="PRACTICE_QUIZ">Practice Quiz</option>
                            <option value="GRADED_SURVEY">Graded Survey</option>
                            <option value="UNGRADED_SURVEY">Ungraded Survey</option>
                        </FormSelect>
                    </Col>
                </FormGroup>

                <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="4" htmlFor="wd-group" className="text-sm-end">
                        Assignment Group
                    </FormLabel>
                    <Col sm="4">
                        <FormSelect id="wd-group" name="wd-group"
                            defaultValue={quiz?.assignmentGroup}
                            onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, group: e.target.value }))}
                        >
                            <option value="quizzes">QUIZZES</option>
                            <option value="assignments">ASSIGNMENTS</option>
                            <option value="exams">EXAMS</option>
                            <option value="project">PROJECT</option>
                        </FormSelect>
                    </Col>
                </FormGroup>

                <Row className="mb-2">
                    <Col sm="4" />
                    <Col sm="8">
                        <p className="mb-2"><strong>Options</strong></p>
                        <FormCheck className="mb-2" id="wd-shuffle-answers" name="wd-shuffle-answers" label="Shuffle Answers" value="SHUFFLE" />
                        <FormCheck className="mb-2" id="wd-time-limit" name="wd-time-limit" label="Time Limit" value="WEBSITE URL" />
                        <FormCheck className="mb-2" id="wd-multiple-attempts" name="wd-multiple-attempts" label="Allow Multiple Attempts" value="MEDIA RECORDINGS" />
                        <FormCheck className="mb-2" id="wd-one-question" name="wd-one-question" label="One Question at a Time" value="SHUFFLE" />
                        <FormCheck className="mb-2" id="wd-webcam-req" name="wd-webcam-req" label="Webcam Required" value="WEBSITE URL" />
                        <FormCheck className="mb-2" id="wd-lock-questions" name="wd-lock-questions" label="Lock Questions After Answering" value="WEBSITE URL" />
                    </Col>
                </Row>

                <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="4" htmlFor="wd-show-correct-answers" className="text-sm-end">
                        Show Correct Answers
                    </FormLabel>
                    <Col sm="4">
                        <FormSelect id="wd-show-correct-answers" name="wd-show-correct-answers"
                            defaultValue={quiz?.showCorrectAnswers}
                            onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, showCorrectAnswers: e.target.value }))}
                        >
                            <option value="GRADED_QUIZ">No</option>
                            <option value="PRACTICE_QUIZ">Immediately after submit</option>
                            <option value="GRADED_SURVEY">After grade released</option>
                            <option value="UNGRADED_SURVEY">Ungraded Survey</option>
                        </FormSelect>
                    </Col>
                </FormGroup>

                <FormGroup className="mb-2">
                    <FormLabel column sm="4" htmlFor="wd-access-code">Access code</FormLabel>
                    <FormControl as={Col} sm="8" id="wd-access-code"
                        value={quiz?.accessCode}
                        onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, accessCode: e.target.value }))}
                    />
                </FormGroup>

                <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="4" className="text-sm-end">
                        Assign
                    </FormLabel>
                    <Col sm="8">
                        {/* <FormLabel htmlFor="wd-assign-to" >Assign to</FormLabel>
                    <FormControl id="wd-assign-to"
                        value={quiz?.assignedTo}
                        onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, assignedTo: e.target.value }))}
                    /> */}

                        <FormLabel htmlFor="wd-due-date" >Due</FormLabel>
                        <FormControl type="date" id="wd-due-date"
                            value={quiz?.dueDate}
                            onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, dueDate: e.target.value }))}
                        />

                        <Row className="mb-2">
                            <Col>
                                <FormLabel htmlFor="wd-available-from" >Available from</FormLabel>
                                <FormControl type="date" id="wd-available-from"
                                    value={quiz?.availableDate}
                                    onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, availableDate: e.target.value }))}
                                />
                            </Col>
                            <Col>
                                <FormLabel htmlFor="wd-available-until" >Until</FormLabel>
                                <FormControl type="date" id="wd-available-until"
                                    value={quiz?.untilDate}
                                    onChange={(e) => setQuiz((prevState: any) => ({ ...prevState, untilDate: e.target.value }))}
                                />
                            </Col>

                        </Row>
                    </Col>
                </FormGroup>

                <hr />

                <div className="float-end mb-2 me-1">
                    <Link to={`/Kambaz/Courses/${cid}/Quizzes`} className="btn btn-secondary me-2">Cancel</Link>
                    <Button onClick={() => handleSave(quiz)} className="me-2" variant="danger">Save</Button>
                </div>
            </div>
        </Form>
    );
}