document.addEventListener("DOMContentLoaded", () => {
  let firstnumber = "";
  let secondnumber = "";
  let operator = "";
  let answer = "";

  const calculator = (numA, numB) => {
    switch (operator) {
      case "/":
        answer = numA / numB;
        break;
      case "*":
        answer = numA * numB;
        break;
      case "-":
        answer = numA - numB;
        break;
      case "+":
        answer = numA + numB;
        break;
    }
  };

  //  if operator entered to first value done , then second value ki entery lo

  const displayfirst = document.getElementById("displayfirst");
  const displaysecond = document.getElementById("displaysecond");
  const displayoperator = document.getElementById("displayoperator");

  document.getElementById("buttons").addEventListener("click", (e) => {
    const enteredValue = e.target.id;
    console.log(typeof enteredValue);
    if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(enteredValue)
    ) {
      if (operator == "") {
        firstnumber += enteredValue;
      } else {
        secondnumber += enteredValue;
      }
    } else if (["/", "*", "-", "+"].includes(enteredValue)) {
      if (secondnumber == "") {
        operator = enteredValue;
      }
    } else if (enteredValue == "C") {
      if (operator == "") {
        firstnumber = "";
      } else {
        secondnumber = "";
      }
    } else if (enteredValue == ".") {
      if (operator == "") {
        console.log(firstnumber);
        firstnumber = firstnumber.includes(".")
          ? firstnumber
          : firstnumber + ".";
      } else {
        secondnumber = secondnumber.includes(".")
          ? secondnumber
          : secondnumber + ".";
      }
    } else if (enteredValue == "=" && secondnumber != "") {
      calculator(
        Number.parseFloat(firstnumber),
        Number.parseFloat(secondnumber)
      );
      console.log(answer);
      firstnumber = answer.toString();
      secondnumber = "";
      operator = "";
    }
    displayfirst.value = firstnumber;
    displaysecond.value = secondnumber;
    displayoperator.value = operator;
    console.log(firstnumber, secondnumber, operator);
  });
});
