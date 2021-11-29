import { useState, useCallback } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const CarouselForShapes = ({shapeImage, shapes, name}) => {   
        const [indexSlide, setIndexSlide] = useState(0)
        const [count, setCount] = useState(0)
        let nRandom = 0
        let randomFilteredShapes = shapes.filter(shape => !shape.name.includes(name))
        let randomFilteredGeometricFigure = shapes.filter((shape, index) => shape.name.includes(name))
        let nRandomForIndexSt = 0
        let nRandomForIndexNd = 0
        let figureOne 
        let figureTwo
        let figureThree

        

        const nombre = useCallback((e) => {
            let chosenValue = e.target.attributes.value.nodeValue
            if (chosenValue.includes(shapeImage.name)) {
                setCount(count+10)
                setIndexSlide(indexSlide+1)
            } else count !== 0 && setCount(count-10)
        })

        return (
            <div>
                <div className="figureForCompare" style={{backgroundImage: `url(${shapeImage.shape})`}} ></div>
    
                <Carousel  
                showArrows={false}
                selectedItem={indexSlide}
                showIndicators={false}
                >
                    {randomFilteredGeometricFigure.map((figure, index)=> {  
                        nRandom = Math.floor(Math.random()*3)                  
                        nRandomForIndexSt = Math.floor(Math.random()*randomFilteredShapes.length) 
                        nRandomForIndexNd = Math.floor(Math.random()*randomFilteredShapes.length)

                       while (nRandomForIndexSt === nRandomForIndexNd) nRandomForIndexNd = Math.floor(Math.random()*randomFilteredShapes.length) 

                        figureOne = nRandom === 0 ? figure : nRandom === 1 ? randomFilteredShapes[nRandomForIndexSt] : nRandom === 2 && randomFilteredShapes[nRandomForIndexNd]
                        figureTwo = nRandom === 1 ? figure : nRandom === 2 ? randomFilteredShapes[nRandomForIndexSt] : nRandom === 0 && randomFilteredShapes[nRandomForIndexNd]
                        figureThree = nRandom === 2 ? figure : nRandom === 0 ? randomFilteredShapes[nRandomForIndexSt] : nRandom === 1 && randomFilteredShapes[nRandomForIndexNd]
                        
                         
                        return  <div  key={index}>
                                    <div className="shapesPerSlide">
                                        <div className="photoFromCarousel" onClick={(e)=>nombre(e)} value={figureOne.name} style={{backgroundImage: `url(${figureOne.shape})`}}>
                                        </div>

                                        <div className="photoFromCarousel" onClick={(e)=>nombre(e)} value={figureTwo.name} style={{backgroundImage: `url(${figureTwo.shape})`}}>
                                        </div>

                                        <div className="photoFromCarousel" onClick={(e)=>nombre(e)} value={figureThree.name} style={{backgroundImage: `url(${figureThree.shape})`}}>
                                        </div>
                                    </div>
                                </div>   
                    })}      
                </Carousel>
            </div>
        )
    
}

export default CarouselForShapes