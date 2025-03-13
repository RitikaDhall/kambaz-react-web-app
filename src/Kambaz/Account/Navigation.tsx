import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const pathname = useLocation().pathname;

    return (
        <ListGroup id="wd-account-navigation" className="wd fs-5 rounded-0">
            
            {links.map((link) => (
                <ListGroup.Item key={link} to={`/Kambaz/Account/${link}`} as={Link} id={`wd-account-${link.toLowerCase()}-link`} className={`border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
                    {link}
                </ListGroup.Item>
            ))}

        </ListGroup>
    );
}
