import React from 'react'
import p1 from '../../assets/img/p1.jpg'
import p2 from '../../assets/img/p2.jpg'


const PopUp = () => {
  return (
    <div className="popup" id='popup'>
        <div className="popup__content">

            <div className="popup__left">
                <img className='popup__img' src={p1} alt="photo" />
                <img className='popup__img' src={p2} alt="photo" />
            </div>            
            <div className="popup__right">
                <a href="#tours" className="popup__close">&times;</a>
                <h2 className="popup__heading-secondary u-margin-bottom-small">Start Booking Now</h2>
                <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                <p className="popup__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius cupiditate dignissimos ratione libero similique, 
                    consequatur unde vitae voluptatem tempora voluptates in. Iusto consectetur facilis expedita voluptatem dolores 
                    reiciendis odit a.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius cupiditate dignissimos ratione libero similique, 
                    consequatur unde vitae voluptatem tempora voluptates in. Iusto consectetur facilis expedita voluptatem dolores 
                    reiciendis odit a.
                </p>
                <a href="#book" className="btn btn--green">Booking Now</a>
            </div>
        </div>
    </div>
  )
}

export default PopUp