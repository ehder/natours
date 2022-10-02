import React from 'react'
import {TbWorld} from 'react-icons/tb'; 
import {VscCompassActive} from 'react-icons/vsc'; 
import {SiOpenstreetmap} from 'react-icons/si'; 
import {GiSelfLove} from 'react-icons/gi'; 
import { useEffect } from 'react';
import { useState } from 'react';



const SeactionFeatures = () => {
    
      const [anima, setAnima] = useState("");
      let scroll_position = 0;
      var section_features_position = 800;

      const handleAnimation = () => {
            scroll_position = window.scrollY;
            if (scroll_position > section_features_position) {
                setAnima("comeFromLeft 2s")
            }
      }

      useEffect( ()=> {
        window.addEventListener('scroll', handleAnimation)
      },[anima])


  return (
    <section className='section-features'  id='features'>
       

        <div className="row" style={ {animation: anima} }>
            <div className="col-1-of-4" id='#animation'>
                <div className="feature-box">
                    <TbWorld className="feature-box__icon icon-basic-wrold"/>
                    <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                    <p className="feature-box__text">
                        Life is short and the world is wide. The world is yours to explore.
                    </p>
                </div>
            </div>

            <div className="col-1-of-4">
                <div className="feature-box">
                    <VscCompassActive className="feature-box__icon icon-basic-compas"/>
                    <h3 className="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
                    <p className="feature-box__text">
                        Let's meet in nature, and be the bedrock of shared peace.
                    </p>
                </div>
            </div>

            <div className="col-1-of-4">
                <div className="feature-box">
                    <SiOpenstreetmap className="feature-box__icon icon-basic-map"/>
                    <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                    <p className="feature-box__text">
                        Fill your life with adventures, not things have stories to tell not stuff to show
                    </p>
                </div>
            </div>

            <div className="col-1-of-4">
                <div className="feature-box">
                    <GiSelfLove className="feature-box__icon icon-basic-love"/>
                    <h3 className="heading-tertiary u-margin-bottom-small">live a healthier life</h3>
                    <p className="feature-box__text">
                        Nature is the greatest place to heal and recharge.
                    </p>
                </div>
            </div>
        
        </div>
    </section>
  )
}

export default SeactionFeatures