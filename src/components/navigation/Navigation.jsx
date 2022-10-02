import React from 'react'

const Navigation = () => {
  return (
    <div className='navigation'>
        
         <input type="checkbox" className="navigation__check-box" id='navi-toggle'/>
         <label htmlFor="navi-toggle" className='navigation__button'>
            <span className="navigation__icon">&nbsp;</span>
         </label>
         <div className="navigation__background"> &nbsp;</div>

         <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><a href="" className="navigation__link"><span>01 </span> Home </a></li>
                <li className="navigation__item"><a href="#main" className="navigation__link"><span>02 </span> About Natours</a></li>
                <li className="navigation__item"><a href="#features" className="navigation__link"><span>03 </span> Your benfits</a></li>
                <li className="navigation__item"><a href="#tours" className="navigation__link"><span>04 </span> Popular tours</a></li>
                <li className="navigation__item"><a href="#stories" className="navigation__link"><span>05 </span> Stories</a></li>
                <li className="navigation__item"><a href="#book" className="navigation__link"><span>06 </span> Book Now</a></li>
            </ul>
         </nav>
    </div>
  )
}

export default Navigation