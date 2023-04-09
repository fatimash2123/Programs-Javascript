s="FaTiMa"
s1=[]
for (i in s){
console.log(i,s[i],s.charCodeAt(i))
 //for greater letters
   if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90){
    console.log("in else")
     s1.push(String.fromCharCode((s.charCodeAt(i))+32))
     console.log(((s.charCodeAt(i)+32)))
  }
//for small letters
 else{
    console.log("in if")
    s1.push(String.fromCharCode((s.charCodeAt(i))-32))
    console.log((s.charCodeAt(i))-32)
  }
 
}
console.log(s1.join(""))
