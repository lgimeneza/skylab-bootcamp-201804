var count= countWords("hello world");

console.log('countWords("hello world") should return 2', count === 2, count);

count = countChars ("abracadabra", function (c){return c ==="a";})

try{
    count = countWords(true);
} catch (err) {
        console.log("countWords(true) should launch and error", err !==undefined, err);
    }