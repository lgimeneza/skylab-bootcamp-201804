var count= countChars("hello world");


console.log('countChars("hello world") should return 11', count === 11, count);

// con una boleana

var error=undefined;
try{
    count = countChars(true);
} catch (err) {
    error=err;}
    finally{    //assegurar-te que passa per aquí.
        console.log("countChars(true) should launch and error", error !==undefined, error);
    }
        
    

    // con un número
try{
    count = countChars(1);
} catch (err) {
        console.log("countChars(1) should launch and error", err !==undefined, err);
    }


