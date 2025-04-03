import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FacultyRoute from "./Account/FacultyRoute";
import { useEffect, useState } from "react";
import { addNewCourse, deleteCourse, updateCourse, enrollCourse, unenrollCourse } from "./Courses/reducer";
import * as userClient from "./Account/client";
import * as coursesClient from "./Courses/client";
import * as enrollmentsClient from "./Courses/enrollmentsClient";

export default function Dashboard({ courses }: { courses: any[] }) {
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.coursesReducer);

    const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
    });

    const [showEnrolled, setShowEnrolled] = useState(true);

    const createCourse = async (course: any) => {
        const newCourse = await userClient.createCourse(course);
        dispatch(addNewCourse(newCourse));
        // setCourses([...courses, newCourse]);
    };

    const removeCourse = async (courseId: string) => {
        await coursesClient.deleteCourse(courseId);
        dispatch(deleteCourse(courseId));
        // setCourses(courses.filter((course) => course._id !== courseId));
    };

    const saveCourse = async (course: any) => {
        await coursesClient.updateCourse(course);
        dispatch(updateCourse(course))
    };

    const enrollInCourse = async (userId: string, courseId: string) => {
        await enrollmentsClient.enrollInCourse(userId, courseId);
        dispatch(enrollCourse({ userId, courseId }));
    }

    const unenrollFromCourse = async (userId: string, courseId: string) => {
        await enrollmentsClient.unenrollFromCourse(userId, courseId);
        dispatch(unenrollCourse({ userId, courseId }));
    }

    const isEnrolled = (courseId: any) => {
        return enrolledCourses.some((course: any) =>
            course._id === courseId
        );
    };

    const fetchMyCourses = async () => {
        try {
            const enrolledCourses = await userClient.findMyCourses();
            console.log("Enrolled courses:", enrolledCourses);
            setEnrolledCourses(enrolledCourses);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchMyCourses();
    }, [currentUser, courses, enrollments]);

    return (
        <div id="wd-dashboard" className="p-4">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

            <FacultyRoute>
                <h5>
                    New Course
                    <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={() => createCourse(course)} >
                        Add
                    </button>
                    <button className="btn btn-warning float-end me-2"
                        onClick={() => saveCourse(course)} id="wd-update-course-click">
                        Update
                    </button>
                    <br /><br />
                    <Form.Control value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <Form.Control value={course.description} as="textarea" rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                </h5>
                <hr />
            </FacultyRoute>

            <h2 id="wd-dashboard-published">
                Published Courses ({(showEnrolled ? enrolledCourses : courses).length})
                <Button className="float-end me-2" variant="primary"
                    onClick={() => setShowEnrolled(!showEnrolled)}>
                    Enrollments
                </Button>
            </h2>
            <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">

                    {(showEnrolled ? enrolledCourses : courses)
                        .map((course: any) => (
                            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                <Card>
                                    <Link to={`/Kambaz/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark" >
                                        <Card.Img src={course.image} variant="top" width="100%" height={160} />
                                        <Card.Body className="card-body">
                                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                                            <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{course.description}</Card.Text>

                                            <Button variant="primary" className="float-start mb-3" hidden={isEnrolled(course._id) ? (false) : (true)}>Go</Button>

                                            {showEnrolled ? (
                                                <FacultyRoute>
                                                    <Button onClick={(event) => {
                                                        event.preventDefault();
                                                        removeCourse(course._id);
                                                    }} className="float-end"
                                                        variant="danger"
                                                        id="wd-delete-course-click">
                                                        Delete
                                                    </Button>
                                                    <Button id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        variant="warning"
                                                        className="me-2 float-end" >
                                                        Edit
                                                    </Button>
                                                </FacultyRoute>
                                            ) : (
                                                <Button
                                                    className="float-end mb-3" variant={isEnrolled(course._id) ? "danger" : "success"}
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        if (isEnrolled(course._id)) {
                                                            unenrollFromCourse(currentUser._id, course._id);
                                                        } else {
                                                            enrollInCourse(currentUser._id, course._id);
                                                        }
                                                    }}>
                                                    {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                                                </Button>
                                            )}
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    );
}
