import { useRef, useState, useEffect } from "react"

const alphabet = [  
    "https://img.icons8.com/ios/50/000000/circled-a.png",
    "https://img.icons8.com/ios/50/000000/circled-b.png",
    "https://img.icons8.com/ios/50/000000/circled-c.png",
    "https://img.icons8.com/ios/50/000000/circled-d.png",
    "https://img.icons8.com/ios/50/000000/circled-e.png",
    "https://img.icons8.com/ios/50/000000/circled-f.png",
    "https://img.icons8.com/ios/50/000000/circled-g.png",
    "https://img.icons8.com/ios/50/000000/circled-h.png",
    "https://img.icons8.com/ios/50/000000/circled-i.png",
    "https://img.icons8.com/ios/50/000000/circled-j.png",
    "https://img.icons8.com/ios/50/000000/circled-k.png",
    "https://img.icons8.com/ios/50/000000/circled-l.png",
    "https://img.icons8.com/ios/50/000000/circled-m.png",
    "https://img.icons8.com/ios/50/000000/circled-n.png",
    "https://img.icons8.com/ios/50/000000/circled-n.png",
    "https://img.icons8.com/ios/50/000000/circled-o.png",
    "https://img.icons8.com/ios/50/000000/circled-p.png",
    "https://img.icons8.com/ios/50/000000/circled-q.png",
    "https://img.icons8.com/ios/50/000000/circled-r.png",
    "https://img.icons8.com/ios/50/000000/circled-s.png",
    "https://img.icons8.com/ios/50/000000/circled-t.png",
    "https://img.icons8.com/ios/50/000000/circled-u.png",
    "https://img.icons8.com/ios/50/000000/circled-v.png",
    "https://img.icons8.com/ios/50/000000/circled-w.png",
    "https://img.icons8.com/ios/50/000000/circled-x.png",
    "https://img.icons8.com/ios/50/000000/circled-y.png",
    "https://img.icons8.com/ios/50/000000/circled-z.png"
]

const animalPictures = [
    {photo: "https://i.postimg.cc/ht9x5GR6/Ara-a-min.png", name: "Araña", id: "1", wrongName: "Abeja", audio: "./assets/araña.mp3", wrongAudio: "./assets/abeja.mp3"},
    {photo: "https://i.postimg.cc/wTNs1BMM/Ballena-min.png", name: "Ballena", id: "2", wrongName: "Burro", audio: "./assets/ballena.mp3", wrongAudio: "./assets/burro.mp3"},
    {photo: "https://i.postimg.cc/SQ3MQ9yH/Caballo-min.png", name: "Caballo", id: "3", wrongName: "Camaleon", audio: "./assets/caballo.mp3", wrongAudio: "./assets/camaleon.mp3"},
    {photo: "https://i.postimg.cc/G2pytJTn/Delf-n-min.png", name: "Delfin", id: "4", wrongName: "Dinosaurio", audio: "./assets/delfin.mp3", wrongAudio: "./assets/dinosaurio.mp3"},
    {photo: "https://i.postimg.cc/SKk8Fpys/Elefante-min.png", name: "Elefante", id: "5", wrongName: "Erizo", audio: "./assets/elefante.mp3", wrongAudio: "./assets/erizo.mp3"},
    {photo: "https://i.postimg.cc/6QcZB13h/Foca-min.png", name: "Foca", id: "6", wrongName: "Flamenco", audio: "./assets/foca.mp3", wrongAudio: "./assets/flamenco.mp3"},
    {photo: "https://i.postimg.cc/DwK4LK4g/Gato-min.png", name: "Gato", id: "7", wrongName: "Gorila", audio: "./assets/gato.mp3", wrongAudio: "./assets/gorila.mp3"},
    {photo: "https://i.postimg.cc/PJgpSg3d/Hormiga-min.png", name: "Hormiga", id: "8", wrongName: "Hipocampo", audio: "./assets/hormiga.mp3", wrongAudio: "./assets/hipocampo.mp3"},
    {photo: "https://i.postimg.cc/631Gv2C2/Iguana-min.png", name: "Iguana", id: "9", wrongName: "Impala", audio: "./assets/iguana.mp3", wrongAudio: "./assets/impala.mp3"},
    {photo: "https://i.postimg.cc/Hnc84YtS/Jirafa-min.png", name: "Jirafa", id: "10", wrongName: "Jabali", audio: "./assets/jirafa.mp3", wrongAudio: "./assets/jabali.mp3"},
    {photo: "https://i.postimg.cc/g2qXKBvP/Koala-min.png", name: "Koala", id: "11", wrongName: "Kiwi", audio: "./assets/koala.mp3", wrongAudio: "./assets/kiwi.mp3"},
    {photo: "https://i.postimg.cc/s1CxYpxX/Leon-min.png", name: "Leon", id: "12", wrongName: "Loro", audio: "./assets/leon.mp3", wrongAudio: "./assets/loro.mp3"},
    {photo: "https://i.postimg.cc/VvC507Yp/Mono-min.png", name: "Mono", id: "13", wrongName: "Mamut", audio: "./assets/mono.mp3", wrongAudio: "./assets/mamut.mp3"},
    {photo: "https://i.postimg.cc/s2jBH9cG/Nutria-min.png", name: "Nutria", id: "14", wrongName: "Novillo", audio: "./assets/nutria.mp3", wrongAudio: "./assets/novillo.mp3"},
    {photo: "https://i.postimg.cc/cJFvpg99/and-min.png", name: "Ñandu", id: "15", wrongName: "Ñeque", audio: "./assets/niandu.mp3", wrongAudio: "./assets/nieque.mp3"},
    {photo: "https://i.postimg.cc/h4fyvNmv/Oso-min.png", name: "Oso", id: "16", wrongName: "Orangutan", audio: "./assets/oso.mp3", wrongAudio: "./assets/orangutan.mp3"},
    {photo: "https://i.postimg.cc/mDqtDxG7/Perro-min.png", name: "Perro", id: "17", wrongName: "Pato", audio: "./assets/perro.mp3", wrongAudio: "./assets/pato.mp3"},
    {photo: "https://i.postimg.cc/gJrxmz1Y/Quirquincho-min.png", name: "Quirquincho", id: "18", wrongName: "Quetzal", audio: "./assets/quirquincho.mp3", wrongAudio: "./assets/quetzal.mp3"},
    {photo: "https://i.postimg.cc/59TPCp53/Rana-min.png", name: "Rana", id: "19", wrongName: "Raton", audio: "./assets/rana.mp3", wrongAudio: "./assets/raton.mp3"},
    {photo: "https://i.postimg.cc/NML4yr5S/Serpiente-min.png", name: "Serpiente", id: "20", wrongName: "Salmón", audio: "./assets/serpiente.mp3", wrongAudio: "./assets/salmon.mp3"},
    {photo: "https://i.postimg.cc/qMK1Xnjd/Toro-min.png", name: "Toro", id: "21", wrongName: "Tucan", audio: "./assets/toro.mp3", wrongAudio: "./assets/tucan.mp3"},
    {photo: "https://i.postimg.cc/W1PX93Hq/Urraca-min.png", name: "Urraca", id: "22", wrongName: "Uatipi", audio: "./assets/urraca.mp3", wrongAudio: "./assets/uatipi.mp3"},
    {photo: "https://i.postimg.cc/0ydZhsTW/Vaca-min.png", name: "Vaca", id: "23", wrongName: "Vicuña", audio: "./assets/vaca.mp3", wrongAudio: "./assets/vicunia.mp3"},
    {photo: "https://i.postimg.cc/nrDG2bK1/Wombat-min.png", name: "Wombat", id: "24", wrongName: "Walabi", audio: "./assets/wombat.mp3", wrongAudio: "./assets/walabi.mp3"},
    {photo: "https://i.postimg.cc/5t4pVr1x/Xarda-min.png", name: "Xarda", id: "25", wrongName: "Xenopus", audio: "./assets/xarda.mp3", wrongAudio: "./assets/xenopus.mp3"},
    {photo: "https://i.postimg.cc/6QMc5h5C/Yaguaret-min.png", name: "Yaguarete", id: "26", wrongName: "Yacare", audio: "./assets/yaguarete.mp3", wrongAudio: "./assets/yacare.mp3"},
    {photo: "https://i.postimg.cc/Y9VxQqF9/Zebra-min.png",name: "Zebra", id: "27", wrongName: "Zorro", audio: "./assets/zebra.mp3", wrongAudio: "./assets/zorro.mp3"}
]



{/* <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/>
                    <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-close-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/> */}

const Donut = () => {
    

    const buttonNameOne = useRef()
    const buttonNameTwo = useRef()
    const [count, setCount] = useState(0)
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()*10))
    const [score, setScore] = useState(0)
    const correctAnswer = animalPictures[count].name
    const wrongAnswer = animalPictures[count].wrongName
    const good = "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"
    const bad = "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-close-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"

    const handleAnswerOne = () => {
        const animal = animalPictures.find(animal => {
            return animalPictures[count].name === buttonNameOne.current.value ? buttonNameOne.current.value === animal.name : buttonNameOne.current.value === animal.wrongName})
        const audioToPlay =  animalPictures[count].name === buttonNameOne.current.value ? animal.audio : animal.wrongAudio
        const audio = new Audio(audioToPlay)
        audio.play()
        
        
    }

    const handleAnswerTwo = () => {     
        console.log(buttonNameTwo.current.value)
        const animal = animalPictures.find(animal => {
            return animalPictures[count].name === buttonNameTwo.current.value ? buttonNameTwo.current.value === animal.name : buttonNameTwo.current.value === animal.wrongName})
        console.log(animal)
        const audioToPlay =  animalPictures[count].name === buttonNameTwo.current.value ? animal.audio : animal.wrongAudio
        const audio = new Audio(audioToPlay)
        audio.play()
    }

    const handleSendAnswer = () => {
        setCount(count+1)
        setRandomNumber(Math.floor(Math.random()*10))
        animalPictures[count].name === buttonNameOne.current.value ? setScore(score+10) : score !== 0 && setScore(score-10)  
        animalPictures[count].name === buttonNameOne.current.value ? alphabet[count] = good :  alphabet[count] = bad
        animalPictures[count].name === buttonNameTwo.current.value ? setScore(score+10) : score !== 0 && setScore(score-10)  
        animalPictures[count].name === buttonNameTwo.current.value ? alphabet[count] = good :  alphabet[count] = bad
    }


    return (
        <div className="donutContainer">
            <div className="donutChildren">
                <div id="warped">              
                        {alphabet.map((letter, index)=> {
                        return <img key={index} className={"w"+index}  src={letter} alt="letter"/>
                        })}
                </div>

                <div>

                    <div className="photoAnimal" style={{backgroundImage: `url(${animalPictures[count].photo})`}}></div>
                    <div className="buttonsContainer">
                        <div>
                            <button onClick={handleAnswerOne} ref={buttonNameOne} value={randomNumber%2===0 ? correctAnswer : wrongAnswer}><svg aria-hidden="true" height="40px" width="40px" fill="currentColor" focusable="false" data-prefix="fas" data-icon="volume-up" className="svg-inline--fa fa-volume-up fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg> {randomNumber%2===0 ? correctAnswer : wrongAnswer}</button>
                            <button onClick={handleAnswerTwo} ref={buttonNameTwo} value={randomNumber%2===1 ? correctAnswer : wrongAnswer}><svg aria-hidden="true" height="40px" width="40px" fill="currentColor" focusable="false" data-prefix="fas" data-icon="volume-up" className="svg-inline--fa fa-volume-up fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg> {randomNumber%2===1 ? correctAnswer : wrongAnswer}</button>
                        </div>                        
                        <button onClick={handleSendAnswer}><svg height="40px" width="40px" aria-hidden="true" fill="currentColor" focusable="false" data-prefix="fas" data-icon="check-double" className="svg-inline--fa fa-check-double fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"></path></svg> Listo</button>
                        
                    </div>               
                </div>
            </div>
        </div>
    )   
}

export default Donut