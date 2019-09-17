import React from 'react';
import './styles.scss';
<<<<<<< 4f6589fee7b86c869775285d7c721b7c564ee972
import Logo from '../../assets/graphics/logo.jpg';

=======
import Logo from '../../assets/graphics/logo.jpg'
>>>>>>> bank: create account functionality
const Header = (props) => {
  return (
    <header data-testid='headerComponent'>
      <div className='logo'>
        <img data-testid='logoIMG' className='LogoTest' src={Logo} alt='Logo' />
      </div>
    </header>
  )
}

export default Header;