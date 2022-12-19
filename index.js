const returnFirstTwoDrivers = function(scubersDrivers) {
    return scubersDrivers.slice(0,2);
}

const returnLastTwoDrivers = function(scubersDrivers) {
    return scubersDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
   const fareMultiplier = function(fare) {
    return multiplier * fare;
   }
   return fareMultiplier;
}

const fareDoubler = function(fare) {
    return createFareMultiplier(fare)(2);

}

const fareTripler = function(fare) {
    return createFareMultiplier(fare)(3);

}

function selectDifferentDrivers(scubersDrivers, selector) {
    return selector(scubersDrivers);
}