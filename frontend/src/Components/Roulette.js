import { Wheel } from "react-custom-roulette"
import { useState, useRef } from "react"

const data = [
    {id: 1, option: "Lectura"},
    {id: 2, option: "Matemáticas"},
    {id: 3, option: "Colores"},
    {id: 4, option: "Cs. Naturales"},
    {id: 5, option: "Arte"},
    {id: 6, option: "Anatomía"},
]



const Roulette = () => {
    const [mustSpin, setMustSpin] =  useState(false)
    const [dataIndex, setDataIndex] = useState (0)
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

    quantityPlay > 0 && Object.assign(data[dataIndex], {style: {backgroundColor: "gray", textColor: "white"}})

    return (
        <div >
        <Wheel 
            mustStartSpinning={mustSpin}
            prizeNumber={dataIndex}
            data={data}
            textColors={['black']}
            onStopSpinning={handleChangeBySpin}
            backgroundColors={[
                "#F22B35",
                "#F99533",
                "#24CA69",
                "#514E50",
                "#46AEFF",
                "#9145B7"
              ]}
        />
        <button onClick={handleClickOnRoulette} disabled={mustSpin}>
            {mustSpin ? "Girando": "Jugar!" }
            <audio ref={audio}>
                <source src="./assets/roulette.mp3" type="audio/mp3"></source>
            </audio>
        </button>
        <p>Le tocó:  {!mustSpin ? data[dataIndex].option : "-"}</p>
       
        </div>
    )
}

export default Roulette