import { Wheel } from "react-custom-roulette"
import { useState, useRef } from "react"

const data = [
    {id: 1, option: "Formas"},
    {id: 2, option: "Imagenes"},
    {id: 3, option: "Animales"},
    {id: 4, option: "Cuentos"},
    {id: 5, option: "Pasapalabra"},
    {id: 6, option: "Anatomía"},
]



const Roulette = ({setOptionTaken}) => {
    const [mustSpin, setMustSpin] =  useState(false)
    const [dataIndex, setDataIndex] = useState (-1)
    const [quantityPlay, setQuantityPlay] = useState (0)
    const [arrayForIndexs, setArrayForIndexs] =  useState([])
    const audio = useRef()

    const handleClickOnRoulette = () => {
        let nRandomForIndex = Math.floor(Math.random() * data.length)

        while (arrayForIndexs.includes(nRandomForIndex)) {
                nRandomForIndex = Math.floor(Math.random() * data.length)
        }
        
        setArrayForIndexs([...arrayForIndexs, nRandomForIndex])
        setDataIndex(nRandomForIndex)
        setMustSpin(true)
        setTimeout(()=>{
            audio.current.play()
        }, 1500)
    }

    const handleChangeBySpin = () => {
        setQuantityPlay(quantityPlay + 1)
        setMustSpin(false)
        setQuantityPlay(0)
    }

    quantityPlay > 0 && Object.assign(data[dataIndex], {style: {backgroundColor: "#aacc00", textColor: "white"}})

    setTimeout(()=>{
        (dataIndex >= 0 && !mustSpin) ? setOptionTaken(data[dataIndex].option) : setOptionTaken("")
    }, 1500)

    return (
        <div className="rouletteContain">
            <div className="roulette">
                <Wheel 
                    mustStartSpinning={mustSpin}
                    prizeNumber={dataIndex}
                    data={data}
                    outerBorderColor={["#0089e4"]}
                    outerBorderWidth={[10]}
                    radiusLineWidth={[0]}
                    textColors={['black']}
                    onStopSpinning={handleChangeBySpin}
                    backgroundColors={[
                        "#2597f4",
                        "#4fafff",
                        "#2597f4",
                        "#4fafff",
                        "#2597f4",
                        "#4fafff"
                    ]}
                />
            </div>
            <div className="buttonContain">
                <button onClick={handleClickOnRoulette} disabled={mustSpin}>
                    {mustSpin ? "Girando": "Girar!" }
                    <audio ref={audio}>
                        <source src="./assets/roulette.mp3" type="audio/mp3"></source>
                    </audio>
                </button>
                
                
            </div>
        </div>
    )
}

export default Roulette