import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <Form.Control id="wd-username-profile" defaultValue="alice" placeholder="username" className="mb-2" />
            <Form.Control id="wd-password-profile" defaultValue="123" placeholder="password" type="password" className="mb-2" />
            <Form.Control id="wd-firstname" defaultValue="Alice" placeholder="First name" className="mb-2" />
            <Form.Control id="wd-lastname" defaultValue="Wonderland" placeholder="Last name" className="mb-2" />
            <Form.Control id="wd-dob" type="date" defaultValue="2000-01-01" className="mb-2" />
            <Form.Control id="wd-email" defaultValue="alice@wonderland" placeholder="email" type="email" className="mb-2" />
            <Form.Select defaultValue="FACULTY" id="wd-role" className="mb-2" >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </Form.Select>

            <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2" >Sign out</Link>
        </div>
    );
}
