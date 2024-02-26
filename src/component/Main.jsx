
import "./Main.css";
import { Link } from "react-router-dom";

export default function Main() {



  return (
    <div>
      <div className="main-container">
        <div className="content">
          <h1>INDORI ISHQ</h1>
          <h3>India's no. 1 friend finder App</h3>
          <p>Who are you looking for,</p>
          <div className="btn2">
            <Link to = '/Girl' className="btn">FEMALE FRIEND</Link>
            <Link to = '/Boy' className="btn">MALE FRIEND</Link>
          </div>
        </div>
      </div>  
    </div>
  );
}
