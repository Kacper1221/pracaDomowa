function divisible(a){
  var dlugosc = arguments.length;
  var podzielna = true;
  for(var i=1; i<dlugosc; i++){
    if((arguments[0] % arguments[i])!==0)
      podzielna = false;
  }
  return podzielna;
}