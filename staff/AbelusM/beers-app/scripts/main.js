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

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    beers.forEach(function (beer) {
        var item = document.createElement('li');
        var button = document.createElement('button');
        button.innerHTML = 'info';
        var moreinfo = document.getElementById(beer.id);

        item.appendChild(document.createTextNode(beer.name));
        item.append(button);

        list.appendChild(item);

        button.addEventListener('click', function () {
            logic.getBeerInfo(beer.id, function (beer) {
                if(!beerDesc || !picture){   
                    var beerDesc = document.createElement('p');
                    document.body.appendChild(beerDesc);
                    beerDesc.appendChild(document.createTextNode(beer.style.description));
                    
                    var picture = document.createElement('img');
                    picture.src = beer.labels.medium;
                    
                    document.body.appendChild(picture);
                } else{
                    beerDesc.remove();
                } 

            })
        })
    })
}