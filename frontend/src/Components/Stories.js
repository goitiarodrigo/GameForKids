import { useState } from "react"

const videos = [
    {url: "https://www.youtube.com/embed/gGr1EzwxHDY?rel=0", title: "La habichuela mágica", photo: "https://i.postimg.cc/wj5gtf2L/Las-habichuelas-m-gica.jpg"},
    {url: "https://www.youtube.com/embed/t6ABf_I1t5o?rel=0", title: "La avioneta creanubes", photo: "https://i.postimg.cc/7ZrqZ83q/La-avioneta-creanubes.jpg"},
    {url: "https://www.youtube.com/embed/nZJJUHeZZYw?rel=0", title: "Los zanquilargos y el ratoncito Pérez", photo: "https://i.postimg.cc/DyX2hybC/Los-zanquilargos-y-el-ratoncito-P-rez.jpg"},
    {url: "https://www.youtube.com/embed/GqMCve3Sno0?rel=0", title: "Mi deporte favorito", photo: "https://i.postimg.cc/d0qvG2NX/Mi-deporte-favorito.jpg"},
    {url: "https://www.youtube.com/embed/u_RRg7y6ybk?rel=0", title: "Aventura en la ciudad", photo: "https://i.postimg.cc/9MQmHdGT/Aventura-en-la-ciudad.jpg"},
    {url: "https://www.youtube.com/embed/XmB4nMdx4eY?rel=0", title: "Caperucita roja", photo: "https://i.postimg.cc/7LVHRsTw/Caperucita-roja.jpg"},
    {url: "https://www.youtube.com/embed/KHFHKO2YS8w?rel=0", title: "El extraño aparato gris", photo: "https://i.postimg.cc/gjwGnGt2/El-extra-o-aparato-gris.jpg"},
    {url: "https://www.youtube.com/embed/TtCRbdPJQu0?rel=0", title: "El flautista de hamelín", photo: "https://i.postimg.cc/NFWBXZZ7/El-flautista-de-Hamel-n.jpg"},
    {url: "https://www.youtube.com/embed/ktY560X17kg?rel=0", title: "El valiente Curtis", photo: "https://i.postimg.cc/cHksxvmz/El-valiente-Curtis.jpg"},
    {url: "https://www.youtube.com/embed/F12PUYYHVzA?rel=0", title: "Garbancito", photo: "https://i.postimg.cc/c1jsP86g/Garbancito.jpg"}
]

const Stories = () => {

    const [modal, setModal] = useState(false)
    const [indexVideo, setIndexVideo] = useState(0)

    const showModal = (e, index) => {
        e.stopPropagation()
        setModal(true)
        setIndexVideo(index)
    }

    const hiddenModal = (e) => {
        e.stopPropagation()
    }

    return (
        <div className="storiesContainer" onClick={()=>setModal(false)}>
            {videos.map((video, index)=> {
                return  <div className="photoFromVideoContainer"  key={index}>
                            <p>{video.title}</p>
                            <div className="photoFromVideo" onClick={(e)=>showModal(e, index)}  style={{backgroundImage: `url(${video.photo})`}} ></div>
                        </div>            
            })}
                {modal && <div className="modalContainer" onClick={(e)=>hiddenModal(e)}>
                    <iframe 
                        width="95%" height="95%" src={videos[indexVideo].url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>}
        </div>
    )
}

export default Stories