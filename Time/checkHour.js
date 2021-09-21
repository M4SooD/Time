
function checkHour(time) {
    const hour =["midnight","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twleve"];
    if(time === 0){
        return hour[time];
    }
    else if(time<13)
    {
       return hour[time];
    }
    else if (time<=24)
    {
        return hour[time-hour.length+1];
    }
    else
    {
        return "Invalid Time";
    }
  }
  
  module.exports = checkHour;
