//Circle
var circleRadius = 5;
var circlePerimeter = 2 * Math.PI * circleRadius;
var circleArea = (circleRadius * circleRadius) * Math.PI;

var circlePerimeter = circlePerimeter.toFixed(2);
var circleArea = circleArea.toFixed(2);

console.group("Circle's data");
console.log("The radius of the circle's: " + circleRadius + " cm");
console.log("The circle's perimeter's: " + circlePerimeter + " cm");
console.log("The circle's area's: " + circleArea + " cm^2");
console.groupEnd();


//Triangle
var triangleSidesLenght = 5;
var triangleHeight = Math.sqrt((triangleSidesLenght * triangleSidesLenght) - ((triangleSidesLenght / 2) * (triangleSidesLenght / 2)))
var trianglePerimeter = triangleSidesLenght * 3;
var triangleArea = (triangleSidesLenght * triangleHeight) / 2;

var triangleHeight = triangleHeight.toFixed(2);
var trianglePerimeter = trianglePerimeter.toFixed(2);
var triangleArea = triangleArea.toFixed(2);


console.group("Triangle's data");
console.log("The triangle's height's: " + triangleHeight + " cm");
console.log("The triangle's perimeter's: " + trianglePerimeter + " cm");
console.log("The triangle's area's: " + triangleArea + " cm^2");
console.groupEnd();


//Square

var squareSidesLength = 5;
var squarePerimeter = (squareSidesLength * 4);
var squareArea = (squareSidesLength * squareSidesLength);

var squarePerimeter = squarePerimeter.toFixed(2);
var squareArea = squareArea.toFixed(2);

console.group("Square's data");
console.log("The square's perimeter's: " + squarePerimeter + " cm");
console.log("The square's area's: " + squareArea + " cm^2");
console.groupEnd();