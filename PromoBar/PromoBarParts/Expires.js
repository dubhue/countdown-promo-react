import React from 'react'

const Expires = props => {
    const padNum = num => {
      return num < 10 ? "0" + num : num;
    };
    const timeString = exp => {
      const days = Math.floor(exp / (1000 * 60 * 60 * 24)),
        hours = Math.floor((exp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((exp % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((exp % (1000 * 60)) / 1000);
      const daysStr = days > 0 ? " in " + days + " days " : "";
      const hoursStr = hours > 0 ? padNum(hours) + ":" : "";
      const minsStr = minutes > 0 ? padNum(minutes) + ":" : "";
      return daysStr + hoursStr + minsStr + padNum(seconds);
    };
    return props.expires ? (
      <div className="expires">| Expires {timeString(props.expires)}</div>
    ) : null;
  };

export default Expires