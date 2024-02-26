
import "./Main.css";
import { Link } from "react-router-dom";

export default function Main() {



  return (
    <div>
      <div className="main-container">
        <div className="content">
          <h1>LOVE GURU</h1>
          <h3>India's No.1 Dating App</h3>
          <p>Who are you looking for,</p>
          <div className="btn2">
            <Link to = '/Girl' className="btn">FEMAIL FRIEND</Link>
            <Link to = '/Boy' className="btn">MAIL FRIEND</Link>
          </div>
        </div>
      </div>  
    </div>
  );
}
