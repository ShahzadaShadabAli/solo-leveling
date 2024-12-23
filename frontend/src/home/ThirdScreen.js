import HTPCards from "./HTPCards";

const ThirdSection = () => {
    return (
        <div className="third-section">
            <p></p>
            <h1 className="text-center pb-5" style={{ fontSize: 60 }}>How To Play</h1>
            <div className="cards-container container">
            <HTPCards imgSrc={'sword.png'} index={0} heading={"Solo Fight"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus, obcaecati fugit suscipit atque ipsam aspernatur labore deleniti reiciendis illo."}/>
            <HTPCards imgSrc={'helmet.png'} index={1} heading={"Warriors"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus, obcaecati fugit suscipit atque ipsam aspernatur labore deleniti reiciendis illo."}/>
            <HTPCards imgSrc={'level.png'} index={2} heading={"Level Up"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus, obcaecati fugit suscipit atque ipsam aspernatur labore deleniti reiciendis illo."}/>
            </div>
        </div>
    );
}
 
export default ThirdSection;