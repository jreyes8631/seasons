import './seasonDisplay.css';
import React from 'react';

const seasonConfig = {
    Summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    Winter: {
        text: "Burrr it is cold!",
        iconName: 'Snowflake'
    },
};

const getSeasons = (lat, month) => {
   if(month > 2 && month < 9) {
       return lat > 0 ? 'Summer' : 'Winter';
   } else {
       return lat > 0 ? 'Winter' : 'Summer';
   }
}

const SeasonDisplay = props => {
    const season = getSeasons(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
   
    return(
        <div className={`seasonDisplay ${season}`}> 
          <i className={`icon-left massive ${iconName} icon`}/>
          <h1> {text} </h1>
          <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;



