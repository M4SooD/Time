const hours = require("./checkHour");
const Minutes = require("./checkMin");

function convertTimeToString(time) {
    let arr = time.split(":");
    const arrNum = arr.map((i) => Number(i));
    if(arrNum[0]===0 && arrNum[1]===0){
      return hours(arrNum[0]);
    }
    else if(arrNum[1]===0){
      return hours(arrNum[0])+" "+Minutes(arrNum[1]);
    }
    else if(arrNum[1]<=30){
     return Minutes(arrNum[1])+" "+hours(arrNum[0]);
    }
    else{
      debugger;
      return Minutes(arrNum[1])+" "+hours(arrNum[0]+1);
    }
  }
  module.exports = convertTimeToString;
