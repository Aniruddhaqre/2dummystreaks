import React, { useState, useEffect } from 'react';

const DailyButton = () => {
  const [canClick, setCanClick] = useState(true);

  useEffect(() => {
    // Check local storage for last clicked date
    const lastClickedDate = localStorage.getItem('lastClickedDate');
    console.log(lastClickedDate)

    // If last clicked date exists and is today, disable the button
    if (lastClickedDate && isToday(new Date(lastClickedDate))) {
      setCanClick(false);
    }
  }, []);

  const handleClick = () => {
    // Check if the button can be clicked
    if (canClick) {
      // Disable the button
      setCanClick(false);

      // Save the current date in local storage
      const currentDate = new Date();
      localStorage.setItem('lastClickedDate', currentDate.toISOString());

      // Perform the desired action when the button is clicked
      console.log('Button clicked!');
    }
  };

  return (
    <button onClick={handleClick} disabled={!canClick}>
      Click me (Once a day)
    </button>
  );
};

// Helper function to check if two dates are the same day
const isToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export default DailyButton;
