import { useState } from "react"

const images = [
    {photo: "https://i.postimg.cc/ht9x5GR6/Ara-a-min.png", name: "Araña", id: "1", wrongName: "Abeja", audio: "./assets/abeja.mp3"},
    {photo: "https://i.postimg.cc/wTNs1BMM/Ballena-min.png", name: "Ballena", id: "2", wrongName: "Burro", audio: "./assets/burro.mp3"},
    {photo: "https://i.postimg.cc/SQ3MQ9yH/Caballo-min.png", name: "Caballo", id: "3", wrongName: "Camaleon", audio: "./assets/camaleon.mp3"},
    {photo: "https://i.postimg.cc/G2pytJTn/Delf-n-min.png", name: "Delfin", id: "4", wrongName: "Dinosaurio", audio: "./assets/delfin.mp3"},
    {photo: "https://i.postimg.cc/SKk8Fpys/Elefante-min.png", name: "Elefante", id: "5", wrongName: "Erizo", audio: "./assets/elefante.mp3"},
    {photo: "https://i.postimg.cc/6QcZB13h/Foca-min.png", name: "Foca", id: "6", wrongName: "Flamenco", audio: "./assets/flamenco.mp3"},
    {photo: "https://i.postimg.cc/DwK4LK4g/Gato-min.png", name: "Gato", id: "7", wrongName: "Gorila", audio: "./assets/gorila.mp3"},
    {photo: "https://i.postimg.cc/PJgpSg3d/Hormiga-min.png", name: "Hormiga", id: "8", wrongName: "Hipocampo", audio: "./assets/hormiga.mp3"},
    {photo: "https://i.postimg.cc/631Gv2C2/Iguana-min.png", name: "Iguana", id: "9", wrongName: "Impala", audio: "./assets/iguana.mp3"},
    {photo: "https://i.postimg.cc/Hnc84YtS/Jirafa-min.png", name: "Jirafa", id: "10", wrongName: "Jabali", audio: "./assets/jirafa.mp3"},
    {photo: "https://i.postimg.cc/g2qXKBvP/Koala-min.png", name: "Koala", id: "11", wrongName: "Kiwi", audio: "./assets/koala.mp3"},
    {photo: "https://i.postimg.cc/s1CxYpxX/Leon-min.png", name: "Leon", id: "12", wrongName: "Loro", audio: "./assets/leon.mp3"},
    {photo: "https://i.postimg.cc/VvC507Yp/Mono-min.png", name: "Mono", id: "13", wrongName: "Mamut", audio: "./assets/mono.mp3"},
    {photo: "https://i.postimg.cc/s2jBH9cG/Nutria-min.png", name: "Nutria", id: "14", wrongName: "Novillo", audio: "./assets/nutria.mp3"},
    {photo: "https://i.postimg.cc/cJFvpg99/and-min.png", name: "Ñandu", id: "15", wrongName: "Ñeque", audio: "./assets/niandu.mp3"},
    {photo: "https://i.postimg.cc/h4fyvNmv/Oso-min.png", name: "Oso", id: "16", wrongName: "Orangutan", audio: "./assets/oso.mp3"},
    {photo: "https://i.postimg.cc/mDqtDxG7/Perro-min.png", name: "Perro", id: "17", wrongName: "Pato", audio: "./assets/perro.mp3"},
    {photo: "https://i.postimg.cc/gJrxmz1Y/Quirquincho-min.png", name: "Quirquincho", id: "18", wrongName: "Quetzal", audio: "./assets/quirquincho.mp3"},
    {photo: "https://i.postimg.cc/59TPCp53/Rana-min.png", name: "Rana", id: "19", wrongName: "Raton", audio: "./assets/rana.mp3"},
    {photo: "https://i.postimg.cc/NML4yr5S/Serpiente-min.png", name: "Serpiente", id: "20", wrongName: "Salmón", audio: "./assets/serpiente.mp3"},
    {photo: "https://i.postimg.cc/qMK1Xnjd/Toro-min.png", name: "Toro", id: "21", wrongName: "Tucan", audio: "./assets/toro.mp3"},
    {photo: "https://i.postimg.cc/W1PX93Hq/Urraca-min.png", name: "Urraca", id: "22", wrongName: "Uatipi", audio: "./assets/urraca.mp3"},
    {photo: "https://i.postimg.cc/0ydZhsTW/Vaca-min.png", name: "Vaca", id: "23", wrongName: "Vicuña", audio: "./assets/vaca.mp3"},
    {photo: "https://i.postimg.cc/nrDG2bK1/Wombat-min.png", name: "Wombat", id: "24", wrongName: "Walabi", audio: "./assets/wombat.mp3"},
    {photo: "https://i.postimg.cc/5t4pVr1x/Xarda-min.png", name: "Xarda", id: "25", wrongName: "Xenopus", audio: "./assets/xarda.mp3"},
    {photo: "https://i.postimg.cc/6QMc5h5C/Yaguaret-min.png", name: "Yaguarete", id: "26", wrongName: "Yacare", audio: "./assets/yaguarete.mp3"},
    {photo: "https://i.postimg.cc/Y9VxQqF9/Zebra-min.png",name: "Zebra", id: "27", wrongName: "Zorro" , audio: "./assets/zebra.mp3"},
    {photo: "https://i.postimg.cc/T3WD6F4y/arbol.png", name: "Arbol", id: "28", audio: "./assets/arbol.mp3"},
    {photo: "https://i.postimg.cc/63hZPZ1Y/auto.png", name: "Auto", id: "29", audio: "./assets/auto.mp3"},
    {photo: "https://i.postimg.cc/d3q2Q6Tb/avion-2.png", name: "Avion", id: "30", audio: "./assets/avion.mp3"},
    {photo: "https://i.postimg.cc/Sx5fLcw9/banana.png", name: "Banana", id: "31", audio: "./assets/banana.mp3"},
    {photo: "https://i.postimg.cc/5055MTj5/cama.png", name: "Cama", id: "32", audio: "./assets/cama.mp3"},
    {photo: "https://i.postimg.cc/25hh4Mdp/chupete.png", name: "Chupete", id: "33", audio: "./assets/chupete.mp3"},
    {photo: "https://i.postimg.cc/CxZjKzzx/flor.png", name: "Flor", id: "34", audio: "./assets/flor.mp3"},
    {photo: "https://i.postimg.cc/9XpP866C/galleta.png", name: "Galleta", id: "35", audio: "./assets/galleta.mp3"},
    {photo: "https://i.postimg.cc/KjqMG2bT/globo.png", name: "Globo", id: "36", audio: "./assets/globo.mp3"},
    {photo: "https://i.postimg.cc/qBXQfh3f/lapiz-1.png", name: "Lapiz", id: "37", audio: "./assets/lapiz.mp3"},
    {photo: "https://i.postimg.cc/CMmDHj8K/llave.png", name: "Llave", id: "38", audio: "./assets/llave.mp3"},
    {photo: "https://i.postimg.cc/Dyv67vrS/manzana-1.png", name: "Manzana", id: "39", audio: "./assets/manzana.mp3"},
    {photo: "https://i.postimg.cc/XvCcspbz/mariposa-1.png", name: "Mariposa", id: "40", audio: "./assets/mariposa.mp3"},
    {photo: "https://i.postimg.cc/7647X9X5/naranja.png", name: "Naranja", id: "41", audio: "./assets/naranja.mp3"},
    {photo: "https://i.postimg.cc/J40XTG35/nube.png", name: "Nube", id: "42", audio: "./assets/nube.mp3"},
    {photo: "https://i.postimg.cc/LXFkw246/pantalon.png", name: "Pantalon", id: "43", audio: "./assets/pantalon.mp3"},
    {photo: "https://i.postimg.cc/2SPnLrZF/silla.png", name: "Silla", id: "44", audio: "./assets/silla.mp3"},
    {photo: "https://i.postimg.cc/3NngkGXd/sombrero.png", name: "Sombrero", id: "45", audio: "./assets/sombrero.mp3"},
    {photo: "https://i.postimg.cc/zXGC9dNW/zapatilla.png", name: "Zapatilla", id: "46", audio: "./assets/zapatilla.mp3"}
]

const Images = () =>{
    const [nRandom, setNRandom] = useState(Math.floor(Math.random()*42))
    const [score, setScore] = useState(0)
    const imagesForPlay = images.slice(nRandom, nRandom+4)
    const thing = Math.floor(Math.random()*3)
    

    const handleChooseImage = (name) => {
        name === imagesForPlay[thing].name ? setScore(score+10) : score !== 0 && setScore(score-10)
        
        setNRandom(Math.floor(Math.random()*42))
    }

    const handleAnimalSound = () => {
        let audio = new Audio(imagesForPlay[thing].audio)
        audio.play()
    }

    return (
        <div>
            <p onClick={handleAnimalSound}>
                <svg height="40px" width="40px" aria-hidden="true" fill="currentColor" focusable="false" data-prefix="fas" data-icon="volume-up" class="svg-inline--fa fa-volume-up fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path  d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg>
            </p>
            <div className="cardContainer"> 
                {imagesForPlay.map(image=> {
                    return <div className="cardAnimal"><div onClick={()=>handleChooseImage(image.name)} key={image.id} style={{backgroundImage: `url(${image.photo})`}} alt="things"></div></div>
                })}
                
            </div>
        </div>
    )
}

export default Images