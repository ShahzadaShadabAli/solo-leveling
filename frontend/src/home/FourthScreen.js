import React, { useRef, useEffect, useState } from 'react';
// import characters from "../characters.json"
import CharCards from './CharCards';
import axios from 'axios';

const FourthScreen = () => {

    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/character')
                console.log(response.data)
                setCharacters(response.data)
                setIsLoading(false)
            } catch (error) {
                console.log(error.message)
                setError(error.message)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    const carouselRef = useRef(null);
    const leftArrowRef = useRef(null);
    const rightArrowRef = useRef(null);
    
    useEffect(() => {
        const carousel = carouselRef.current;
        const firstImg = carousel.querySelectorAll(".char-card")[0];
        const arrowIcons = [leftArrowRef.current, rightArrowRef.current];

        let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

        const showHideIcons = () => {
            let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
            arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
            arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
        }

        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                if (firstImg) {
                    let firstImgWidth = firstImg.clientWidth + 14;
                carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
                setTimeout(() => showHideIcons(), 60);
                }
            });
        });

        const autoSlide = () => {
            if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
            positionDiff = Math.abs(positionDiff);
            let firstImgWidth = firstImg.clientWidth + 14;
            let valDifference = firstImgWidth - positionDiff;
            if (carousel.scrollLeft > prevScrollLeft) {
                return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
            }
            carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }

        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if (!isDragStart) return;
            e.preventDefault();
            isDragging = true;
            carousel.classList.add("dragging");
            positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;
            showHideIcons();
        }

        const dragStop = () => {
            isDragStart = false;
            carousel.classList.remove("dragging");
            if (!isDragging) return;
            isDragging = false;
            autoSlide();
        }

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("touchstart", dragStart);

        document.addEventListener("mousemove", dragging);
        carousel.addEventListener("touchmove", dragging);

        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("touchend", dragStop);

        return () => {
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("touchstart", dragStart);
            document.removeEventListener("mousemove", dragging);
            carousel.removeEventListener("touchmove", dragging);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("touchend", dragStop);
        };
    }, [characters]);

    return (
        <div className="fourth-screen">
            <h1 className="text-center text-light py-5 mb-0" style={{ fontSize: 60 }}>Warriors</h1>
            <div className="wrapper ms-5">
                <i id="left" className="fa-solid fa-angle-left" ref={leftArrowRef}></i>
                <div className="carousel mb-5" ref={carouselRef}>
                    {isLoading && <div className="d-flex w-100 justify-content-center align-items-center">
                        <img src="/images/sword-animation.gif" alt="" />    
                    </div>}
                    {characters && characters.length > 0 && characters.map(character => (
                        <CharCards key={character.id} character={character} auth={false} />
                    ))}
                </div>
                <i id="right" className="fa-solid fa-angle-right" ref={rightArrowRef}></i>
            </div>
        </div>
    );
}

export default FourthScreen;
