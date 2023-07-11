import { Link } from "react-router-dom";
import { MouseEvent } from "react";
import "./App.css";

function App() {
  const handleLeaveClick = (e: MouseEvent) => {
    e.preventDefault();
    alert("You are leaving this evil place...");
  };
  return (
    <div className="container">
      <h2>ISSUR</h2>
      <p>Rails/React Trello clone</p>
      <Link to={"user-dashboard"}>
        <button type="button">Get Started</button>
      </Link>
      <button onClick={(e) => handleLeaveClick(e)} type="button">
        Leave This Evil Place
      </button>
    </div>
  );
}

export default App;
