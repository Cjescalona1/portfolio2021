import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel';
import monog from "../assets/monogram.png";

export default  function Carou(){
    return(
        <Carousel autoPlay infiniteLoop>
            <div>
            <img src={monog} />
            <p className="legend">Legend 1</p>
            </div>
            <div>
            <img src={monog} />
            <p className="legend">Legend 2</p>
            </div>
            <div>
            <img src={monog} />
            <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}
