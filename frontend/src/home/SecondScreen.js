import {Col, Row} from "react-bootstrap"


const SecondScreen = () => {
    return (
        <div className="second-screen">
            <h1 className="text-center py-5" style={{ fontSize: 60 }}>Unleash Your Inner Hunter</h1>
            <Row className="info-section m-0">
                <Col lg={6} className="image-side">
                    <div className="sm-img-con">
                        <img src="/images/frame-sm.png" className="sm-img" width="122%" alt="" />
                    </div>
                    <div className="lg-img-con">
                        <img src="/images/frame-lg.png" className="lg-img" width="110%" alt="" />
                    </div>
                </Col>
                <Col lg={6} className="text-side">
                    <ul>
                        <li><b>Level Up and Conquer:</b> Start as a novice and level up with each victory.</li>
                        <li><b>Unlock Hidden Powers:</b> Discover and unlock powerful abilities as you progress. Customize your skill tree to suit your style—be it brute strength, swift agility, or mystical powers.</li>
                        <li><b>Battle Fierce Monsters:</b> Face off against a variety of monstrous foes in intense real-time combat. </li>
                        <li><b>Exciting Missions:</b> Take on diverse missions that challenge and reward you.</li>
                        <li><b>Dynamic World:</b> Influence an ever-changing world with your actions.</li>
                     </ul>
                </Col>
            </Row>
            
        </div>
    );
}

export default SecondScreen;