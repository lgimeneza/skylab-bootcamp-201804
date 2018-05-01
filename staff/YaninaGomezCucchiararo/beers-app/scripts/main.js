'use strict';

document.forms[0].addEventListener('submit', function (e) {
    e.preventDefault();

    var input = this.elements[0];

    var query = input.value;

    logic.searchBeers(query, function (beers) {
        listBeers(beers);
    });

    input.value = '';
});

var list;

function listBeers(beers) {
    if (!list) {
        list = document.createElement('ul');

        document.body.appendChild(list);
    }

    //list.innerHTML = '';
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    // beer.id
    beers.forEach(function (beer) {
        var item = document.createElement('li');
        var a = document.createElement('a');
        var beerName = document.createTextNode(beer.name);

        a.appendChild(beerName)

        // esto lo muestra como un link
        a.href = '#';
        //cuando hagamos click nos llevaráa una funcion showinfo
        a.addEventListener('click', function () {
            logic.getBeerInfo(beer.id, function (beer) {
                showInfo(beer);
            });
        });

        item.appendChild(a);

        list.appendChild(item);

    });

    function showInfo(beer) {
        // var container = document.createElement('div');


        
        var title = document.createElement('h2'); // --> <h2><h2>
        
        var beerName = document.createTextNode(beer.name); // --> Mahou
        
        title.appendChild(beerName); // --> <h2><h2> Mahou --> <h2> Mahou<h2>
        list.appendChild(title); // --> <ul> li li li  <h2> Mahou<h2> <ul>
        
        var p = document.createElement('p') // -->  <p></p>
        var description = document.createTextNode(beer.description); // --> description

        if(beer.description === undefined){
            beer.description = "No description";
        }
        
        p.appendChild(description); // --> <p></p> description -->  <p>description</p>
        list.appendChild(p);
    }
}