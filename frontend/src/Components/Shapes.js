import { useState } from "react"

import {Oval, Diamond, Square, Rectangle, Circle, Triangle} from "./CarouselContain"


const shapes = [
     [
        {shape: "https://i.postimg.cc/MHqZz0yj/triangulo.png", name: "Triangulo"},
        {shape: "https://i.postimg.cc/FzprzfZC/triangulo_musica.png", name: "Triangulo musical"},
        {shape: "https://i.postimg.cc/cHY6x42P/pizza-porcion.png", name: "Triangulo Porcion pizza"},
        {shape: "https://i.postimg.cc/PrHvqYty/monta-a.png", name: "Triangulo Montaña"},
        {shape: "https://i.postimg.cc/qqVhyC2k/miga.png", name: "Triangulo Miga"},
        {shape: "https://i.postimg.cc/MKJVjgYy/escuadra.png", name: "Triangulo Escuadra"},
        {shape: "https://i.postimg.cc/mrgQgMyJ/cono.png", name: "Triangulo Cono"},
        {shape: "https://i.postimg.cc/pLxf33h2/choza.png", name: "Triangulo Choza"},
        {shape: "https://i.postimg.cc/XqCK0bkv/cartel-triangulo.png", name: "Triangulo Cartel triangular"},
        {shape: "https://i.postimg.cc/mZJVpdyD/banderin.png", name: "Triangulo Banderin"}
],
    [
        {shape: "https://i.postimg.cc/FRf3j4qx/cuadrado.png", name: "Cuadrado"},
        {shape: "https://i.postimg.cc/j5zdV3Jb/televisor.png", name: "Cuadrado Television"},
        {shape: "https://i.postimg.cc/QNJx0P3g/valija.png", name: "Cuadrado Valija"},
        {shape: "https://i.postimg.cc/d3Y3LcK3/regalo.png", name: "Cuadrado Regalo"},
        {shape: "https://i.postimg.cc/fby9Nswh/galleta-cuadrada.png", name: "Cuadrado Galleta"},
        {shape: "https://i.postimg.cc/fRB9pyQK/fotoretrato.png", name: "Cuadrado Ventana"},
        {shape: "https://i.postimg.cc/3RPp1qQQ/dado.png", name: "Cuadrado Dado"},
        {shape: "https://i.postimg.cc/bdfw4HdM/ajedrez.png", name: "Cuadrado Tablero"},
        {shape: "https://i.postimg.cc/FsbcbGPw/foto.png", name: "Cuadrado Foto"},
],
    [
        {shape: "https://i.postimg.cc/65CVjBQj/circulo.png", name: "Circulo"},
        {shape: "https://i.postimg.cc/k4rXpPGs/tablero-redondo.png", name: "Circulo Tablero redondo"},
        {shape: "https://i.postimg.cc/nhzzs1N4/salvavidas.png", name: "Circulo Salvavidas"},
        {shape: "https://i.postimg.cc/kMQDLGxb/reloj-despertador.png", name: "Circulo Despertador"},
        {shape: "https://i.postimg.cc/TYQ1YsN2/rueda.png", name: "Circulo Rueda"},
        {shape: "https://i.postimg.cc/9fsrHq8G/pizza.png", name: "Circulo Pizza entera"},
        {shape: "https://i.postimg.cc/qqstLMG2/moneda.png", name: "Circulo Moneda"},
        {shape: "https://i.postimg.cc/FFL0zh0r/dona.png", name: "Circulo Dona"},
        {shape: "https://i.postimg.cc/s2jJGbsn/boton.png", name: "Circulo Boton"},
        {shape: "https://i.postimg.cc/tRY250Pw/aro.png", name: "Circulo Aro"}
],
    [
        {shape: "https://i.postimg.cc/3xJyXh0D/ovalado.png", name: "Ovalo"},
        {shape: "https://i.postimg.cc/HkpM65Rn/espejo-ovalado.png", name: "Ovalo Espejo"},
        {shape: "https://i.postimg.cc/QMzWNztK/globo-ovalado.png", name: "Ovalo Globo"},
        {shape: "https://i.postimg.cc/pTn5mBhG/hueov.png", name: "Ovalo Huevo"},
        {shape: "https://i.postimg.cc/L8CJvWjQ/palta.png", name: "Ovalo Palta"},
        {shape: "https://i.postimg.cc/s2MvLJcj/pelota-rugby.png", name: "Ovalo Pelota rugby"},
        {shape: "https://i.postimg.cc/d0ZV6VsD/sandia.png", name: "Ovalo Sandia"},
],
    [
        {shape: "https://i.postimg.cc/D0PZGp2g/rectangulo.png", name: "Rectangulo"},
        {shape: "https://i.postimg.cc/9MztJT4Z/billetera.png", name: "Rectangulo Billetera"},
        {shape: "https://i.postimg.cc/cLMmHdyg/cancha.png", name: "Rectangulo Cancha"},
        {shape: "https://i.postimg.cc/g0t3XJMJ/cuaderno.png", name: "Rectangulo Cuaderno"},
        {shape: "https://i.postimg.cc/fTvtSyyN/naipe.png", name: "Rectangulo Naipe"},
        {shape: "https://i.postimg.cc/4xS3p9Tr/sobre.png", name: "Rectangulo Sobre"},
        {shape: "https://i.postimg.cc/c1w8ZXN6/monitor.png", name: "Rectangulo Monitor"},
        {shape: "https://i.postimg.cc/RhH0PbCK/agenda.png", name: "Rectangulo Agenda"},
        {shape: "https://i.postimg.cc/1zvrGMzy/calculadora.png", name: "Rectangulo Calculadora"},
],
    [
        {shape: "https://i.postimg.cc/L6mhSST0/rombo.png", name: "Rombo"},
        {shape: "https://i.postimg.cc/523BJpL8/collar-rombo.png", name: "Rombo Medalla"},
        {shape: "https://i.postimg.cc/9MSPSMTS/cartel-rombo.png", name: "Rombo Cartel rombo"},
        {shape: "https://i.postimg.cc/BQFprxmC/barrilete.png", name: "Rombo Barrilete"},
        {shape: "https://i.postimg.cc/mkswQWpJ/rombo-naipe.png", name: "Rombo naipe"},
        {shape: "https://i.postimg.cc/90YBbgvM/cartel-rombo.png", name: "Rombo Cartel"},
        {shape: "https://i.postimg.cc/rprr47KR/diamante-Rombo.png", name: "Rombo diamante"}
]]

const Shapes = () => {

    const [choose, setChoose] = useState("")
    const [shapeImage, setShapeImage] = useState("")
    const [newArray, setNewArray] = useState([])
    let things = []
    let randomShapeArray = []
    let array = []
    let randomShape = {}

    const handleChooseShape = (name, index) => {

        setChoose(name)
        setShapeImage(shapes[index][0])
        for (let i = 1; i < 7; i++) {
            randomShapeArray = shapes[Math.floor(Math.random()*shapes.length)]

            if (randomShapeArray === shapes[index]) 
                randomShapeArray = shapes[Math.floor(Math.random()*shapes.length)]
            
            randomShape = randomShapeArray[Math.floor(Math.random()*randomShapeArray.length)]

            let randomShapeTwo = randomShapeArray[Math.floor(Math.random()*randomShapeArray.length)]
            
            things.push(shapes[index][i], randomShape, randomShapeTwo)
            
        }
        // console.log(name, index)
        let some = new Set(things)
        array = [...some]
        while (array.length < 18){
             randomShape = randomShapeArray[Math.floor(Math.random()*randomShapeArray.length)]
             array.push(randomShape)
             some = new Set(array)
             array = [...some]
            }
            setNewArray(array)
    }


    return (
        <div className="shapesContainer">
            <div className={choose.length > 0 ? "shapesChildrenAgo" : "shapesChildren"}>
                {choose.length < 1 ? shapes.map((shape, index)=> {
                    return <div className="figure"  onClick={()=>handleChooseShape(shape[0].name, index)} key={index} style={{backgroundImage: `url(${shape[0].shape})`}} alt="..."></div>
                }) 
                : 
                choose === "Triangulo" ? <Triangle shapes={newArray} triangleImage={shapeImage} />
                : choose === "Cuadrado" ? <Square shapes={newArray} squareImage={shapeImage} /> 
                : choose === "Circulo" ? <Circle shapes={newArray} circleImage={shapeImage} />
                : choose === "Ovalo" ? <Oval shapes={newArray} ovalImage={shapeImage} />
                : choose === "Rectangulo" ? <Rectangle shapes={newArray} rectangleImage={shapeImage} />
                : choose === "Rombo" && <Diamond shapes={newArray} diamondImage={shapeImage} />
                
                }
                
            </div>
            
        </div>
    )
}

export default Shapes