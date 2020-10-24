function  stringRotate(a,b) {
  var dlugosc;
  dlugosc = a.length;
  var napis = a+a;
  var przesun = b % dlugosc;
  napis = napis.slice(przesun,dlugosc+przesun);
  return napis;
}