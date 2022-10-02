import React from 'react'
import logo from '../../assets/img/logo-white.png'

const Header = () => {
  return (
    <header className='header' id=''>
        
        <div className="header__logo-box">
            <img className='header__logo' src={logo} alt="logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
              <span className='heading-primary--main'>Outdoors</span>
              <span className='heading-primary--sub'>is where life is happens</span>
          </h1>
          <a className="btn btn--white btn--animated" href='#tours'>discover our tours</a>
        </div>

    </header>
  )
}

export default Header