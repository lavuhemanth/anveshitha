import React from 'react';

const TodayDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
  
    return (
          <span className="text-center cl-blue">
            <b>{formattedDate}</b>
          </span>
    );
  };
  
  export default TodayDate;
  