function findMax(){
  var ile = arguments.length;
  var najwieksza = 0;
  for(var i=0; i<=arguments.length-1;i++)
    if(arguments[i]>najwieksza)
      najwieksza = arguments[i];
  return najwieksza;
}