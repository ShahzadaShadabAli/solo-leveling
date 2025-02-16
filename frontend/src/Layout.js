import { Outlet } from "react-router-dom";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            {<Outlet />}
            <Footer />
        </div>
    );
}
 
export default Layout;