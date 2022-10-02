import React, { useEffect } from 'react'
import p1 from '../../assets/img/p1.jpg'
import p2 from '../../assets/img/p2.jpg'
import p3 from '../../assets/img/p3.jpg'
import mp4 from '../../assets/img/video.mp4'
import webm from '../../assets/img/video.webm'

const SectionStories = () => {


    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => console.log(json))
    }, [])


// BEM Methology

  return (
    <section className="section-stories" id='stories'>

        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={mp4} type='video/mp4' />
                <source src={webm} type='video/webm'/>
                Your browser is not supported!
            </video>
        </div>

        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                We make people genuinely happy
            </h2>
        </div>

        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={p1} alt="Peron on a tour" className='story__img' />
                    <figcaption className="story__caption">
                        Marry Smit 
                    </figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        I have th best week ever with family
                    </h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro cupiditate 
                        quos sunt animi inventore delectus nihil nesciunt adipisci blanditiis veritatis, 
                        minima necessitatibus facere corporis dicta est ratione. Expedita, quos! nesciunt adipisci blanditiis veritatis, 
                    </p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={p2} alt="Peron on a tour" className='story__img' />
                    <figcaption className="story__caption">
                        Marry Smit 
                    </figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        I have th best week ever with family
                    </h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro cupiditate 
                        quos sunt animi inventore delectus nihil nesciunt adipisci blanditiis veritatis, 
                        minima necessitatibus facere corporis dicta est ratione. Expedita, quos! nesciunt adipisci blanditiis veritatis, 
                    </p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={p3} alt="Peron on a tour" className='story__img' />
                    <figcaption className="story__caption">
                        Marry Smit 
                    </figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        I have th best week ever with family
                    </h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro cupiditate 
                        quos sunt animi inventore delectus nihil nesciunt adipisci blanditiis veritatis, 
                        minima necessitatibus facere corporis dicta est ratione. Expedita, quos! nesciunt adipisci blanditiis veritatis, 
                    </p>
                </div>
            </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
            <a href="#" className=' btn-text'>Read All Stories &rarr;</a>
        </div>

    </section>
  )
}

export default SectionStories