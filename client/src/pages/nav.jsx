import { Link } from "react-router-dom";

const  Navigate = () => {

  return (
    <>
      <nav style={{margin: 0,padding: 0}}>
        <ul style={{listStyleType:"none", margin:0, padding:0, overflow:"hidden", backgroundColor:"#333"}}>
          <li style={{float:"right", display:"block", color:"white", textAlign:"center", padding:"14px 16px", textDecoration:"none"}}>
            <Link to="/" style={{textDecoration:"none",  fontSize:"120%"}}>Log out</Link>
          </li>
          <li style={{float:"right", display:"block", color:"white", textAlign:"center", padding:"14px 16px", textDecoration:"none"}}>
            <Link to="/login" style={{textDecoration:"none",  fontSize:"120%"}}>Log In</Link>
          </li>
          <li style={{float:"right", display:"block", color:"white", textAlign:"center", padding:"14px 16px", textDecoration:"none"}}>
            <Link to="/registration" style={{textDecoration:"none",  fontSize:"120%",}}>Sign Up</Link>
          </li>
          <li style={{float:"right", display:"block", color:"white", textAlign:"center", padding:"14px 16px", textDecoration:"none"}}>
            <Link to="/" style={{textDecoration:"none",  fontSize:"120%"}}>Home</Link>
          </li>
        <span style={{float:"left", marginRight:"50%", backgroundImage:`url(${require("../Assets/logow-removebg-preview.png")})`, backgroundRepeat:"no-repeat",backgroundSize:"cover", width:50, height:50}}></span>
        </ul>
      </nav>
    </>
  )
};

export default Navigate;