import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function QuizPreview() {
    const { qid } = useParams();

    const [quiz, setQuiz] = useState<any>({});
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    useEffect(() => {
        setQuiz(
            quizzes.find((quiz: any) => quiz._id === qid)
        );
        console.log(quizzes, qid);
    }, [qid]);

    return (
        <div>
            <h4 className="mt-3 mb-3">{quiz.title}</h4>

            <ListGroup className="w-75 d-flex gap-2 border-0 mb-2 rounded-3"
                style={{
                    backgroundColor: "#fff5f5",
                    boxShadow: "0 0 8px rgba(255, 0, 0, 0.2)",
                }}>
                <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 bg-transparent text-danger">
                    This is a preview
                </ListGroup.Item>
            </ListGroup>
        </div>

    );
}