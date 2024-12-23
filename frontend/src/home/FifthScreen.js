import {useEffect, useState} from 'react'
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const FifthScreen = () => {
  let i = 0
  let active = ''
  const [arenas, setArenas] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArenas = async () => {
      try {
        const response = await axios.get("/arena")
        setArenas(response.data)
        setIsLoading(false)
        console.log(response.data)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    fetchArenas()
  }, [])



    
    return (
        <div className="fifth pb-5">
          <h1 style={{fontSize: 60}} className="text-center pb-5">Arenas</h1>
   {arenas && <div className="container">
      <img src="/images/arena-frame.png" className='frame' alt="" />
          <Carousel className='w-75 mx-auto'>
    {arenas.map((a) => (
        <Carousel.Item>
        <img width="100%" src={"/images/"+a.image} alt="" />
         <Carousel.Caption>
           <h3>{a.name}</h3>
           <p>{a.description}</p>
           <div className="d-flex justify-content-center w-100 gap-4">
            {a.winning_award.map(w => (
            <div className="gap-2">
              <img src={"/images/characters/" + w.front_img} style={{borderRadius: "50%", width: 50, border:"solid"}} alt="" />
              <h6 className='mb-0'>{w.name}</h6>
            </div>
            ))}
           </div>
         </Carousel.Caption>
       </Carousel.Item>
      ))}
    
    </Carousel>         
    </div>}
    {isLoading && <div className="d-flex w-100 justify-content-center align-items-center">
                        <img src="/images/loading-arena.gif" alt="" />    
                    </div>}
        </div>
    );
}

export default FifthScreen;