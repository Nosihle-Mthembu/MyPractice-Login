import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  let myIndex = 0;

  useEffect(() => {
    function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      if (myIndex >= x.length) { myIndex = 0 }    
      x[myIndex].style.display = "block";  
      myIndex++;
      setTimeout(carousel, 5000); // Change image every 2 seconds
    }
    carousel()
  }, []);

    return (<>

        <div style={{position:"relative"}}>
            <h1 className="HomeFontColor" style={{fontSize:80, position:"absolute", marginLeft: 500, marginTop:270}}>TO-DO <span className="FontNameList">LIST</span></h1>
            <button className="w3-btn  w3-padding-small w3-round-large" style={{backgroundColor:"transparent", border:"1px solid white", position:"absolute", marginLeft: 660, marginTop:375}}>
                <Link to="Login" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}> Let's Go...</Link>
            </button>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_e7yt0ze7yt0ze7yt.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_e7yt10e7yt10e7yt.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_e7yt16e7yt16e7yt.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_k47tg0k47tg0k47t.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_k47tg6k47tg6k47t.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_k47tg7k47tg7k47t.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            
            <div className="home" style={{padding:50,display:"grid", gridTemplateColumns:"auto auto"}}>
                <div>
                    <h1 className='about' style={{fontSize:80, marginLeft:160, marginTop:50}}>About</h1>
                    <hr className='horizontal'/>
                    <p className="AboutFontColor" style={{marginTop:50}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="w3-btn w3-padding-small w3-round-large" style={{backgroundColor:"transparent", marginTop:10, border: "1px solid #D9A944"}}>
                        <Link to="Login" style={{textDecoration:"none",fontWeight:"bold", color:"rgb(146, 129, 235)"}}> Let's Go</Link>
                    </button>
                </div>
                <div style={{backgroundImage:`url(${require("../Assets/6b1c88d705fced6e33432e2e0c55491e-removebg-preview.png"
                )})`,backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                width:700,
                height:600}}>
                </div>  
            </div>
        </div>
    </>
    )
  };
  
  export default Home;