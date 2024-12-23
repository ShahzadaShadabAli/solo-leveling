const HTPCards = ({ imgSrc, heading, index, content }) => {
    const handleHover = () => {
        document.querySelectorAll('.img-con')[index].classList.add('d-none')
        document.querySelectorAll('.text-con')[index].classList.remove('d-none')
    }
    const handleUnhover = () => {
        document.querySelectorAll('.img-con')[index].classList.remove('d-none')
        document.querySelectorAll('.text-con')[index].classList.add('d-none')
    }
    return (
        <div className="da-card" >
            <div className="card2" onMouseOver={handleHover} onMouseOut={handleUnhover}>
                <div className="img-con">
                    <img src={"/images/" + imgSrc} width={80} height={80} alt="" />
                </div>
                <div className="p-5 text-con d-none">
                    <h1>{heading}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default HTPCards;