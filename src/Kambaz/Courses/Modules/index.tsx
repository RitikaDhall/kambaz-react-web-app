export default function Modules() {
    return (
        <div>
            {/* Implement Collapse All button, View Progress button, etc. */}
            <div id="wd-module-btns">
                <button>Collapse All</button> <button>View Progress</button> <select>
                    <option>Publish All</option>
                    <option>Unpublish All</option>
                </select> <button>+ Module</button>
            </div>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Lecture 1 - Building React User Interfaces with HTML, Assignment 1, Setting Up the Development Environment, Introduction to HTML
                    </div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                                <li className="wd-content-item">Setting up the Development Environment</li>
                                <li className="wd-content-item">Getting started with the Assignment 1</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Developing Full Stack MERN Web Applications - Chapter 1 - Building React User Interfaces with HTML</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title"> Lecture 2 - Prototyping the React Kambaz User Interface with HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Keep working on assignment 1</li>
                                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Developing Full Stack MERN Web Applications - Chapter 1 - Building React User Interfaces with HTML</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Implementing the Kambaz Account Screens</li>
                                <li className="wd-content-item">Implementing the Kambaz Dashboard Screen</li>
                                <li className="wd-content-item">Implementing the Kambaz Courses Screen</li>
                                <li className="wd-content-item">Implementing the Kambaz Modules Screen</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title"> Lecture 3 - Styling Web Pages with CSS and Bootstrap, Assignment 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to CSS</li>
                                <li className="wd-content-item">Selectors by tag ID, classes, and document structure</li>
                                <li className="wd-content-item">Styling color and background color</li>
                                <li className="wd-content-item">Styling dimensions and positions</li>
                                <li className="wd-content-item">The box model - styling margins, borders, and paddings</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Developing Full Stack MERN Web Applications - Chapter 2 - Styling Web Pages with CSS</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Cascading Style Sheets</li>
                                <li className="wd-content-item">Styling with Colors</li>
                                <li className="wd-content-item">The Box Model</li>
                                <li className="wd-content-item">Rotating content & Gradient background</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
