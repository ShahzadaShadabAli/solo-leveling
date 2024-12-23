import useAuthContext from "../hooks/useAuthContext";

const FirstScreen = () => {
    return (
        <div className="FirstScreen">
            <div className="d-card">
                <div className="d-card-content">
                    <div className="card-top">
                        <span className="d-card-title ">Fights Log</span>
                        <p className="">Fights: 100</p>
                    </div>
                    <div className="card-bottom ">
                        <p className="">Won: 23</p>
                        <svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path></svg>                    </div>
                </div>
                <div className="d-card-image mt-2">
                    <img src="/images/broken-sword.png" width={30} alt="" />
                </div>
            </div>
            <div className="d-mine-card">
                <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-center m-0">Gold</h5>
                        <h6 className="poppins-large m-0">45/h</h6>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                    </div>
                </div>
                <div className="mb-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-center m-0">Chu</h5>
                        <h6 className="poppins-large m-0">45/h</h6>
                    </div>
                    <div className="progress">
                        <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                    </div>
                </div>
            </div>
            <video autoPlay loop muted width="100%" height="90%">
                <source src="/videos/home-vid.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default FirstScreen;