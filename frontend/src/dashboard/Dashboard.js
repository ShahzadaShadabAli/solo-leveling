import useCharacterContext from "../hooks/useCharacterContext";
import useCheckValidate from "../hooks/useCheckValidate";
import FirstScreen from "./FirstScreen";
import Mine from "./Mine";
import Options from "./Options";
import Warriors from "./Warriors";
import { useState, useEffect } from "react";
import useAuthContext from "../hooks/useAuthContext";
import FifthScreen from "../home/FifthScreen";
import axios from "axios";

const Dashboard = () => {
    useCheckValidate()
    const {state} = useAuthContext()
    const {dispatch} = useCharacterContext()
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/userCharacter')
            console.log(response)
                dispatch({method: "SAVE", payload: response.data})
            } catch (error) {
                setError(error.message)
            }
        }

        fetchData()
            

    }, [state.user])
    return (
        <div className="dashboard">
            <Options />
            <FirstScreen />
            <Mine />
            <Warriors />
            <FifthScreen />
        </div>
    );
}

export default Dashboard;