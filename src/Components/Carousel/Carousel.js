import React, { useState } from 'react'
import './Carousel.css'
import { images } from './CarouselData'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

function Carousel() {
    const [currImage, setCurrImage] = useState(0)
  return (
    <div className='carousel'>
        <div className='carousel-inner' style={{backgroundImage: `url(${images[currImage].image})`}}>
            <div className='left'>
            <AiOutlineLeft onClick={()=> currImage > 0 && setCurrImage(currImage - 1)}/>
            </div>
            <div className='center'>
            <h1>{images[currImage].title}</h1>
            <p>{images[currImage].description}</p>
            </div>
            <div className='right'>
            <AiOutlineRight onClick={()=> currImage < images.length -1 && setCurrImage(currImage + 1)}/>
            </div>
        </div>
    </div>
  )
}

export default Carousel