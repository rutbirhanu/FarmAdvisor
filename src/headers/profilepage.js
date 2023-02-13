import React, { useState } from 'react'
import AppHeader from './appheader'
import PageSubheader from './pagesubheader'
import "./headerstylesheet.css"
import "../homepage/homepageStyle.css"
import dropdown from "../Assets/image/dropdown.png"
import "../components/component.css"
import { redirect } from 'react-router-dom'
import axios from 'axios';

export default function ProfilePage() {
  const [isOpen, setIsOpen] = useState(false)

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);


  const handleDelete = async () => {
    if (!phoneNumber) {
      setError('Please enter your correct phone number');
      return;
    }
    setError(null);
    setIsDeleting(true);

    try {
      await axios.delete(`/api/account/${phoneNumber}`);
      redirect('/');
      // Perform any necessary clean up or redirects after successful deletion
    } catch (error) {
      console.error(error);
      setError('An error occurred while deleting your account. Please try again later.');
      setIsDeleting(false);
    }
  };
  const toggleHelp = (e) => {
    e.preventDefault()
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <AppHeader />
      <PageSubheader title="My Profile" />
      <div className='parent_div'>
        <div className='second-div'>
          <form  >
            <div className="mb-3">
              <label className="form-label">Phone </label>
              <input type="text"
                className="form-control"
                name="Phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}

                placeholder="Enter Phone Number" />
            </div>
            <hr />
            <div className='dropdown-component' style={{ "padding": "0.4rem" }}>
              <p>Terms And Conditions</p>
              <button className='drop-btn' onClick={toggleHelp}><img src={dropdown} /></button>
              {isOpen && <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a egestas ultrices vitae
                nam sed sit velit elementum. Suspendisse ultrices velit mauris in vel cursus sagitt m dolor sit amet, consectetur adipiscing elit. Nam a egestas ultrices vitae
                nam sed sit velit elementum. Suspendisse ultrices velit mauris in vel cursus sagitt m dolor sit amet, consectetur adipiscing elit. Nam a egestas ultrices vitae
                nam sed sit velit elementum. Suspendisse ultrices velit mauris in vel cursus sagittis.</p>}
            </div>
            <div className='delete'>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {isDeleting ? (
                <p>Deleting account...</p>
              ) : (
                <span onClick={handleDelete}>Delete account</span>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

