import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserComponent = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        setAuthenticated(true);
    }
}, []);

  const handleSignOutClick = () => {
    // sign out user and clear any stored data
    localStorage.removeItem("token");
    setAuthenticated(false);
  };
  return (
        
        <div className="menu">
          <div className='menu-item'><Link to="/profilePage" >Profile</Link></div>
          <div className='menu-item text-decoration-none' > <Link to="/helpPage" ></Link></div>
          <div className='menu-item text-decoration-none'onClick={handleSignOutClick}>Sign Out</div>
        
    </div>
  );
};

export default UserComponent;


const  styles={
    linkStyle:{
        textDecoration:'none',

    }
}
