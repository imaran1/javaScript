function product(){
    var result=1;
    for(var i=0; i<arguments.length; i++){
        result*=arguments[i];
    }
    return result
}

console.log(product(3,4,5))
console.log(product(9,8))
console.log(product(10))
console.log(product())