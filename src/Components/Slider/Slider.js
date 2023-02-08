import React, {useState} from 'react'
import dataSlider from './dataSlider'
import './Slider.css'


//dataSlider c'est le tableau qui nous permettra d'iterer a l'interieur pour afficher les différentes images
export default function Slider() {
    //j'ai envie d'avoir un state un index qui me permet d'incrémenter et décrementer pour afficher les différents photos

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inPregress: false
    })



  return (
    <div className="container-slider">
        {dataSlider.map((obj, index) => {
            return (
                <div
                key={obj.id}
                className={slideAnim.index === index +1 ?
                "slide active-anim" : "slide"}
                >
                    <img src={`/Imgs/img${index +1}.jpg`} alt="" />
                </div>
            )
        })}
    </div>
  )
}
