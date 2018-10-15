// Calculations using functions and get the results

// Examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...

function n(operation, num) {
  if (operation) {
    switch (operation.operation) {
      case 'divide':
        return Math.floor(num / operation.value);
        break;
      case 'plus':
        return Math.floor(num + operation.value);
        break;
      case 'minus':
        return Math.floor(num - operation.value);
        break;
      case 'times':
        return Math.floor(num * operation.value);
        break;
    }
  } else return num;
}

function zero(operation) {
  return n(operation, 0);
}
function one(operation) {
  return n(operation, 1);
}
function two(operation) {
  return n(operation, 2);
}
function three(operation) {
  return n(operation, 3);
}
function four(operation) {
  return n(operation, 4);
}
function five(operation) {
  return n(operation, 5);
}
function six(operation) {
  return n(operation, 6);
}
function seven(operation) {
  return n(operation, 7);
}
function eight(operation) {
  return n(operation, 8);
}
function nine(operation) {
  return n(operation, 9);
}

function plus(y) {
  return {
    operation: 'plus',
    value: y,
  };
}

function minus(y) {
  return {
    operation: 'minus',
    value: y,
  };
}

function times(y) {
  return {
    operation: 'times',
    value: y,
  };
}

function dividedBy(y) {
  if (y == 0) {
    return 'ERROR CANNOT DIVIDE BY 0';
  } else {
    return {
      operation: 'divide',
      value: y,
    };
  }
}
