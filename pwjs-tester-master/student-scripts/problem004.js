function getTotalNumberOfNewYearsEveSundays(a, b) {
  var ilosc = 0;
for (a; a<=b; a++)
    {
    var data = new Date(a, 0, 1);
    if ( data.getDay() === 0 )
      ilosc++;
    }
  return ilosc;
}