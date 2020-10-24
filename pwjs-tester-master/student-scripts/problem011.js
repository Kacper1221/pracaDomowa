function deepFindAndCount(a,b){
  var ile = 0;
  var tab = a.flat(Infinity);
  for(var i=0; i<tab.length; i++)
    if(tab[i]===b)
      ile++;
  return ile;
}