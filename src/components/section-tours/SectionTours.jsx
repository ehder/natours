import React, { useEffect, useState } from 'react'

const SectionTours = () => {

    const [anima, setAnima] = useState("");
    let scroll_position = 0;
    var section_tours_position = 100;

    const handleAnimation = () => {
          scroll_position = window.scrollY;
          if (scroll_position > section_tours_position) {
              setAnima("comeFromLeft 2s")
          }
    }
    
    useEffect( ()=> {
        window.addEventListener('scroll', handleAnimation)
      },[anima])

      const sectionFeaturesStyle = {
        animation: anima,
      }


  return (
    <section className='section-tours' id='tours'>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Most popular tours
                </h2>
            </div>

            <div className="row">
                
                <div className="col-1-of-3" >
                    <div className="card">
                        <div className="card__side card__side--front card__side--front-1">
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    the sea explorer
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guide</li>
                                    <li>Sleepin cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                    <p className="card__price-value">$297</p>
                                </div>
                                <a href="#popup" className='btn btn--white btn--animated'>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front card__side--front-2">
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--2">
                                    the forest hiker
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>7 day tours</li>
                                    <li>Up to 40 people</li>
                                    <li>6 tour guide</li>
                                    <li>Sleepin provided tents</li>
                                    <li>Difficulty: medium</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                    <p className="card__price-value">$497</p>
                                </div>
                                <a href="#popup" className='btn btn--white btn--animated'>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front card__side--front-3">
                            <div className="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">
                                    the snow adventurer
                                </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>5 day tours</li>
                                    <li>Up to 15 people</li>
                                    <li>3 tour guide</li>
                                    <li>Sleepin in provided tents</li>
                                    <li>Difficulty: hard</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                    <p className="card__price-value">$897</p>
                                </div>
                                <a href="#popup" className='btn btn--white btn--animated'>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="u-center-text u-margin-top-big u-margin-top-huge ">
                <a href="#" className='btn btn--green btn--animated'>Discover all tours</a>
            </div>

        
    </section>
  )
}

export default SectionTours