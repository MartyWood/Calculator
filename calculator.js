function calculator(value1, operator, value2) {
    switch (operator) {
      case "+":
        return value1 + value2;
        break;
      case "-":
        return value1 - value2;
        break;
      case "*":
        return value1 * value2;
        break;
      case "/":
        return value1 / value2;
        break;
      default:
        console.log(`Sorry, does not compute`);
    }
  }