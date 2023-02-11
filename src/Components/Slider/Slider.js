import React, {useState} from 'react'
import dataSlider from './dataSlider'
import './Slider.css'
import BtnSlider from './BtnSlider'


//dataSlider c'est le tableau qui nous permettra d'iterer a l'interieur pour afficher les différentes images
export default function Slider() {
    //j'ai envie d'avoir un state un index qui me permet d'incrémenter et décrementer pour afficher les différents photos

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inPregress: false
    })

    const nextSlide = () => {
       if(slideAnim.index != dataSlider.length){
        setSlideAnim({index: slideAnim.index +1, inPregress: true})
       }
       else if(slideAnim.index === dataSlider.length){
        setSlideAnim({index: 1, inPregress: true})
       }
    }

    const prevSlide = () => {
        if(slideAnim.index !== 1){
            setSlideAnim({index: slideAnim.index -1, inPregress: true})
           }
           else if(slideAnim.index === 1){
            setSlideAnim({index: 5, inPregress: true})
           }
    }


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
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  )
}
