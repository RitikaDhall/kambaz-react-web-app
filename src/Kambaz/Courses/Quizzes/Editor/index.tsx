import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import DetailsEditor from "./DetailsEditor";
import QuestionsEditor from "./QuestionsEditor";

export default function QuizEditor() {
    const location = useLocation();
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const { cid, qid } = useParams();

    const newQuiz = {
        title: "New Quiz",
        description: "New description",
        course: cid,
        points: 100,
        // dueDate: new Date(),
        // availableDate: new Date(),
        // untilDate: new Date(),
    }

    const [quiz, setQuiz] = useState<any>({});
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);

    useEffect(() => {
        setQuiz(
            location.pathname.includes("New")
                ? newQuiz
                : quizzes.find((quiz: any) => quiz._id === qid)
        );
    }, []);

    // const [quiz, setQuiz] = useState({
    //     _id: qid,
    //     title: "",
    //     description: "",
    //     quizType: "",
    //     points: 0,
    //     assignmentGroup: "",
    //     shuffleAnswers: "",
    //     timeLimit: "",
    //     multipleAttempts: "",
    //     showCorrectAnswers: "",
    //     accessCode: "",
    //     oneQuestionAtATime: "",
    //     webcamRequired: "",
    //     lockQuestionsAfterAnswering: "",
    //     dueDate: "",
    //     availableDate: "",
    //     untilDate: "",
    //     published: false,
    //     course: { type: "", ref: "CourseModel" },
    // });

    // // useEffect fetch by ID
    // const fetchQuizByID = async () => {
    //     try {
    //         if (qid) {
    //             const quiz = await quizClient.fetchQuizById(qid);
    //             setQuiz(quiz);
    //         } else {
    //             console.error("Quiz ID is undefined.");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // useEffect(() => {
    //     fetchQuizByID();
    // }, [qid]);

    return (
        <div>

            <div className="mb-2 me-4 d-flex justify-content-end">
                <h5 className="me-4">Points {quiz.points}</h5>
                <h5 className="me-2">{quiz.published ? ("Published") : ("Not published")}</h5>
            </div>

            <hr />

            <Tabs
            defaultActiveKey="details"
            className="mb-3"
        >
            <Tab eventKey="details" title="Details">
                <DetailsEditor quiz={quiz} setQuiz={setQuiz}/>
            </Tab>
            <Tab eventKey="questions" title="Questions">
                <QuestionsEditor />
            </Tab>
        </Tabs>
        </div>
    );
}