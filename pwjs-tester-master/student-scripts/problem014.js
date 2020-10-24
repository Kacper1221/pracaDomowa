var Vectors = {
  sum(a,b){
    var wynik = [];
    if(a.length === b.length && Array.isArray(a) && Array.isArray(b)){
      for(let n=0; n<a.length; n++)
        wynik[wynik.length] = a[n]+b[n];
      return wynik;
    }
    else return false;
  },
  
  mulByScalar(a,b){
    var wynik = [];
    if(Array.isArray(a) && typeof(b)==='number'){
      for(let n=0; n<a.length; n++)
        wynik[wynik.length] = a[n]*b;
      return wynik;
    }
    else return false;
  }
}