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
    {photo: "https://i.postimg.cc/ht9x5GR6/Ara-a-min.png", name: "Araña", id: "1", wrongName: "Abeja"},
    {photo: "https://i.postimg.cc/wTNs1BMM/Ballena-min.png", name: "Ballena", id: "2", wrongName: "Burro"},
    {photo: "https://i.postimg.cc/SQ3MQ9yH/Caballo-min.png", name: "Caballo", id: "3", wrongName: "Camaleon"},
    {photo: "https://i.postimg.cc/G2pytJTn/Delf-n-min.png", name: "Delfin", id: "4", wrongName: "Dinosaurio"},
    {photo: "https://i.postimg.cc/SKk8Fpys/Elefante-min.png", name: "Elefante", id: "5", wrongName: "Erizo"},
    {photo: "https://i.postimg.cc/6QcZB13h/Foca-min.png", name: "Foca", id: "6", wrongName: "Flamenco"},
    {photo: "https://i.postimg.cc/DwK4LK4g/Gato-min.png", name: "Gato", id: "7", wrongName: "Gorila"},
    {photo: "https://i.postimg.cc/PJgpSg3d/Hormiga-min.png", name: "Hormiga", id: "8", wrongName: "Hipocampo"},
    {photo: "https://i.postimg.cc/631Gv2C2/Iguana-min.png", name: "Iguana", id: "9", wrongName: "Impala"},
    {photo: "https://i.postimg.cc/Hnc84YtS/Jirafa-min.png", name: "Jirafa", id: "10", wrongName: "Jabali"},
    {photo: "https://i.postimg.cc/g2qXKBvP/Koala-min.png", name: "Koala", id: "11", wrongName: "Kiwi"},
    {photo: "https://i.postimg.cc/s1CxYpxX/Leon-min.png", name: "Leon", id: "12", wrongName: "Loro"},
    {photo: "https://i.postimg.cc/VvC507Yp/Mono-min.png", name: "Mono", id: "13", wrongName: "Mamut"},
    {photo: "https://i.postimg.cc/s2jBH9cG/Nutria-min.png", name: "Nutria", id: "14", wrongName: "Novillo"},
    {photo: "https://i.postimg.cc/cJFvpg99/and-min.png", name: "Ñandu", id: "15", wrongName: "Ñeque"},
    {photo: "https://i.postimg.cc/h4fyvNmv/Oso-min.png", name: "Oso", id: "16", wrongName: "Orangutan"},
    {photo: "https://i.postimg.cc/mDqtDxG7/Perro-min.png", name: "Perro", id: "17", wrongName: "Pato"},
    {photo: "https://i.postimg.cc/gJrxmz1Y/Quirquincho-min.png", name: "Quirquincho", id: "18", wrongName: "Quetzal"},
    {photo: "https://i.postimg.cc/59TPCp53/Rana-min.png", name: "Rana", id: "19", wrongName: "Raton"},
    {photo: "https://i.postimg.cc/NML4yr5S/Serpiente-min.png", name: "Serpiente", id: "20", wrongName: "Salmón"},
    {photo: "https://i.postimg.cc/qMK1Xnjd/Toro-min.png", name: "Toro", id: "21", wrongName: "Tucan"},
    {photo: "https://i.postimg.cc/W1PX93Hq/Urraca-min.png", name: "Urraca", id: "22", wrongName: "Uatipi"},
    {photo: "https://i.postimg.cc/0ydZhsTW/Vaca-min.png", name: "Vaca", id: "23", wrongName: "Vicuña"},
    {photo: "https://i.postimg.cc/nrDG2bK1/Wombat-min.png", name: "Wombat", id: "24", wrongName: "Walabi"},
    {photo: "https://i.postimg.cc/5t4pVr1x/Xarda-min.png", name: "Xarda", id: "25", wrongName: "Xenopus"},
    {photo: "https://i.postimg.cc/6QMc5h5C/Yaguaret-min.png", name: "Yaguarete", id: "26", wrongName: "Yacare"},
    {photo: "https://i.postimg.cc/Y9VxQqF9/Zebra-min.png",name: "Zebra", id: "27", wrongName: "Zorro" }
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
        setCount(count+1)
        setRandomNumber(Math.floor(Math.random()*10))
        animalPictures[count].name === buttonNameOne.current.value ? setScore(score+10) : score !== 0 && setScore(score-10)
        animalPictures[count].name === buttonNameOne.current.value ? alphabet[count] = good :  alphabet[count] = bad
       
    }

    const handleAnswerTwo = () => {
        setCount(count+1)
        setRandomNumber(Math.floor(Math.random()*10))
        animalPictures[count].name === buttonNameTwo.current.value ? setScore(score+10) : score !== 0 && setScore(score-10)  
        animalPictures[count].name === buttonNameTwo.current.value ? alphabet[count] = good :  alphabet[count] = bad
        
    }

    return (
        <div>
            <div id="warped">              
                    {alphabet.map((letter, index)=> {
                       return <img key={index} className={"w"+index}  src={letter} alt="letter"/>
                    })}
            </div>

            <img src={animalPictures[count].photo} alt="animal"/>
                   
            
            <button onClick={handleAnswerOne} ref={buttonNameOne} value={randomNumber%2===0 ? correctAnswer : wrongAnswer}>{randomNumber%2===0 ? correctAnswer : wrongAnswer}</button>
            <button onClick={handleAnswerTwo} ref={buttonNameTwo} value={randomNumber%2===1 ? correctAnswer : wrongAnswer}>{randomNumber%2===1 ? correctAnswer : wrongAnswer}</button>

            <p>{score}</p>          

        </div>
    )   
}

export default Donut