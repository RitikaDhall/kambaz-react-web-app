export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input placeholder="Search for Assignments" id="wd-search-assignment" />&nbsp;
            <button id="wd-add-assignment-group">+ Group</button>&nbsp;
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total <button>+</button> </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/1" className="wd-assignment-link" >
                        A1 - ENV + HTML
                    </a>
                    <br />
                    <b>Due</b> Jan 22 at 11:59pm | -/100 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/2" className="wd-assignment-link" >
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <br />
                    <b>Not available until</b> Jan 17 at 12am | <b>Due</b> Feb 5 at 11:59pm | -/100 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/3" className="wd-assignment-link" >
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <br />
                    <b>Not available until</b> Jan 31 at 12am | <b>Due</b> Feb 19 at 11:59pm | -/100 pts
                </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/4" className="wd-assignment-link" >
                        A4 - NODE + MONGO.DB
                    </a>
                    <br />
                    <b>Not available until</b> Feb 14 at 12am | <b>Due</b> Mar 12 at 11:59pm | -/100 pts
                </li>
            </ul>
        </div>
    );
}
