//factory function
function createCircle(radius) {
    return  {
    radius: radius,
    draw: function () {
        console.log('draw');
    }
};
}
//calling factory function and passing value to it
const circle = createCircle(1);

//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw  = function() {
        console.log("draw");
    }
}
const another = new Circle(1);
