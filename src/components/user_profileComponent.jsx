import React, { useState } from 'react';

const UserComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    // redirect to profile page
  };

  const handleHelpClick = () => {
    // redirect to help page
  };

  const handleSignOutClick = () => {
    // sign out user and clear any stored data
  };

  return (
        
        <div className="menu">
          <div className='menu-item' onClick={handleProfileClick}>Profile</div>
          <div className='menu-item' onClick={handleHelpClick}>Help</div>
          <div className='menu-item' onClick={handleSignOutClick}>Sign Out</div>
        
    </div>
  );
};

export default UserComponent;
