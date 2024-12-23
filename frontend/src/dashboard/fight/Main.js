import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../inceptors/api";
import WarriorCard from "./WarriorCard";
import useCharacterContext from "../../hooks/useCharacterContext";

const Main = () => {
    const stage = useParams()
    const { state } = useCharacterContext()
    const [selectedWarrior, setSelectedWarrior] = useState([])

  

    const forLoop = [0, 1, 2]

    const selectedWarriorsArr = selectedWarrior || []


    const selectWarrior = (id, img, rank) => {
            setSelectedWarrior((prevSelectedWarrior) => {
                const doesContains = prevSelectedWarrior.some(s => s.id === id);
                if (!doesContains) {
                    if (prevSelectedWarrior.length < 3) {
                        return [...prevSelectedWarrior, { id, img, rank }];
                    }
                } else {
                    return prevSelectedWarrior.filter(s => s.id !== id);
                }
                return prevSelectedWarrior;
            });
        };

    // const [characters, setCharacters] = useState(null)
    // useEffect(() => {
    //    const fetchData = () => {
    //         try {
    //         const response = api.get('/getCharacter')
    //         setCharacters(response.data)
    //         } catch (error) {
    //             console.log(error.message)
    //         }
    //     }
    //     fetchData()
    // }, [])
    return (
        <div className="main-fight">
            <h1 style={{ fontSize: 50 }} className="text-center py-4">Fights</h1>
            <div className="row m-0 w-75 mx-auto fight-box" style={{ border: "solid 10px", borderRadius: 12 }}>
                <div className="profile-section col-lg-5 p-0" style={{ borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }}>
                    {state.characters && state.characters.map(character => (
                    <WarriorCard
                            key={character._id}
                            character={character}
                            handleSelect={() => selectWarrior(character._id, character.front_img, character.rank)}
                        />
                    ))}
                </div>
                <div className="col-lg-7 row m-0 p-0 text-light" style={{ borderTopRightRadius: 12, borderBottomRightRadius: 12 }}>
                    <div className="col-lg-3 d-flex flex-column justify-content-evenly align-items-center p-0" style={{ borderLeft: "solid black 3px", borderRight: "solid black 3px" }}>
                        {selectedWarrior.map(s => {
                              let frame = ''
                              switch (s.rank) {
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
                            <div
                                key={s.id}
                                className="selected-warriors"
                                style={{
                                    backgroundColor: "black",
                                    width: 90,
                                    height: 90,
                                    borderRadius: "50%",
                                    backgroundImage: `url(/images/characters/${s.img})`,
                                    backgroundSize: 'cover'
                                }}
                            >
                                <img
                                    src={"/images/frames/"+frame}
                                    width={120}
                                    style={{ marginLeft: -15, marginTop: -17 }}
                                    alt=""
                                />
                            </div>
                        )})}

                    </div>
                    <div className="col-lg-9" style={{ borderTopRightRadius: 12, borderBottomRightRadius: 12 }}>
                        <div className="enemy-profile">
                            <div className="enemy-card d-flex p-3 px-4 align-items-center">
                            <div className="bg-light" style={{ width: 75, height: 75, borderRadius: "50%", backgroundImage: `url(/images/characters/${10030}.webp)`, backgroundSize: 'cover' }}>
                            <img src="/images/circular-frame.png" width={100} style={{ marginLeft: -13, marginTop: -14 }} alt="" />
                        </div>
                        <div className="info w-100">
                                <h6 className="mb-0 ms-3">Jotaro</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="poppins ms-3 mb-0">lvl 12</h6>
                                <div className="d-flex gap-2">
                                <span className="d-flex poppins"> <img src="/images/sword-fight.png" width={15} height={15} alt="" /> 1000</span>
                                    <img src={`/images/characters/` + 'fighter.webp'} width={20} alt="" />
                                    <img src={`/images/characters/` + 'light.webp'} className=" me-3" width={20} alt="" />
                                </div>
                            </div>
                            <div className="d-flex mt-2 align-items-center px-3">
                                <img src="/images/heart.png" width={20} alt="" />
                                <div className="progress w-75 mx-2">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${100}%` }} aria-valuenow={100} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 className="poppins mb-0">250</h6>
                            </div>                     
                        </div>
                            </div>
                           
                            <div className="enemy-card d-flex p-3 px-4 align-items-center">
                            <div className="bg-light" style={{ width: 75, height: 75, borderRadius: "50%", backgroundImage: `url(/images/characters/${10030}.webp)`, backgroundSize: 'cover' }}>
                            <img src="/images/circular-frame.png" width={100} style={{ marginLeft: -13, marginTop: -14 }} alt="" />
                        </div>
                        <div className="info w-100">
                                <h6 className="mb-0 ms-3">Jotaro</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="poppins ms-3 mb-0">lvl 12</h6>
                                <div className="d-flex gap-2">
                                <span className="d-flex poppins"> <img src="/images/sword-fight.png" width={15} height={15} alt="" /> 1000</span>
                                    <img src={`/images/characters/` + 'fighter.webp'} width={20} alt="" />
                                    <img src={`/images/characters/` + 'light.webp'} className=" me-3" width={20} alt="" />
                                </div>
                            </div>
                            <div className="d-flex mt-2 align-items-center px-3">
                                <img src="/images/heart.png" width={20} alt="" />
                                <div className="progress w-75 mx-2">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${100}%` }} aria-valuenow={100} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 className="poppins mb-0">250</h6>
                            </div>                     
                        </div>
                            </div>
                           
                            <div className="enemy-card d-flex p-3 px-4 align-items-center">
                            <div className="bg-light" style={{ width: 75, height: 75, borderRadius: "50%", backgroundImage: `url(/images/characters/${10030}.webp)`, backgroundSize: 'cover' }}>
                            <img src="/images/circular-frame.png" width={100} style={{ marginLeft: -13, marginTop: -14 }} alt="" />
                        </div>
                        <div className="info w-100">
                                <h6 className="mb-0 ms-3">Jotaro</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="poppins ms-3 mb-0">lvl 12</h6>
                                <div className="d-flex gap-2">
                                <span className="d-flex poppins"> <img src="/images/sword-fight.png" width={15} height={15} alt="" /> 1000</span>
                                    <img src={`/images/characters/` + 'fighter.webp'} width={20} alt="" />
                                    <img src={`/images/characters/` + 'light.webp'} className=" me-3" width={20} alt="" />
                                </div>
                            </div>
                            <div className="d-flex mt-2 align-items-center px-3">
                                <img src="/images/heart.png" width={20} alt="" />
                                <div className="progress w-75 mx-2">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${100}%` }} aria-valuenow={100} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 className="poppins mb-0">250</h6>
                            </div>                     
                        </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="btns text-center mt-3">
                <Link to="/dashboard">
                    <div className="btn btn-light px-4 mx-1">Back</div>
                </Link>
                {selectedWarrior.length == 3 && <Link to="/fight/">
                    <div className="btn btn-success mx-1">Fight!</div>
                </Link>}
                {selectedWarrior.length < 3 && <button className="btn btn-success mx-1" disabled to="/fight/arena">
                   Fight!
                </button>}
            </div>
        </div>
    );
}

export default Main;