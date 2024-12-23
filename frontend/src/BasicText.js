import { NavLink } from "react-router-dom";

const BasicText = () => {
    return (
        <div className="main-text">
            <h1 style={{ fontSize: 100 }}>Level Up Alone</h1>
            <h1 style={{ fontSize: 100, marginTop: 20 }}>Alone To The Top</h1>
            <h1 style={{ marginTop: 30 }}><NavLink>Login</NavLink> or <NavLink>Sign Up</NavLink> to Play Right Now</h1>
        </div>
    );
}

export default BasicText;