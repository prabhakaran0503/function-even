// var array=[2,3,8,4,5,7,6,10];
// var b=[];
// var add=0;
// var even=[];
// function addoreven(){
//     for (let i=1;i=<array.length;i++){
//           if(array)  
//     }
// }
// var a=[2,3,4,5,6,7,8,9,10,22];
// var x=[3,8,28,91,78,56];
// var z=[4333,4,343,34,343,43,43,43,434];

// function addoreven(a){
   
//     var b=0;
//     for(let i=0;i<=a.length;i++){
//         if(a[i]%2==0){
//             b++;
//         }
        
//     }
//     return b;
    
// }
// // addoreven(a);
// var c= addoreven(a);
// console.log(c);

// var y=addoreven(x);
// console.log(y);
// var m= addoreven(z);
// console.log(m);



var a=[2,3,4,5,6,7,8,9,10,22];
function addoreven(a){
   var c=0;
    var b=0;
    for(let i=0;i<=a.length;i++){
        if(a[i]%2==0){
            b++;
            c=c+a[i];
        }
    }
    return c;
    
}
// addoreven(a);
var c= addoreven(a);
console.log(c);