import React from 'react'

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Burrr it is cold!",
        iconName: 'Snowflake'
    }
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
    const textDisplay = season === 'Winter' ? 'Burr, its chilly' : 'Lets hit the beach'
    const icon = season === 'winter' ? 'snowflake' : 'sun';
   
    return(
        <div> 
          <i className={`${icon} icon`}/>
          <h1> { textDisplay } </h1>
          <i className={`${icon} icon`}/>
        </div>
    );
}

export default SeasonDisplay;



