import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [quiz, setQuiz] = useState<any>({});
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    useEffect(() => {
        setQuiz(
            quizzes.find((quiz: any) => quiz._id === qid)
        );
        console.log(quizzes, qid);
    }, [qid]);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        });
    }

    return (
        <div id="wd-quiz-details" className="d-flex flex-column align-items-center justify-content-center">

            <div style={{ width: '80rem' }} className="mx-auto">

                <h4 className="mt-3">{quiz.title}</h4>

                <hr style={{ borderBottom: '2px solid #dee2e6' }} />

                {currentUser && currentUser.role === "FACULTY" && quiz && (
                    <table className="table table-borderless mt-2 mb-3" style={{ borderBottom: '2px solid #dee2e6' }}>
                        <tr>
                            <th className="text-end w-50 pe-4">Quiz Type</th>
                            <td>{quiz.quizType}</td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">Points</th>
                            <td>{quiz.points}</td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">Assignment Group</th>
                            <td>{quiz.assignmentGroup}</td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">Shuffle Answers</th>
                            <td>{quiz.shuffleAnswers}</td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">Time Limit</th>
                            <td>{quiz.timeLimit}</td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">Multiple Attempts</th>
                            <td>{quiz.multipleAttempts}</td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">How Many Attempts</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">Show Correct Answers</th>
                            <td>{quiz.showCorrectAnswers}</td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">Access Code</th>
                            <td>{quiz.accessCode || "None"}</td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">One Question At A Time</th>
                            <td>{quiz.oneQuestionAtATime}</td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">Webcam Required</th>
                            <td>{quiz.webcamRequired}</td>
                        </tr>
                        <tr>
                            <th className="text-end pe-4">Lock Questions After Answering</th>
                            <td>{quiz.lockQuestionsAfterAnswering}</td>
                        </tr>

                    </table>
                )}



                <table className="table">
                    <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                        <th>Due Date</th>
                        <th>Available Date</th>
                        <th>Until Date</th>
                    </tr>
                    <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                        <td>{formatDate(quiz.dueDate)} at 11:59pm</td>
                        <td>{formatDate(quiz.availableDate)} at 11:59pm</td>
                        <td>{formatDate(quiz.untilDate)} at 11:59pm</td>
                    </tr>
                </table>


            </div>

            <div className="mt-4">
                {currentUser && currentUser.role === "FACULTY" && (
                    <>
                        <Button className="me-2" variant="secondary" href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/Preview`} id={`wd-quiz-preview-btn`}>
                            Preview
                        </Button>
                        <Button className="me-2" variant="secondary" href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}/Edit`} id={`wd-quiz-edit-btn`}>
                            <FaPencilAlt className="me-2 fs-6 mb-1" />
                            Edit
                        </Button>
                    </>
                )}

                {currentUser && currentUser.role === "STUDENT" && (
                    <Button className="me-2" variant="secondary" href={`#/Kambaz/Courses/${cid}/Quizzes/${qid}`} id={`wd-quiz-start-btn`}>
                        Start Quiz
                    </Button>
                )}
            </div>
        </div>
    );
}