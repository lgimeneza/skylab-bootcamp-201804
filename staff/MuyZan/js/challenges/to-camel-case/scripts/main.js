var res = toCamelCase("hello my WORLD");

console.log('toCamelCase("hello world" should return helloMyWorld', res === "helloMyWorld", res);


try{
    count = toCamelCase(true);
} catch(err){
    console.log("countChars(true) should launch and error", err !== undefined, err)
}