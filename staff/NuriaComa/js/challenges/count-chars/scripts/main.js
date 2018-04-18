var count= countChars("hello world");


console.log('countChars("hello world") should return 11', count === 11, count);

// con una boleana
try{
    count = countChars(true);
} catch (err) {
        console.log("countChars(true) should launch and error", err !==undefined, err);
    }

    // con un número
try{
    count = countChars(1);
} catch (err) {
        console.log("countChars(true) should launch and error", err !==undefined, err);
    }


