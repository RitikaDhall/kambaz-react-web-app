import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

export default function QuizControlButtons({quiz, handleDelete, handleEdit, handlePublish} : {
    quiz: any;
    handleDelete: (quizId: string) => void;
    handleEdit: (quizId: string) => void;
    handlePublish: (quizId: string, publish: boolean) => void;
}) {

    return (
        <div id="wd-quiz-control-btns" className="d-flex justify-content-end align-items-center mt-2 gap-1">
            <FaCheckCircle className="text-success fs-4 me-3 mt-1" />

            <Dropdown align="end">
                <Dropdown.Toggle as="span" className="fs-4 p-1" bsPrefix="custom-toggle">
                    <IoEllipsisVertical />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleEdit(quiz)}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete(quiz._id)}>Delete</Dropdown.Item>
                    <Dropdown.Item onClick={() => handlePublish(quiz._id, !quiz.published)}>
                        {quiz.published? "Unpublish": "Publish"}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}