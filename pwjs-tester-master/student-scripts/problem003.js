function  isLeapYear(a) {
  var przestepny = false;
  var modulo = a % 4;
  if(modulo === 0)
    przestepny = true;
  return przestepny;
}