a=[1,2,3,4]
b=[2,3,4,5,6,7]
a=a.concat(b)
console.log(a)
for(i=0; i<a.length;i++){
  for(j=i+1;j<a.length;j++){
    if(a[i]===a[j]){
      a[j]=0
    }
  }
}
a=a.filter(val=>val!==0)
console.log(a)