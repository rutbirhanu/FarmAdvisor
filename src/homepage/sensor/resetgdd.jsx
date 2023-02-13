import React, { useState, useEffect } from 'react';

function ResetGDD() {
  const [gdd, setGDD] = useState(0);

  useEffect(() => {
    async function fetchGDD() {
      const response = await fetch('http://localhost/api/gdd');
      const data = await response.json();
      setGDD(data.gdd);
    }
    fetchGDD();
  }, []);

  async function handleReset() {
    const response = await fetch('http://localhost/api/reset', {
      method: 'POST',
    });
    const data = await response.json();
    setGDD(data.gdd);
  }

  return (
    <div>
      <p>Current GDD: {gdd}</p>
      <button onClick={handleReset}>Reset GDD</button>
    </div>
  );
}

export default ResetGDD;
