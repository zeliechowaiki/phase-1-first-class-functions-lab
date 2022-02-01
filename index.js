// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    let newArray = [array[0], array[1]];
    return newArray;
}
const returnLastTwoDrivers = function(array) {
    let newArray = [array[array.length-2], array[array.length-1]];
    return newArray;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(n) {
    return function(fare) {
        return fare * n;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(array, driveChoose) {
    return driveChoose(array);
}