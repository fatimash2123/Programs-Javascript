obj={}
array=['a','1','a','1','1','a','3','b']


for(i=0;i<array.length;i++){
  //if objec has keys for an element in array
  if ( Object.keys(obj).join() .includes(array[i]) ){
    obj[array[i]]=obj[array[i]]+1
  }
  else{
    obj[array[i]]=1
  }
}

max=Object.values(obj).sort((a,b)=>a-b)


for (i in obj){
  if(obj[i]===max[max.length-1]){
    console.log("max is",i," having ",obj[i])
  }
}



