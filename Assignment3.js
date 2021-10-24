//01.ractice comparing different values
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  } return "Not Equal";
}
compareEquality(10, "10");

//02.Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99) {
      return "Not Equal";
    }
    return "Equal";
  }
  testNotEqual(10);

  //03.Comparison with the Strict Inequality Operator
  function testStrictNotEqual(val) {
    if (val !== 17) {
      return "Not equal";
    } return "Equal";
  }
  testStrictNotEqual(10);

  //04.Comparison with the Greater Than Operator
  function testGreaterThan(val) {
    if (val > 100) {
      return "Over 100";
    } if (val > 10) {
      return "Over 10";
    } return "10 or under";
  }
  testGreaterThan(10);

  //05.Comparison with the Greater Than Or Equal To Operator
  function testGreaterOrEqual(val) {
    if (val >= 20) return "20 or Over";
    if (val >= 10) return "10 or Over";
    return "Less than 10";
  }
  
  //06.Comparison with the Less Than Or Equal To Operator
  function testLessOrEqual(val) {
    if (val <= 12) return "Smaller Than or Equal to 12";
    if (val <= 24) return "Smaller Than or Equal to 24";
    return "More Than 24";
  }

//07. Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
      return "Yes";
    } return "No";
  }
  testLogicalAnd(10);

//08.Comparisons with the Logical Or Operator
function testLogicalOr(val) {
if (val < 10 || val > 20) {
    return "Outside";
  }
}

//09.Introducing Else Statements
function testElse(val) {
    var result = "";
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    } return result;
  }
  testElse(4);

//10.Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  }
  testElseIf(7);