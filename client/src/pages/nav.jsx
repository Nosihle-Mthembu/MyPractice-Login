import { Link } from "react-router-dom";

const  Navigate = () => {



  return (
    <>
      <nav style={{margin: 0,padding: 0,}}>
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none",  fontSize:"120%"}}>Home</Link>
          </li>
          <li>
            <Link to="/login" style={{textDecoration:"none",  fontSize:"120%"}}>Log In</Link>
          </li>
          <li>
            <Link to="/registration" style={{textDecoration:"none",  fontSize:"120%",}}>Sign Up</Link>
          </li>
        <span style={{float:"right", marginRight:"50%", backgroundImage:`url(${require("../Assets/logow-removebg-preview.png")})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", width:50, height:50}}></span>
        </ul>
      </nav>
    </>
  )
};

export default Navigate;