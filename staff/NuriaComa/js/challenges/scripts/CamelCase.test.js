console.log(">>JUNTAR PALABRAS")

var res = toCamelCase("Hello My World")

console.log('toCamelCase("Hello My World") should return helloMyWorld', res ==="helloMyWorld", res);

var error=undefined;
try{
    count = toCamelCase(true);
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("toCamelCase(true) should launch and error", error !==undefined, error);
    }
        

    // con un número
    
try{
    count = toCamelCase(1);
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("toCamelCase(1) should launch and error", error !==undefined, error);
    }



