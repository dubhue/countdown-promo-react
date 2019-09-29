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
    const plural = days > 1 ? "days" : "day"
    const daysStr = days ? " in " + days + " "+plural+" " : "";
    const hoursStr = hours ? padNum(hours) + ":" : "";
    const minsStr = minutes ? padNum(minutes) + ":" : "";
    return daysStr + hoursStr + minsStr + padNum(seconds);
  };
  return props.expires ? (
    <div className="expires">| Expires {timeString(props.expires)}</div>
  ) : null;
};

export default Expires
