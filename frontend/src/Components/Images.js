import { useState } from "react"

const images = [
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
    {photo: "https://i.postimg.cc/Y9VxQqF9/Zebra-min.png",name: "Zebra", id: "27", wrongName: "Zorro" },
    {photo: "https://i.postimg.cc/T3WD6F4y/arbol.png", name: "Arbol", id: "28"},
    {photo: "https://i.postimg.cc/63hZPZ1Y/auto.png", name: "Auto", id: "29"},
    {photo: "https://i.postimg.cc/d3q2Q6Tb/avion-2.png", name: "Avion", id: "30"},
    {photo: "https://i.postimg.cc/Sx5fLcw9/banana.png", name: "Banana", id: "31"},
    {photo: "https://i.postimg.cc/5055MTj5/cama.png", name: "Cama", id: "32"},
    {photo: "https://i.postimg.cc/25hh4Mdp/chupete.png", name: "Chupete", id: "33"},
    {photo: "https://i.postimg.cc/CxZjKzzx/flor.png", name: "Flor", id: "34"},
    {photo: "https://i.postimg.cc/9XpP866C/galleta.png", name: "Galleta", id: "35"},
    {photo: "https://i.postimg.cc/KjqMG2bT/globo.png", name: "Globo", id: "36"},
    {photo: "https://i.postimg.cc/qBXQfh3f/lapiz-1.png", name: "Lapiz", id: "37"},
    {photo: "https://i.postimg.cc/CMmDHj8K/llave.png", name: "Llave", id: "38"},
    {photo: "https://i.postimg.cc/Dyv67vrS/manzana-1.png", name: "Manzana", id: "39"},
    {photo: "https://i.postimg.cc/XvCcspbz/mariposa-1.png", name: "Mariposa", id: "40"},
    {photo: "https://i.postimg.cc/7647X9X5/naranja.png", name: "Naranja", id: "41"},
    {photo: "https://i.postimg.cc/J40XTG35/nube.png", name: "Nube", id: "42"},
    {photo: "https://i.postimg.cc/LXFkw246/pantalon.png", name: "Pantalon", id: "43"},
    {photo: "https://i.postimg.cc/2SPnLrZF/silla.png", name: "Silla", id: "44"},
    {photo: "https://i.postimg.cc/3NngkGXd/sombrero.png", name: "Sombrero", id: "45"},
    {photo: "https://i.postimg.cc/zXGC9dNW/zapatilla.png", name: "Zapatilla", id: "46"}
]

const Images = () =>{
    const [nRandom, setNRandom] = useState(Math.floor(Math.random()*42))
    const [count, setCount] = useState(0)
    const imagesForPlay = images.slice(nRandom, nRandom+4)
    const thing = Math.floor(Math.random()*3)
    

    const handleChooseImage = (name) => {
        name === imagesForPlay[thing].name ? setCount(count+10) : count !== 0 && setCount(count-10)
        
        setNRandom(Math.floor(Math.random()*42))
    }

    return (
        <div>
            <p>{imagesForPlay[thing].name}</p>
            {imagesForPlay.map((image, index)=> {
                return <img onClick={()=>handleChooseImage(image.name)} key={image.id} src={image.photo} alt="things"/>
            })}
            <p>{count}</p>
        </div>
    )
}

export default Images