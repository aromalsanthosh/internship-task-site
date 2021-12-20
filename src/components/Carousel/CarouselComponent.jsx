import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import carousel from '../../assets/carousel.jpeg'
function CarouselComponent() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            {/* Carousel to show course preview */}
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carousel}
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carousel}
                alt="Second slide"
                />

                
            </Carousel.Item>
            
            </Carousel>

        </div>
    )
}

export default CarouselComponent
