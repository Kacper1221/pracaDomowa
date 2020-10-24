function strangeSum(a, b) {
  if(Number.isInteger(a) && Number.isInteger(b)){
    if (a === b){
      return (a+b)*3;
    }
    if(a !== b){
      return a+b;
    }
  }
  else return null;
}