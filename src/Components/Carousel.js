import React, { useState } from 'react'
import './Carousel.css'
import { Images } from './CarouselData'
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'

function Carousel() {
    const [currImage, setCurrImage] = useState(0)
  return (
    <div className='carousel'>
       
        <div className='carousel-inner' style={{backgroundImage:`url(${Images[currImage].image})`}} >
            <div className='left'>
                <AiOutlineLeft onClick={()=> currImage > 0 && setCurrImage(currImage - 1)}/>
            </div>
            <div className='center'>
                <h1>Explore The Real Wild Life</h1>
                <h2>{Images[currImage].title}</h2>
                <p>{Images[currImage].description}</p>
            </div>
            <div className='right'>
            <AiOutlineRight onClick={()=> currImage < Images.length -1 && setCurrImage(currImage + 1)}/>
            </div>
        </div>
    </div>
  )
}

export default Carousel