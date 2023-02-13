import React, { useState } from 'react';
import axios from 'axios';

const DeleteAccount = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!phoneNumber) {
      setError('Please enter your phone number.');
      return;
    }
    setError(null);
    setIsDeleting(true);
    try {
      await axios.delete(`/api/account/${phoneNumber}`);
      // Perform any necessary clean up or redirects after successful deletion
    } catch (error) {
      console.error(error);
      setError('An error occurred while deleting your account. Please try again later.');
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter your phone number"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isDeleting ? (
        <p>Deleting account...</p>
      ) : (
        <button onClick={handleDelete}>Delete account</button>
      )}
    </div>
  );
};

export default DeleteAccount;
