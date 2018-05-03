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

    beers.forEach(function (beer) {
        var item = document.createElement('li');

        var a = document.createElement('a');
        a.appendChild(document.createTextNode(beer.name));
        a.href = '#';

        a.addEventListener('click', function () {
            logic.getBeerInfo(beer.id, function (beer) {
                showInfo(beer);
            });
        });

        item.appendChild(a);

        list.appendChild(item);
    });
    function showInfo(beer) {
        if (item) {
            item.innerHTML = '';
            description.innerHTML = '';
        }
        var item = document.createElement('h1');
        var description = document.createElement('p');

        item.appendChild(document.createTextNode(beer.name));
        description.appendChild(document.createTextNode(beer.description));

        list.appendChild(item);
        list.appendChild(description);


    }


}
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

var list, container;

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

        item.appendChild(a);

        list.appendChild(item);

        a.addEventListener('click', function () {
            logic.getBeerInfo(beer.id, function (beer) {
                showInfo(beer);
            });
        });

    });

    function showInfo(beer) {

        if (container) {
            container.innerHTML = '';
        };

        container = document.createElement('div');
        var title = document.createElement('h2'); // --> <h2><h2>
        var beerName = document.createTextNode(beer.name); // --> Mahou
        document.body.appendChild(container)

        title.appendChild(beerName); // --> <h2><h2> Mahou --> <h2> Mahou<h2>
        container.appendChild(title); // --> <h2><h2> Mahou --> <h2> Mahou<h2> --> <div><h2> Mahou<h2><div>



        if (beer.description === undefined) {
            beer.description = 'There is no description!';
        }

        // beer.label.medium
        var p = document.createElement('p') // -->  <p></p>
        var description = document.createTextNode(beer.description); // --> description

        p.appendChild(description); // --> <p></p> description -->  <p>description</p>
        container.appendChild(p);


        var beerImage = document.createElement('img');
        beerImage.src = beer.labels.medium;

        container.appendChild(beerImage);

    }

}