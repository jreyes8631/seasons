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
    const textDisplay = season === 'Winter' ? 'Burr, its chilly' : 'Lets hit the beach'
   
    return <div> { textDisplay } </div>;
}

export default SeasonDisplay;



