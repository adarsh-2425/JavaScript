/*Static Methods:

You can define static methods on a class, which are called on the class itself rather than on instances of the class. */

class MathUtils {
  
  static sum(a, b) {
    return a + b;
  }

  static substract(a, b) {
    return a - b;
  }
}

const result = MathUtils.sum(1, 2);
console.log(result)
