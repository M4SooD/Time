
function checkMin(time) {
    let min = parseInt(time);
    const minutes =["o'clock","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twleve",
    "Thirteen","fifteen","fourteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty one","twenty two",
    "twenty three","twenty four","twenty five","twenty six","twenty seven","twenty eight","twenty nine"];

    function pastTo(time){     
        if(time<30){
            return " past";
        }
        else{
            return " to";
        }
  }

    if(min === 0){
        return minutes[min];
    }
    else if(min===45 || min===15)
    {
       return "quarter" + pastTo(min);
    }
    else if(min===30)
    {
       return "half past" ;
    }
    else if(min<30)
    {
       return minutes[min] + " minutes" + pastTo(min);
    }
    else if(min>30)
    {
       return minutes.reverse()[min-minutes.length-1] + " minutes" + pastTo(min);
    }
    else
    {
        return "Invalid Time";
    }
  }
 
  module.exports = checkMin;
