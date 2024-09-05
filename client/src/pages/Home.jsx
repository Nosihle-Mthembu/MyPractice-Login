
function Home(){
    return (<>
        <div className="home" style={{padding:50,display:"grid",gridTemplateColumns:"auto auto"}}>
            <div>
            <h1 className="HomeFontColor" style={{fontSize:80}}>TO-DO</h1>
            <h1  className="FontNameList"v style={{fontSize:80}}> LIST</h1>
            <p className="HomeFontColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div style={{backgroundImage:`url(${require("../Assets/6b1c88d705fced6e33432e2e0c55491e-removebg-preview.png"
            )})`,backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            width:700,
            height:600}}>
            </div>  
        </div>
    </>
    )
  };
  
  export default Home;