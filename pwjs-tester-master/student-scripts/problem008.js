function magicSequence(a){
  var tablica = [0,-1,-2,-2];
  for(var n=4; n<=a; n++){
  var kolejny = (tablica[n-1])*(n-3);
  tablica.push(kolejny);
  }
  return tablica[tablica.length-1];
}