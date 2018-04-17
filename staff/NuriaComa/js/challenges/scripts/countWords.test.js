console.log(">>CONTAR PALABRAS")

var count= countWords("hello world");

console.log('countWords("hello world") should return 2', count === 2, count);


var error=undefined;
try{
    count = countWords(true);
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("countWords(true) should launch and error", error !==undefined, error);
    }
        

    // con un número
    
try{
    count = countWords(1);
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("countWords(1) should launch and error", error !==undefined, error);
    }
