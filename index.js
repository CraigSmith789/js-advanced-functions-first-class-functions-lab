// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
  
    return array.slice(0,2);
  }

  const returnLastTwoDrivers = function(array){
    return array.slice(-2);
  }

  let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

  function createFareMultiplier(integer, fare){
    return function(fare){
     return fare = integer * fare;
    }

  }
  const fareDoubler = function(fare){
    return createFareMultiplier(2) (fare);
  }

  const fareTripler = function(fare){
    return createFareMultiplier(3) (fare);
  }

  const selectDifferentDrivers = function(array, func){
    return func(array);

  }