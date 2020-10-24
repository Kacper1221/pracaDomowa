function objectsDiff(a,b){
  var tab = [],tab2 = [], i = 0, i2 = 0;
  for(var property in a){
    tab[i]  = property;
    i++
  }
  for(var property2 in b){
    tab2[i2] = property2;
    i2++;
  }
  var wyniki = [];
  //if(i >= i2){
    for(let n=0; n<=i; n++){
      let dobry = true;
      for(let n2=0; n2<=i2; n2++){
        if(tab[n]===tab2[n2]){
          dobry = false;
        } 
      }
      if(dobry)
      wyniki[wyniki.length] = tab[n];
    }
  //}
  //else if(i < i2){
    for(let n=0; n<=i2; n++){
      let dobry = true;
      for(let n2=0; n2<=i; n2++){
        if(tab2[n]===tab[n2]){
          dobry = false;
        } 
      }
      if(dobry)
      wyniki[wyniki.length] = tab2[n];
    }
  //}
  return wyniki;
}