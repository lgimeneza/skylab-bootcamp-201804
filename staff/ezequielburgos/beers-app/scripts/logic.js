'use strict';

var logic = (function () {
    function call(path, callback) {
        var xhr = new XMLHttpRequest();

        // get's URL info without rechargind the page
        xhr.addEventListener("load", function () {
            // convierte el texto JSON en código JS
            var results = JSON.parse(this.responseText);
    
            callback(results);
        });
        
        // llamada al servidor:
        xhr.open("GET", "https://quiet-inlet-67115.herokuapp.com/api/" + path);
        xhr.send();
    }

    return {
        // listing same name beers
        searchBeers: function (query, callback) {
            call('search/all?q=' + query, callback);
        },
        
        // shows description of the selected beer
        getBeerInfo: function (id, callback) {
            call('beer/' + id, callback);
        }

    };
})();