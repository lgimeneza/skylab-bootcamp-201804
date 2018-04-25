'use strict';

var logic = (function () {
    function call(path, callback) {
        //obtiene la informacion de la url q le pasamos. 
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            //convierte el texto JSON en JS.
            var results = JSON.parse(this.responseText);
    
            callback(results);
        });
        
        xhr.open("GET", "https://quiet-inlet-67115.herokuapp.com/api/" + path);
        xhr.send();
    }

    return {
        //enseña toda la lista de la palabra buscada
        searchBeers: function (query, callback) {
            call('search/all?q=' + query, callback);
        },
        //enseña la id seleccionada
        getBeerInfo: function (id, callback) {
            call('beer/' + id, callback);
        }
    };
})();