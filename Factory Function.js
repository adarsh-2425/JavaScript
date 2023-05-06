//Normal Object
const circle =  {
    radius: 1,
    draw: function () {
        console.log('draw');
    }
};

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

//calling object
circle.draw(); 
