const WarriorCard = ({ character, handleSelect }) => {
    const img = character.front_img
    const healthBar = (character.health/character.maxHealth) * 100
    const chuBar = (character.chu/character.maxChu) * 100
    let frame = ''
    switch (character.rank) {
        case "B":
        frame = "wooden-frame.png"
        break    
        case "A":
        frame = "steel-frame.png"
        break
        case "S":
        frame = "silver-frame.png"
        break
        case "S+":
        frame = "gold-frame.png"
        break
        default:
        frame = "ultra-frame.png"
    }

    return (
        <div className="warrior-card d-flex p-3 px-4 align-items-center" onClick={handleSelect}>
                        <div className="bg-light" style={{ width: 75, height: 75, borderRadius: "50%", backgroundImage: `url(/images/characters/${img})`, backgroundSize: 'cover' }}>
                            <img src={"/images/frames/"+frame} width={100} style={{ marginLeft: -13, marginTop: -14 }} alt="" />
                        </div>
                        <div className="info w-100">
                                <h6 className="mb-0 ms-3">{character.name}</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                <h6 className="poppins ms-3 mb-0">{character.rank} Rank</h6>
                                <h6 className="poppins ms-3 mb-0">lvl {character.lvl}</h6>
                                </div>
                                <div className="d-flex gap-2">
                                <span className="d-flex poppins"> <img src="/images/sword-fight.png" width={15} height={15} alt="" /> {character.power}</span>
                                    <img src={`/images/characters/` + character.type.img} width={20} alt="" />
                                    <img src={`/images/characters/` + character.element.img} className=" me-3" width={20} alt="" />
                                </div>
                            </div>
                            <div className="d-flex mt-2 align-items-center px-3">
                                <img src="/images/heart.png" width={20} alt="" />
                                <div className="progress w-75 mx-2">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${healthBar}%` }} aria-valuenow={healthBar} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 className="poppins mb-0">{character.health}</h6>
                            </div>
                            <div className="d-flex w-100 mt-2 align-items-center px-3">
                                <img src="/images/water-drop.png" width={20} alt="" />
                                <div className="progress w-75 mx-2">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${chuBar}%` }} aria-valuenow={chuBar} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 className="poppins mb-0">{character.chu}</h6>
                            </div>
                        </div>
                    </div>
    );
}
 
export default WarriorCard;