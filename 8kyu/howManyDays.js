function howManydays(month){
  var days="";
  switch (month){
  /*this is the months which has 31 days*/
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
  days=31
  break;
  /*this is the months which has 30 days*/
  case 4:
  case 6:
  case 9:
  case 11:
  days=30
  break;
  /*this is the months which has 28 days  */
  case 2:
  days=28;
  break;
  }
  return days;
}