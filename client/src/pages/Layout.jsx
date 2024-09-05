import { Outlet} from "react-router-dom";
import Footer from "./footer";
import Navigate from "./nav";

function Layout(){
  return (
    <>
      <Navigate/>
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;