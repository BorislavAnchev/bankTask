import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.jpg' // Can't seem to find it.

const Header = (props) => {
  return (
    <header data-test='headerComponent'>
      <div className='logo'>
        <img data-test='logoIMG' className='LogoTest' src={Logo} alt='Logo' />
      </div>
    </header>
  )
}

export default Header;