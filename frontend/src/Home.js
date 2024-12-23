import { useNavigate } from "react-router-dom";
import FirstScreen from "./home/FirstScreen";
import FourthScreen from "./home/FourthScreen";
import SecondScreen from "./home/SecondScreen";
import ThirdSection from "./home/ThirdScreen";
import useAuthContext from "./hooks/useAuthContext";
import useCheckValidate from "./hooks/useCheckValidate";
import FifthScreen from "./home/FifthScreen";
const Home = () => {
    useCheckValidate()
    return (
        <div className="home">
            <FirstScreen />
            <SecondScreen />
            <img src="/images/separator-flip.png" width="100%" alt="" />
            <ThirdSection />
            <img src="/images/separator.png" width="100%" alt="" />
            <FourthScreen />
            <img src="/images/separator-flip.png" width="100%" alt="" />
            <FifthScreen />
           
        </div>
    );
}
 
export default Home;