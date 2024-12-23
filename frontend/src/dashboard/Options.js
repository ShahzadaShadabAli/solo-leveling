import useAuthContext from "../hooks/useAuthContext";
import { Link } from "react-router-dom"

const Options = () => {
    const { state } = useAuthContext()
    console.log(state)
    return (
        <div className="options">
            <div className="user-data-bubble">
                <img src="/images/sword.png" width={40} alt="" />
                <div className="text">
                    <h6>{state.user && state.user.name} {state.user && state.user.user.lvl}</h6>
                    <div className="d-flex align-items-center gap-2">
                    <div className="progress xp-progress-bar">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${state.user && (state.user.user.xp/state.user.user.nextXp) * 100}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="poppins">{state.user && state.user.user.xp} / {state.user && state.user.user.nextXp}</div>
                    </div>
                </div>
            </div>
           {state.user && <Link to={"/fight/"+state.user.user.stage}>
                <div className="fight-con">
                    <img src="/images/knight.png" width={60} alt="" />
                    <h5 className="text-light mb-0 text-center">Fight</h5>
                </div>
            </Link>}
        </div>
    );
}

export default Options;