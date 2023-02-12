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
       if(slideAnim.index !== dataSlider.length && !slideAnim.inPregress){

        setSlideAnim({index: slideAnim.index + 1, inPregress: true})


        setTimeout(()=> {
            setSlideAnim({index:slideAnim.index +1 ,
            inPregress: false})
        }, 400)

       }
       else if(slideAnim.index === dataSlider.length && !slideAnim.inPregress){

        setSlideAnim({index: 1, inPregress: true})

        setTimeout(()=> {
            setSlideAnim({index: 1 ,
            inPregress: false})
        }, 400)
       }
    }

    const prevSlide = () => {
        if(slideAnim.index !== 1 && !slideAnim.inPregress){
            setSlideAnim({index: slideAnim.index -1, inPregress: true})
            setTimeout(()=> {
                setSlideAnim({index: slideAnim.index -1 ,
                inPregress: false})
            }, 400)
           }
           else if(slideAnim.index === 1 && !slideAnim.inPregress){
            setSlideAnim({index: 5, inPregress: true})
            setTimeout(()=> {
                setSlideAnim({index: 5 ,
                inPregress: false})
            }, 400)
           }
    }

    const movDot = index => {
        setSlideAnim({index: index, inPregress: false})
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
                    <img src={process.env.PUBLIC_URL + `/Imgs/img${index +1}.jpg`} alt="" />
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        
        <div className="container-dots">
          {Array.from({length: 5}).map((item, index) => {
            return <div className={slideAnim.index === index + 1 ? "dot active" : "dot"}
            onClick={() => movDot(index + 1)}
            ></div>
          })}
        </div>

    </div>
  )
}
