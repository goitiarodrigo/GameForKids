

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
    let w = -1

{/* <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/>
                    <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-close-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/> */}

const Donuts = () => {
    return (
        <div>
            <div id="warped">              
                    {alphabet.map((letter, index)=> {
                        w++
                       return <img key={index} className={"w"+w}  src={letter} alt="letter"/>
                    })}
            </div>
            <button></button>            

        </div>
    )   
}

export default Donuts