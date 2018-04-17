console.log(">>CUBE")

//array
var resultado = cube([2,3,4]);
console.log('cube([2,3,4]) should return [8, 27, 64] ==>', resultado);


//un número
var resultado = cube(2);

console.log('cube(2) should return 8', resultado ===8, resultado);



var error=undefined;
try{
    count = countWords(true);
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("countWords(true) should launch and error", error !==undefined, error);
    }
        


    
try{
    count = countWords("1");
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("countWords(1) should launch and error", error !==undefined, error);
    }