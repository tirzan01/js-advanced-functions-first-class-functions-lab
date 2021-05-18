// Code your solution in this file!

const returnFirstTwoDrivers = (array)=>{return array.slice(0, 2)}

const returnLastTwoDrivers = (array)=>{return array.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (){
    return (integer)=>integer**2
}

const fareDoubler = function (integer){
    return integer * 2
}

const fareTripler = function (integer){
    return integer * 3
}

function selectDifferentDrivers(arrayOfDrivers, functionDriver){
    return functionDriver(arrayOfDrivers)
}