import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UserComponent = () => {
 
  const handleProfileClick = () => {
    <Link to="/profilePage" ></Link>
    // navigate('/profile')

    // redirect to profile page
  };

  const handleHelpClick = () => {
    <Link to="/helpPage" ></Link>
    // navigate('/help')
    // redirect to help page
  };

  const handleSignOutClick = () => {
    // sign out user and clear any stored data
  };
  return (
        
        <div className="menu">
          <div className='menu-item'><Link to="/profilePage" style={styles.linkStyle} >Profile</Link></div>
          <div className='menu-item text-decoration-none' onClick={handleHelpClick}>Help</div>
          <div className='menu-item text-decoration-none' onClick={handleSignOutClick}>Sign Out</div>
        
    </div>
  );
};

export default UserComponent;

const  styles={
    linkStyle:{
        textDecoration:'none',

    }
}