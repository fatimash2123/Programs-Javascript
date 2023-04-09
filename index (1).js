num=10
times=0
i=2
 
 while(times!=num){
   is_prime=true;
   for (j=2;j<i;j++){
     //if get true then not prime
     if(i%j===0){
       is_prime=false
       console.log(i," not prime")
     }
   }
   if(is_prime){
     times++
     console.log("num= ",i," order=",times)
   }
   
   i++
 }


