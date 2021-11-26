import CarouselForShapes from "./CarouselForShapes";


    
    export const Diamond = ({shapes, diamondImage}) => { 
        return (
            <CarouselForShapes shapeImage={diamondImage} shapes={shapes} name={"Rombo"}/>
        )
    }

    export const Oval = ({shapes, ovalImage}) => {
        return (
            <CarouselForShapes shapeImage={ovalImage} shapes={shapes} name={"Ovalo"}/>
        )
    }

    export const Rectangle = ({shapes, rectangleImage}) => {
        return (
        <CarouselForShapes shapeImage={rectangleImage} shapes={shapes} name={"Rectangulo"}/>
        )
    }

    export const Circle = ({shapes, circleImage}) => {

        return (
            <CarouselForShapes shapeImage={circleImage} shapes={shapes} name={"Circulo"}/>
            )
    }

    export const Square = ({shapes, squareImage}) => {
        return (
            <CarouselForShapes shapeImage={squareImage} shapes={shapes} name={"Cuadrado"}/>
        )
    }

    export const Triangle = ({shapes, triangleImage}) => {       
        return (
            <CarouselForShapes shapeImage={triangleImage} shapes={shapes} name={"Triangulo"}/>
        )
    }
