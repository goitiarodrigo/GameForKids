import Discover from '../components/Discover';
import Donut from '../components/Donut';
import Images from '../components/Images';
import Roulette from '../components/Roulette';
import Shapes from '../components/Shapes';
import { useState } from 'react';
import Stories from '../components/Stories';

const Home = () => {
    
    const [optionTaken, setOptionTaken] = useState("")
    console.log(optionTaken)
    
    return (
        <div className="container">
            {optionTaken === "" ? <Roulette  setOptionTaken={setOptionTaken}/>
            : optionTaken === "Animales" ? <Discover />
            : optionTaken === "Pasapalabra" ? <Donut />
            : optionTaken === "Imagenes" ? <Images />
            : optionTaken === "Formas" ? <Shapes />
            : optionTaken === "Cuentos" && <Stories />
        }
        </div>
    )
}

export default Home