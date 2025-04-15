import { Button } from "react-bootstrap";
// import { useParams } from "react-router";

export default function QuizDetails() {
    // onst {qid} = useParams();

    return (
        <div id="wd-quiz-details">
            {/* <Button className="me-2" href={`#/Kambaz/Courses/${quiz.course}/Quizzes/${qid}`}>Edit</Button> */}
            <Button className="me-2">Preview</Button>
            <Button>Start</Button>
        </div>
    );
}