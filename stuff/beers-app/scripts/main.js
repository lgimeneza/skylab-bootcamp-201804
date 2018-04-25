'use strict';

document.forms[0].addEventListener('submit', function(e) {
    e.preventDefault();

    var input = this.elements[0];

    var query = input.value;

    logic.searchBeers(query, function(beers) {
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

    beers.forEach(function(beer) {
        console.log('HOLA');
        var item = document.createElement('button');

        // handler click por cada uno
        item.addEventListener('click', function(e) {
            e.preventDefault();

            console.log('hola');
        });

        item.appendChild(document.createTextNode(beer.name));

        list.appendChild(item);
    });
}
