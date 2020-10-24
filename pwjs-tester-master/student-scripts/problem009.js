function runIt(a,b,c){
  var dzialanie = a.toString();
  if(dzialanie.indexOf('+')===1)
    return b+c;
  else if(dzialanie.indexOf('-')===1)
    return b-c;
  else if(dzialanie.indexOf('*')===1)
    return b*c;
  else if(dzialanie.indexOf('/')===1)
    return b/c;
  else return dzialanie;
}
