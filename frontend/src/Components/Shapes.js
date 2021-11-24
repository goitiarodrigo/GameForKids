import { useState } from "react"
import Circle from "./Circle"
import Diamond from "./Diamond"
import Oval from "./Oval"
import Rectangle from "./Rectangle"
import Square from "./Square"
import Triangle from "./Triangle"

let triangle = []
let square = []
let circle = []
let oval = []
let rectangle = []
let diamond = []

const shapes = [
     triangle= [
        {shape: "https://i.postimg.cc/MHqZz0yj/triangulo.png", name: "Triangulo"},
        {shape: "https://i.postimg.cc/FzprzfZC/triangulo_musica.png", name: "Triangulo musical"},
        {shape: "https://i.postimg.cc/cHY6x42P/pizza-porcion.png", name: "Porcion pizza"},
        {shape: "https://i.postimg.cc/PrHvqYty/monta-a.png", name: "Montaña"},
        {shape: "https://i.postimg.cc/qqVhyC2k/miga.png", name: "Miga"},
        {shape: "https://i.postimg.cc/MKJVjgYy/escuadra.png", name: "Escuadra"},
        {shape: "https://i.postimg.cc/mrgQgMyJ/cono.png", name: "Cono"},
        {shape: "https://i.postimg.cc/pLxf33h2/choza.png", name: "Choza"},
        {shape: "https://i.postimg.cc/XqCK0bkv/cartel-triangulo.png", name: "Cartel triangular"},
        {shape: "https://i.postimg.cc/mZJVpdyD/banderin.png", name: "Banderin"}
],
    square= [
        {shape: "https://i.postimg.cc/FRf3j4qx/cuadrado.png", name: "Cuadrado"},
        {shape: "https://i.postimg.cc/j5zdV3Jb/televisor.png", name: "Television"},
        {shape: "https://i.postimg.cc/QNJx0P3g/valija.png", name: "Valija"},
        {shape: "https://i.postimg.cc/d3Y3LcK3/regalo.png", name: "Regalo"},
        {shape: "https://i.postimg.cc/fby9Nswh/galleta-cuadrada.png", name: "Galleta"},
        {shape: "https://i.postimg.cc/fRB9pyQK/fotoretrato.png", name: "Ventana"},
        {shape: "https://i.postimg.cc/3RPp1qQQ/dado.png", name: "Dado"},
        {shape: "https://i.postimg.cc/bdfw4HdM/ajedrez.png", name: "Tablero"},
        {shape: "https://i.postimg.cc/FsbcbGPw/foto.png", name: "Foto"},
],
    circle= [
        {shape: "https://i.postimg.cc/65CVjBQj/circulo.png", name: "Circulo"},
        {shape: "https://i.postimg.cc/k4rXpPGs/tablero-redondo.png", name: "Tablero redondo"},
        {shape: "https://i.postimg.cc/nhzzs1N4/salvavidas.png", name: "Salvavidas"},
        {shape: "https://i.postimg.cc/kMQDLGxb/reloj-despertador.png", name: "Despertador"},
        {shape: "https://i.postimg.cc/TYQ1YsN2/rueda.png", name: "Rueda"},
        {shape: "https://i.postimg.cc/9fsrHq8G/pizza.png", name: ""},
        {shape: "https://i.postimg.cc/9fsrHq8G/pizza.png", name: "Pizza entera"},
        {shape: "https://i.postimg.cc/qqstLMG2/moneda.png", name: "Moneda"},
        {shape: "https://i.postimg.cc/FFL0zh0r/dona.png", name: "Dona"},
        {shape: "https://i.postimg.cc/s2jJGbsn/boton.png", name: "Boton"},
        {shape: "https://i.postimg.cc/tRY250Pw/aro.png", name: "Aro"}
],
    oval= [
        {shape: "https://i.postimg.cc/3xJyXh0D/ovalado.png", name: "Ovalo"},
        {shape: "https://i.postimg.cc/HkpM65Rn/espejo-ovalado.png", name: "Espejo"},
        {shape: "https://i.postimg.cc/QMzWNztK/globo-ovalado.png", name: "Globo"},
        {shape: "https://i.postimg.cc/pTn5mBhG/hueov.png", name: "Huevo"},
        {shape: "https://i.postimg.cc/L8CJvWjQ/palta.png", name: "Palta"},
        {shape: "https://i.postimg.cc/s2MvLJcj/pelota-rugby.png", name: "Pelota rugby"},
        {shape: "https://i.postimg.cc/d0ZV6VsD/sandia.png", name: "Sandia"},
],
    rectangle= [
        {shape: "https://i.postimg.cc/D0PZGp2g/rectangulo.png", name: "Rectangulo"},
        {shape: "https://i.postimg.cc/9MztJT4Z/billetera.png", name: "Billetera"},
        {shape: "https://i.postimg.cc/cLMmHdyg/cancha.png", name: "Cancha"},
        {shape: "https://i.postimg.cc/g0t3XJMJ/cuaderno.png", name: "Cuaderno"},
        {shape: "https://i.postimg.cc/fTvtSyyN/naipe.png", name: "Naipe"},
        {shape: "https://i.postimg.cc/4xS3p9Tr/sobre.png", name: "Sobre"},
        {shape: "https://i.postimg.cc/c1w8ZXN6/monitor.png", name: "Monitor"},
        {shape: "https://i.postimg.cc/RhH0PbCK/agenda.png", name: "Agenda"},
        {shape: "https://i.postimg.cc/1zvrGMzy/calculadora.png", name: "Calculadora"},
],
    diamond= [
        {shape: "https://i.postimg.cc/L6mhSST0/rombo.png", name: "Rombo"},
        {shape: "https://i.postimg.cc/523BJpL8/collar-rombo.png", name: "Medalla"},
        {shape: "https://i.postimg.cc/9MSPSMTS/cartel-rombo.png", name: "Cartel rombo"},
        {shape: "https://i.postimg.cc/BQFprxmC/barrilete.png", name: "Barrilete"},
        {shape: "https://i.postimg.cc/mkswQWpJ/rombo-naipe.png", name: "Rombo naipe"},
        {shape: "https://i.postimg.cc/90YBbgvM/cartel-rombo.png", name: "Cartel"}
]]

const Shapes = () => {

    const [choose, setChoose] = useState("")
    const [newArray, setNewArray] = useState([])

    const handleChooseForm = (name, index) => {
        setChoose(name)
        // console.log(name, index)
        console.log(shapes[Math.floor(Math.random()*shapes.length)])
        
        // shapes[index] = shapes[index].slice(1)
        // console.log(shapes[index])
    }

    console.log(shapes[Math.floor(Math.random()*shapes.length)])

    return (
        <div>
            {choose.length < 1 ? shapes.map((shape, index)=> {
                return <img onClick={()=>handleChooseForm(shape[0].name, index)} key={index} src={shape[0].shape} alt="..."/>
            }) 
            : 
            choose === "Triangulo" ? <Triangle shapes={shapes} />
            : choose === "Cuadrado" ? <Square shapes={shapes} /> 
            : choose === "Circulo" ? <Circle shapes={shapes} />
            : choose === "Ovalo" ? <Oval shapes={shapes} />
            : choose === "Rectangulo" ? <Rectangle shapes={shapes} />
            : choose === "Rombo" && <Diamond shapes={shapes} />
            
            }
            <p onClick={()=>setChoose("")}>Atrás</p>
        </div>
    )
}

export default Shapes