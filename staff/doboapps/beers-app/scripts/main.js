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

        item.appendChild(document.createTextNode(beer.name));
        item.addEventListener("click",function(){
            showBeer(beer.id);
        });
        list.appendChild(item);
    });


 
}



function showBeer(idBeer) {
    var section=document.createElement('section');
    var h2 = document.createElement('h2');
    var img = document.createElement('img');
    var p = document.createElement('p');

    img.innerHTML=idBeer;

    logic.getBeerInfo(idBeer,function(beer){

       if(document.getElementById("mySecction")){
        document.body.lastChild.innerHTML ="";
       }
        var titleMyBeer =document.createTextNode(beer.name);
        var textMyBeer =document.createTextNode(beer.description);
        var urlImage="";
        
        if(!beer.labels || !beer.labels.medium)
            urlImage="http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg";
        else
            urlImage=beer.labels.medium;

        h2.appendChild(titleMyBeer);
        p.appendChild(textMyBeer);
        img.setAttribute("src",urlImage);

        section.appendChild(h2);
        section.appendChild(p);
        section.appendChild(img);
        section.setAttribute("id", "mySecction");

        
        document.body.appendChild(section);

        


    });
}
