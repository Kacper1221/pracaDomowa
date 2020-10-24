function parametricSort(a,b){
  var posortowane = false;
  if(b!=='asc' && b!=='desc')
    return posortowane;
  else if(b==='asc'){
    posortowane = a.sort();
    return posortowane;
  }
  else if(b==='desc'){
    posortowane = a.sort();
    posortowane = a.reverse();
    return posortowane;
  }
}