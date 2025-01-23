export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name" ><strong>Assignment Name</strong></label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                Complete all the Lab exercises and Kambaz exercises described in Chapter 1 of
                Developing Full Stack MERN Web Applications.
                Submit a link to the landing page of your Web application running on Netlify.
                The landing page should be the Kambaz application with a link to the Lab exercises.
                Lab 1 should be the landing page of the Lab exercises and should include the following:
                - Your full name and section
                - Links to each of the lab assignments
                - Link to the Kambaz application
                - Links to all relevant source code repositories
                The Kambaz application should include a link to navigate back to the landing page.
            </textarea>
            <br /><br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select name="wd-group" id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select name="wd-display-grade-as" id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Letter">Letter</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select name="wd-submission-type" id="wd-submission-type">
                            <option value="Online">Online</option>
                            <option value="Pen and paper">Pen and paper</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td />
                    <td>
                        <label>Onine Entry Options</label>
                        <tr>
                            <td>
                                <input type="checkbox" name="wd-online-entry-options" id="wd-text-entry" value="TEXT ENTRY" />
                                <label htmlFor="wd-text-entry">Text Entry</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" name="wd-online-entry-options" id="wd-website-url" value="WEBSITE URL" />
                                <label htmlFor="wd-website-url">Website URL</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" name="wd-online-entry-options" id="wd-media-recordings" value="MEDIA RECORDINGS" />
                                <label htmlFor="wd-media-recordings">Media Recordings</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" name="wd-online-entry-options" id="wd-student-annotation" value="STUDENT ANNOTATIONS" />
                                <label htmlFor="wd-student-annotation">Student Annotation</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" name="wd-online-entry-options" id="wd-file-upload" value="FILE UPLOAD" />
                                <label htmlFor="wd-file-upload">File Uploads</label>
                            </td>
                        </tr>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label>Assign</label>
                    </td>
                    <td>
                        <tr>
                            <td align="left" valign="top">
                                <label htmlFor="wd-assign-to">Assign to</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" id="wd-assign-to" value="Everyone" />
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td align="left" valign="top">
                                <label htmlFor="wd-due-date">Due</label><br />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="date" id="wd-due-date" value="2025-01-22" />
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <label htmlFor="wd-available-from">Available from</label>
                            </td>
                            <td>
                                <label htmlFor="wd-available-until">Until</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="date" id="wd-available-from" value="2025-01-02" />
                            </td>
                            <td>
                                <input type="date" id="wd-available-until" value="2025-01-22" />
                            </td>
                        </tr>
                    </td>
                </tr>
            </table>
            <hr />
            <div style={{ textAlign: 'right' }}>
                <button id="wd-cancel-assignment">Cancel</button>&nbsp;
                <button id="wd-save-assignment">Save</button>
            </div>
        </div>
    );
}
