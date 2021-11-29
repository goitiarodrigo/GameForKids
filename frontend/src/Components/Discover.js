import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const animalsImages = [
    {photo: "https://dam.ngenespanol.com/wp-content/uploads/2020/02/tim-elefante.png", name: "Elefante", audio: "./assets/elefante.mp3"},
    {photo: "https://www.ngenespanol.com/wp-content/uploads/2018/09/Fotos-Divertidas-del-mundo-animal-P.png", name: "Ardilla", audio: "./assets/ardilla.mp3"},
    {photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Amur_Tiger_4d_%285512743124%29.jpg/1200px-Amur_Tiger_4d_%285512743124%29.jpg", name: "Tigre", audio: "./assets/tigre.mp3"},
    {photo: "http://www.aventurasport.es/wp-content/uploads/2017/01/22753-vista-de-un-caballo-galopando-en-la-pradera-1.jpg", name: "Caballo", audio: "./assets/caballo.mp3"},
    {photo: "https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Mono.jpg", name: "Mono", audio: "./assets/mono.mp3"},
    {photo: "https://cdni.rt.com/actualidad/public_images/2019.10/article/5da1fbd359bf5b4dce5052e1.jpg", name: "Leon", audio: "./assets/leon.mp3"},
    {photo: "http://origens.org/wp-content/uploads/2019/05/shutterstock_1153601284-jirafa-web-960x640.jpg", name: "Jirafa", audio: "./assets/jirafa.mp3"},
    {photo: "https://www.elagoradiario.com/wp-content/uploads/2019/06/Tortuga-marina-en-un-arrecife-de-coral-de-Hawai.jpg", name: "Tortuga", audio: "./assets/tortuga.mp3"},
    {photo: "https://s1.eestatic.com/2020/08/11/curiosidades/mascotas/mascotas-perros-curiosidades_512209327_157471851_1706x960.jpg", name: "Perro", audio: "./assets/perro.mp3"} 
]


const Discover = () => {

    const [loader, setLoader] = useState(true)
    const [indexSlide, setIndexSlide] = useState(0)
    const [score, setScore] = useState(0)
    const [currentAnimal, setCurrentAnimal] = useState(animalsImages[indexSlide].name)
    let nRandom = Math.floor(Math.random()*3)
    const [changeClass, setChangeClass] = useState({classOne: false, classTwo: false, classThree: false, classFour: false})
    const [animalToShow, setAnimalToShow] = useState({animalOne: {}, animalTwo: {}, animalThree: {}})
    let chosenAnimal

    useEffect(()=> {
        setCurrentAnimal(animalsImages[indexSlide].name)

        let nRandomForIndexSt = Math.floor(Math.random()*animalsImages.length)
        let nRandomForIndexNd = Math.floor(Math.random()*animalsImages.length)
        let animalOne = nRandom === 0 ? animalsImages[indexSlide] : nRandom === 1 ? animalsImages[nRandomForIndexSt] : nRandom === 2 && animalsImages[nRandomForIndexNd]
        let animalTwo = nRandom === 1 ? animalsImages[indexSlide] : nRandom === 2 ? animalsImages[nRandomForIndexSt] : nRandom === 0 && animalsImages[nRandomForIndexNd]
        let animalThree= nRandom === 2 ? animalsImages[indexSlide] : nRandom === 0 ? animalsImages[nRandomForIndexSt] : nRandom === 1 && animalsImages[nRandomForIndexNd]

        while (animalOne.name === animalTwo.name || animalOne.name === animalThree.name || animalTwo.name === animalThree.name) {
            nRandomForIndexSt = Math.floor(Math.random()*animalsImages.length)
            nRandomForIndexNd = Math.floor(Math.random()*animalsImages.length)
            animalOne = nRandom === 0 ? animalsImages[indexSlide] : nRandom === 1 ? animalsImages[nRandomForIndexSt] : nRandom === 2 && animalsImages[nRandomForIndexNd]
            animalTwo = nRandom === 1 ? animalsImages[indexSlide] : nRandom === 2 ? animalsImages[nRandomForIndexSt] : nRandom === 0 && animalsImages[nRandomForIndexNd]
            animalThree= nRandom === 2 ? animalsImages[indexSlide] : nRandom === 0 ? animalsImages[nRandomForIndexSt] : nRandom === 1 && animalsImages[nRandomForIndexNd]
        }

        setAnimalToShow({animalOne, animalTwo, animalThree})
        setLoader(false) 
    }, [indexSlide])



    const handleChangeClass = (e) => {
        let chosenValue = e.target.attributes.value.nodeValue
        switch (chosenValue){
            case "one": setChangeClass({...changeClass, classOne: true})
            break
            case "two": setChangeClass({...changeClass, classTwo: true})
            break
            case "three": setChangeClass({...changeClass, classThree: true})
            break
            case "four": setChangeClass({...changeClass, classFour: true})
            break
            default:
            break
        }    
    }

    const handleChange = (animal) => { 
        chosenAnimal = animal.name
        let audio = new Audio(animal.audio)
        audio.play()
    }
    
    const handleChosenAnimal = (animal) => {
        if (animal === currentAnimal) {
            setScore(score+10)  
        }else score !== 0 && setScore(score-10)

        setChangeClass({classOne: false, classTwo: false, classThree: false, classFour: false})
        setIndexSlide(indexSlide+1)
    }

    if (loader){
        return <h1>Loading</h1>
    }
    return (
        <div className="carouselContainer">
            <div className="carouselChildren">
                <Carousel
                    showArrows={false}
                    selectedItem={indexSlide}
                    showIndicators={false}
                >

                    {animalsImages.map((animal, index)=>{
                    return ( 
                        
                        <div key={index} className="animalPhoto" style={{backgroundImage: `url(${animal.photo})`}}>
                            <div style={{display: "flex", zIndex: "999", flexWrap: "wrap"}}>
                                <div onClick={(e)=>handleChangeClass(e)} value={"one"} style={{backgroundImage: 'url("https://i.postimg.cc/cJFkG29D/3.jpg")'}} className={!changeClass.classOne ? "onAnimalPhoto" : "onAnimalPhotoSecondary"}></div>
                                <div onClick={(e)=>handleChangeClass(e)} value={"two"} style={{backgroundImage: 'url("https://i.postimg.cc/x8p9k61g/4.jpg")'}} className={!changeClass.classTwo ? "onAnimalPhoto" : "onAnimalPhotoSecondary"}></div>
                                <div onClick={(e)=>handleChangeClass(e)} value={"three"} style={{backgroundImage: 'url("https://i.postimg.cc/q7JDY4Lh/1.jpg")'}} className={!changeClass.classThree ? "onAnimalPhoto" : "onAnimalPhotoSecondary"}></div>
                                <div onClick={(e)=>handleChangeClass(e)} value={"four"} style={{backgroundImage: 'url("https://i.postimg.cc/Twh7d0BT/2.jpg")'}} className={!changeClass.classFour ? "onAnimalPhoto" : "onAnimalPhotoSecondary"}></div>
                            </div>                        
                        </div>
                        )
                    })}
                </Carousel>
                <div className="buttonContainerOnCarousel">
                    <div>
                        <button onClick={()=>handleChange(animalToShow.animalOne)}>
                        <svg height="40px" width="40px" aria-hidden="true" fill="currentColor" focusable="false" data-prefix="fas" data-icon="volume-up" class="svg-inline--fa fa-volume-up fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg> 
                            {animalToShow.animalOne.name} 
                        </button>
                        <button onClick={()=>handleChange(animalToShow.animalTwo)}>
                            <svg height="40px" width="40px" aria-hidden="true" fill="currentColor" focusable="false" data-prefix="fas" data-icon="volume-up" class="svg-inline--fa fa-volume-up fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg> 
                            {animalToShow.animalTwo.name} 
                            
                        </button>
                        <button onClick={()=>handleChange(animalToShow.animalThree)}>
                            <svg height="40px" width="40px" aria-hidden="true" fill="currentColor" focusable="false" data-prefix="fas" data-icon="volume-up" class="svg-inline--fa fa-volume-up fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg> 
                            {animalToShow.animalThree.name} 
                            
                        </button>
                    </div>
                    
                    <button className="buttonToChosen" onClick={()=>handleChosenAnimal(chosenAnimal)}>Elejí</button>
                    
                    
                </div>
               
            </div>
        </div>

    )
}

export default Discover