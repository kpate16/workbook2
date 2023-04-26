function calculate_grosspay(payRate, hoursWorked) {
  if (hoursWorked <= 40) {
    return payRate * hoursWorked;
  } else {
    return 40 * payRate + (hoursWorked - 40) * (payRate * 1.5);
  }
}
console.log("grosspay for (12.50,20):" + calculate_grosspay(12.5, 20));
console.log("grosspay for (25,40):" + calculate_grosspay(25, 40));
console.log("grosspay for (17.30,45):" + calculate_grosspay(17.3, 45));
