"use strict";

if (typeof Array.prototype.randomProperty !== "function"){
    Array.prototype.randomProperty = function(propsArray, prop) {
        var copyPropsArray = []; 
        propsArray.forEach(function(v){ copyPropsArray.push(v)});
        for (var i = 0; i < this.length; i++){
            if (copyPropsArray.length === 0) {
                propsArray.forEach(function(v){ copyPropsArray.push(v)});
            }

            var rand = Math.floor(Math.random() * copyPropsArray.length);

            this[i][prop] = copyPropsArray[rand];
            copyPropsArray.splice(rand, 1);
        }
    }
};

var propsCol = ["red", "black", "white"];
var propsPrp = [true, false];

var obj1 = [{property: "", color: ""},{property: "", color: ""},{property: "", color: ""},
{property: "", color: ""},{property: "", color: ""},{property: "", color: ""}];


