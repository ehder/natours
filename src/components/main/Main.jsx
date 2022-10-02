import React from 'react'
// import '../../pages/home.scss'
import nat1 from '../../assets/img/view1.jpg';
import nat2 from '../../assets/img/view2.jpg';
import nat3 from '../../assets/img/view3.jpg';
import nat4 from '../../assets/img/view4.jpg';

const Main = () => {
  return (
    <main>
        <section className="section-about" id='main'>

            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                  Exciting tours for adventurous people
              </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                  
                      <h3 className="heading-tertiary u-margin-bottom-small">
                        You're going to fall in love with nature
                      </h3>
                      <p className='paragraph'>
                        We live on the most beautiful planet, Earth which has very clean and attractive nature full of greenery. 
                        Nature is our best friend which provides us all the resources to live here. It gives us water to drink, 
                        pure air to breathe, food to eat, land to stay, animals, plants for our other uses, etc for our betterment. 
                        We should fully enjoy the nature without disturbing its ecological balance. We should care our nature, 
                        make it peaceful, keep it clean and prevent it from the destruction so that we can enjoy our nature forever. 
                        Nature is a most precious gift given by the God to us to enjoy but not to harm.
                      </p>

                      <h3 className='heading-tertiary u-margin-bottom-small'>
                        Live adventures like you have never before
                      </h3>

                      <p className='paragraph'>
                      People with a strong Adventurous Nature are all about pushing the limits, taking risks, and being competitive. 
                      The adventurous enjoy seeing what happens if they just went a little further, or tried things a different way. 
                      Some adventurous folks enjoy putting their body to the test, and might take to extreme sports such as mountain 
                      climbing or bungee jumping. However, those who are more academically inclined might use competition as a means 
                      of stretching their limits, though some are so self-driven that they don't need anyone to go up against to achieve 
                      great heights or explore new vistas.
                      </p>

                      <a href="#" className=' btn-text'>Learn more &rarr;</a>

                  </div>

                
                <div className="col-1-of-2">
                  <div className="composition">
                    <img src={nat1} alt="" className="composition__photo composition__photo--p1" />
                    <img src={nat2} alt="" className="composition__photo composition__photo--p2" />
                    <img src={nat4} alt="" className="composition__photo composition__photo--p3" />
                  </div>
                </div>
            </div>

        </section>

    </main>
  )
}

export default Main