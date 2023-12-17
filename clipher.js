function rot13(str){
  let charcode=0;
  let strarr=0;
  strArr=str.split("");
  for(let i=0;i<strArr.length;i++){
    charcode=strArr[i].charCodeAt();
    if(charcode>=65 && charcode<=90){
      if(charcode>77){
        charcode=charcode-13;
      }
      else{
        charcode=charcode+13;
      }
      strArr.splice(i,1,String.fromcharCode(charcode));
    }
  }
  return strArr.join('');
}
