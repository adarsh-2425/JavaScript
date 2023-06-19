/*Complete the shape-area.js module. Your module must declare and export two functions with the following signatures:

circleArea(radiusLength).
squareArea(sideLength).*/

/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
const circleArea = radiusLength => {
  return PI * radiusLength * radiusLength;
}

const squareArea = sideLength => {
  return sideLength * sideLength;
}

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;
