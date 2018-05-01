'use strict';

document.forms[0].addEventListener('submit', function (e) {
    e.preventDefault();

    var input = this.elements[0];

    var query = input.value;

    // logic.searchBeers(query, function (beers) {
    //     listBeers(beers);
    // });
    logic.searchBeers(query, function (error, beers) {
        if (error) {
            alert('sorry, something went wrong... :(');
        } else {
            listBeers(beers);
        }
    });//


    input.value = '';
});

var list;

function listBeers(beers) {
    if (!list) {
        list = document.createElement('ol');

        document.body.appendChild(list);
    }

    //list.innerHTML = '';
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    if (beers.length) {

        beers.forEach(function (beer, i) {
            var item = document.createElement('li');
            var a = document.createElement('a');
            a.appendChild(document.createTextNode(beer.name));
            a.href = "#";
            a.title = beer.name;
            a.addEventListener('click', function () {
                logic.getBeerInfo(beer.id, function (error, beer) {
                    if (error) {
                        alert('sorry, something went wrong... :(');
                    } else {
                        printInfo(beer);
                    }
                });
            });
            // a.addEventListener("click", function(){
            //     printInfo(beer);
            // });
    
            list.appendChild(item);
            item.appendChild(a);
    
        });
    }
}

var square, img, title;

function printInfo(beer) {
    if (!square) {
        square = document.createElement('div');
        title  = document.createElement('h2');
        img = document.createElement('img');
        document.body.appendChild(square);
    }

   // logic.getBeerInfo(beer.id, function (beers) {
        square.innerHTML = '';
        title.innerHTML = '';
        title.appendChild(document.createTextNode(beer.name));
        console.log(beer);
        //console.log(beers);
        square.appendChild(title);
        square.appendChild(document.createTextNode(beer.style.description || "Sorry no description available."));
        if (beer.labels && beer.labels.medium) {
            img.src = beer.labels.large;
    
            square.appendChild(img);
        } else {
            square.appendChild(document.createTextNode("Sorry no image available."));
        }

   // });
}
