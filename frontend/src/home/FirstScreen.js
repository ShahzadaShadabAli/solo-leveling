import { NavLink, Outlet } from "react-router-dom";

const FirstScreen = () => {
    return (
        <div className="main-section" style={{backgroundColor: "black"}}>
                {<Outlet />}
                <video autoPlay loop muted width="100%" height="90%">
                    <source src="/videos/main-vid.mp4" type="video/mp4"/>
                </video>
        </div>
    );
}
 
export default FirstScreen;