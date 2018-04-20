'use strict';

test(function() {
    return toRandomCase("Hello World");
    },
    "toRandomCase('Hello World') should return 'Hello World' with random lower and uppercase",
     function(result) {
        return "Hello World".toLowerCase() === result.toLowerCase() && "Hello World" !== result
     }
);

test(withErrorCapturing(function() {
    return toRandomCase(1);
    }),
    "toRandomCase(1) should throw an error",
     function(result) {
        return result.message === "Input a string";
     }
);