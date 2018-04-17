
console.log(">>NÚMEROS ROMANOS")

var res = romanNum(2)

console.log('to Roman Numbers(2) should return II', res ==="II", res);

var res = romanNum(4)

console.log('to Roman Numbers(4) should return IV', res ==="IV", res);

var res = romanNum(6)

console.log('to Roman Numbers(6) should return VI', res ==="VI", res);

var res = romanNum(9)

console.log('to Roman Numbers(9) should return IX', res ==="IX", res);


var error=undefined;
try{
    count = romanNum(true);
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("romanNum(true) should launch and error", error !==undefined, error);
    }
        

    // con un número
    
try{
    count = romanNum("1");
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log('romanNum("1") should launch and error', error !==undefined, error)
    }