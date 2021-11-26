import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const CarouselForShapes = ({shapeImage, shapes, name}) => {   
        const [indexSlide, setIndexSlide] = useState(0)
        let nRandom = Math.floor(Math.random()*3)
        let randomFilteredShapes = shapes.filter(shape => !shape.name.includes(name))
        let randomFilteredFigure = shapes.filter((shape, index) => shape.name.includes(name))

        console.log(randomFilteredShapes)
        console.log(randomFilteredFigure)

        return (
            <div>
                <img  alt="" src={shapeImage.shape} />
    
                
    
                <Carousel  
                showArrows={false}
                selectedItem={indexSlide}
                >
                <div >
                    
                    <div style={{display: "flex"}}>
                    <div onClick={()=>console.log("1")}>
                        <img  style={{width: "300px"}}  alt="" src="https://i.postimg.cc/MHqZz0yj/triangulo.png" />
                    </div>
                    <div onClick={()=>console.log("2")}>
                        <img  style={{width: "300px"}} alt="" src="https://i.postimg.cc/FzprzfZC/triangulo_musica.png" />
                    </div>
                    <div onClick={()=>console.log("3")}>
                        <img  style={{width: "300px"}} alt="" src="https://i.postimg.cc/cHY6x42P/pizza-porcion.png" />
                    </div>
                    </div>
                    
                    
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                    
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                    
                </div>
                <div>
                    <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                    
                </div>
                
                </Carousel>
            </div>
        )
    
}

export default CarouselForShapes