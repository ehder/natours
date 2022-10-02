import React from 'react'

const SectionBooking = () => {
  return (
    <section className="section-book" id='book'>
        
        <div className="row">
            <div className="book">
                <div className="book__form">
                
                <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary"> Start Booking Now </h2>
                </div>

                    <form action="#" className="form">
                        <div className="form__group">
                            <input type="text" id='name' className="form__input" placeholder='Full Name' required/>
                            <label htmlFor="name" className="form__label">Full Name</label>
                        </div>

                        <div className="form__group">
                            <input type="email" id='email' className="form__input" placeholder='Email' required/>
                            <label htmlFor="email" className="form__label">Email</label>
                        </div>

                        <div className="form__group u-margin-bottom-medium">
                            <div className="form__radio-group">
                                <input name='size' type="radio" className="form__radio-input" id='small'/>
                                <label htmlFor="small" className="form__radio-label">
                                    <span className="form__radio-button"></span>
                                    Small tour group
                                </label>
                            </div>
                            <div className="form__radio-group ">
                                <input name='size' type="radio" className="form__radio-input" id='large'/>
                                <label htmlFor="large" className="form__radio-label">
                                    <span className="form__radio-button"></span>
                                    Large tour group
                                </label>
                            </div>
                        </div>

                        <div className="form__group">
                            <button type='submit' className="btn btn--green">Next step &rarr;</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default SectionBooking