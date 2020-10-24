function  triangleArea(a,b,c){
  if(a+b<c  || a+c<b ||  b+c<a)
      return  -1;
    else if(a==0 || b==0 || c==0)
      return -1;
    else{
      var p = (a+b+c)/2;
      var pole = 1.00*Math.sqrt(p*(p-a)*(p-b)*(p-c));
      pole = pole.toFixed(2);
      return  pole;
    }
}