a=[10,20,10,50,40,60,70]
a=a.sort((a,b)=>a-b)
console.log(a)
sum=110
index=[]
add=0
for(i=a.length-1;i>=0; i--){
  console.log(i)
  console.log(index,add)
  if(add<=sum && add+a[i]<=sum){
    index.push(i)
    add+=a[i]
    
  }
}
console.log(index,add)