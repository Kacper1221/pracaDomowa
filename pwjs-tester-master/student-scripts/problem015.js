Stack = {
  
  stos : ['stos:'],
  wierzcholek : 1,
  
  push(a, b=1){
      for(let i=0; i<b-1; i++){
        Stack.stos[i+Stack.wierzcholek] = null;
      }
      Stack.wierzcholek += b-1;
      Stack.stos[Stack.wierzcholek] = a;
      Stack.wierzcholek++;
    //return Stack.stos;
    
  },
  
  pop(a=1){
    //Stack.stos.push(undefined);
    var ostatni;
    for(let i=0; i<a; i++){
      ostatni = Stack.stos[Stack.stos.length-1];
      Stack.stos.pop();
    }
    return ostatni;
  }
}