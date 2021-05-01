import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import NavBar from './NavBar/NavBar';

const Header = () => {
    return (
        <div className=''>
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;