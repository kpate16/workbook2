function check_leapyear(year) {
  if (year % 4 == 0) {
    console.log(year + " is a Leap year");
  } else {
    console.log(year + " is not a Leap year");
  }
}
check_leapyear(1900);
check_leapyear(1950);
check_leapyear(1999);
check_leapyear(2000);
check_leapyear(2001);
check_leapyear(2012);
