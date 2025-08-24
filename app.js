let addressLat = 10;
let addressLong = 12;
let positionLat = 6;
let positionLong = 8;

function calculateDistance(addressLat, addressLong, positionLat, positionLong) {
    const distanceLat = positionLat - addressLat;
    const distanceLong = positionLong - addressLong;
    return Math.sqrt(Math.pow(distanceLat, 2) + Math.pow(distanceLong, 2));
};

console.log(calculateDistance(addressLat, addressLong, positionLat, positionLong));

