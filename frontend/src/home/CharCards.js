
const CharCards = ({ character, auth }) => {
    console.log(character)
    let healthBar = 0
    let chuBar = 0
    let xpBar = 0
    if (auth) {
        healthBar = (character.health/character.maxHealth) * 100
        chuBar = (character.chu/character.maxChu) * 100
        xpBar = (character.xp/character.maxXp) * 100
    }
    let bg = ''
    switch (character.element.name) {
        case "Light":
            bg = "yellow-background"
            break
        case "Dark":
            bg = "purple-background"
            break
        case "Fire":
            bg = "red-background"
            break
        case "Water":
            bg = "blue-background"
            break
        case "Wind":
            bg = "green-background"
            break
    }
    return (
        <div className={"char-card " + bg} key={character._id}>
            <img src={"/images/characters/" + character.img} alt="" />
            <img src={"/images/characters/" + character.element.img} style={{ width: 30, height: 30, marginLeft: "-96%", marginBottom: "95%" }} alt="" />
            <img src={"/images/characters/" + character.type.img} style={{ width: 30, height: 30, marginLeft: "0%", marginBottom: "95%" }} alt="" />
            {auth && <div className="stats">
                <div className="d-flex w-100 align-items-center px-3">
                    <img src="/images/heart.png" alt="" />
                    <div className="progress w-75 mx-2">
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${healthBar}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h6 className="poppins mb-0">{character.health}</h6>
                </div>
                <div className="d-flex w-100 mt-2 align-items-center px-3">
                    <img src="/images/sword-fight.png" alt="" />
                    <div className="progress w-75 mx-2">
                        <div className="progress-bar sword-progress" role="progressbar" style={{ width: `100%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h6 className="poppins mb-0">{character.power}</h6>
                </div>
                <div className="d-flex w-100 mt-2 align-items-center px-3">
                    <img src="/images/water-drop.png" alt="" />
                    <div className="progress w-75 mx-2">
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${chuBar}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h6 className="poppins mb-0">{character.chu}</h6>
                </div>
                <div className="d-flex w-100 mt-2 align-items-center px-3">
                    <img src="/images/level.png" alt="" />
                    <div className="progress w-75 mx-2">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${xpBar}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h6 className="poppins mb-0">{character.xp} / {character.maxXp}</h6>
                </div>
            </div>}
            <div className="card__content">
                <p className="card__title poppins-large">{character.name} {auth ? `(${character.rank})` : ""} {auth ? `lvl ${character.lvl}` : ""}</p>
                <p className="card__description poppins-light">{character.desc}</p>
            </div>
        </div>
    );
}

export default CharCards;