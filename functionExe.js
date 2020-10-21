function evenOrOdd(num)
{
   if(num%2==0)
     {
         return "Even Number"
     }
    else{
        return "Odd Number"
    }
}
var e=evenOrOdd(10)
console.log(e)
var evenOrOdd2=function(num)
{
    if(num%2==0){
        return "Even Number"
    }
   else{
       return "Odd Number"
   }
};
console.log(evenOrOdd2(5))

function func(a)
{
  console.log(e)
}
func(e)


var myId=[30,10,20,5,100]
myId.sort(function(num1, num2)
{
//   for(var i=0; i<5;  i++)
//   {
//       console.log(num1-num2)
//   }
   return num1-num2
});
console.log(myId)


