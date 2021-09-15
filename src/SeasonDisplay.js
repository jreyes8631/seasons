import React from 'react'

const getSeasons = (lat, month) => {
   if(month > 2 && month < 9) {
       return lat > 0 ? 'Summer' : 'Winter';
   } else {
       return lat > 0 ? 'Winter' : 'Summer';
   }
}

const SeasonDisplay = props => {
    const season = getSeasons(props.lat, new Date().getMonth());
    console.log(season)
   
    return <div>Season Display</div>;
}

export default SeasonDisplay;



