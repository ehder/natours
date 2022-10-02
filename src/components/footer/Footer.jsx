import React from 'react'
import logo from '../../assets/img/logo-white.png'

const Footer = () => {
  return (
    <footer className='footer'>

            <div className="footer__logo-box">
              <img src={logo} alt="logo" className='footer__logo'/>
            </div>

            <div className="row">
              <div className="col-1-of-2">
                  <div className="footer__navigation">
                      <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Privicy</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-1-of-2">
                  <p className="footer__copyright">
                      Build by <a href="#" className="footer__link"> Saw Eh Dar ler &nbsp;</a>
                      Copyright &copy;  2022. A credit to the original author, Jonas Schmedtmann base design. 
                  </p>
              </div>
            </div>
        
    </footer>
  )
}

export default Footer
