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
      setTimeout(carousel, 5000);
    }
    carousel()
  }, []);

    return (<>

        <div style={{position:"relative"}}>
            <h1 className='HomeFontColor' style={{fontSize:80, position:"absolute", WebkitTextStroke:"1px white",marginLeft: 500, marginTop:270}}>TO-DO LIST</h1>
            <button className="w3-btn  w3-padding-small w3-round-large" style={{backgroundColor:"transparent", border:"1px solid white", position:"absolute", marginLeft: 660, marginTop:375}}>
                <Link to="registration" style={{textDecoration:"none", color:"white", fontWeight:"bold"}}> Let's Go...</Link>
            </button>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_e7yt0ze7yt0ze7yt.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_e7yt10e7yt10e7yt.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_e7yt16e7yt16e7yt.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_k47tg0k47tg0k47t.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_k47tg6k47tg6k47t.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            <div className="mySlides" style={{backgroundImage:`url(${require("../Assets/Gemini_Generated_Image_k47tg7k47tg7k47t.jfif")})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  height:730}}></div>
            
            <div style={{padding:50,display:"grid", gridTemplateColumns:"auto auto", backgroundColor:"#e6e6e6"}}>
                <div>
                    <h1 style={{fontSize:80, marginLeft:160, marginTop:50, color:"#392074"}}>About</h1>
                    <hr style={{borderTop:"1px solid #D9A944"}}/>
                    <p style={{marginTop:50, color: "rgb(146, 129, 235)", fontSize:"130%"}}>The To-Do List Application is a simple and intuitive task management tool designed to help users stay organized and productive. With this app, users can create, edit, prioritize, and delete tasks based on their importance. The app's user-friendly interface ensures that you can quickly add new tasks, search through existing ones, and manage your daily activities with ease. Whether you're managing a work project, organizing daily errands, or planning a personal event, the To-Do List Application is the perfect companion to stay on top of your tasks and boost your productivity.</p>
                    <button className="w3-btn w3-padding-small w3-round-large" style={{backgroundColor:"transparent", marginTop:10, border: "1px solid #D9A944",color:"rgb(61, 37, 121)"}}>
                        <Link to="registration" style={{textDecoration:"none",fontWeight:"bold", color:"rgb(146, 129, 235)"}}> Let's Go</Link>
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