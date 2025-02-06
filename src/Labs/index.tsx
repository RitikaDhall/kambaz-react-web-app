import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>My Info</h1>
      <p>
        Name: Ritika Pankaj Dhall<br />
        Section: 01<br />
        Source code GitHub repository: <a href="https://github.com/RitikaDhall/kambaz-react-web-app">My GitHub Repository</a>
      </p>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
