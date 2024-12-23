import useCharacterContext from "../hooks/useCharacterContext"
import useSelectedCharContext from "../hooks/useSelectedCharContext"

const Deck = ({char}) => {
    const {dispatch} = useSelectedCharContext()
    const handleHover = (char) => {
        dispatch({method: "SELECT", payload: char})
    }
    const handleUnHover = () => {
        dispatch({method: "UNSELECT"})
    }
    let fireChar = []
    let waterChar = []
    let lightChar = []
    let darkChar = []
    let windChar = []
    let fire = ''
    let water = ''
    let light = ''
    let dark = ''
    let wind = ''
        if (char) {
            fireChar = char.filter(c => c.element.name == "Fire")
            waterChar = char.filter(c => c.element.name == "Water")
            lightChar = char.filter(c => c.element.name == "Light")
            darkChar = char.filter(c => c.element.name == "Dark")
            windChar = char.filter(c => c.element.name == "Wind")
            fire = fireChar[0].element
            water = waterChar[0].element
            light = lightChar[0].element
            dark = darkChar[0].element
            wind = windChar[0].element
        }
    return (
        <div className="deckCont">
            <div className="deck">
                <div className="elementCont fire">
                <img src={"/images/characters/" + fire.img} width={30} height={30} alt="" />
                {fireChar && fireChar.map(char => (
                    <div onMouseOver={() => handleHover(char)} onMouseOut={() => handleUnHover} className="char red-background">
                        <img src={"/images/characters/" + char.front_img} width="100%" alt="" />
                    </div>
                ))}
                </div>
                <div className="elementCont water">
                    <img src={"/images/characters/" + water.img} width={30} height={30} alt="" />
                    {waterChar && waterChar.map(char => (
                    <div onMouseOver={() => handleHover(char)} onMouseOut={() => handleUnHover} className="char blue-background">
                        <img src={"/images/characters/" + char.front_img} width="100%" alt="" />
                    </div>
                ))}
                </div>
                <div className="elementCont light">
                <img src={"/images/characters/" + light.img} width={30} height={30} alt="" />
                {lightChar && lightChar.map(char => (
                    <div onMouseOver={() => handleHover(char)} onMouseOut={() => handleUnHover} className="char yellow-background">
                        <img src={"/images/characters/" + char.front_img} width="100%" alt="" />
                    </div>
                ))}
                </div>
                <div className="elementCont dark">
                <img src={"/images/characters/" + dark.img} width={30} height={30} alt="" />
                {darkChar && darkChar.map(char => (
                    <div onMouseOver={() => handleHover(char)} onMouseOut={() => handleUnHover} className="char purple-background">
                        <img src={"/images/characters/" + char.front_img} width="100%" alt="" />
                    </div>
                ))}
                </div>
                <div className="elementCont wind">
                <img src={"/images/characters/" + wind.img} width={30} height={30} alt="" />
                {windChar && windChar.map(char => (
                    <div onMouseOver={() => handleHover(char)} onMouseOut={() => handleUnHover} className="char green-background">
                        <img src={"/images/characters/" + char.front_img} width="100%" alt="" />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
 
export default Deck;