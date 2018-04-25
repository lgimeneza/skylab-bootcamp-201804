'use strict';
<<<<<<< HEAD

// TODO implement the presentation logic

var $form = $('form');

$form.submit(function(e) {
    e.preventDefault();

    // var $input = $(this).find('input');
    var $input = $(this).find('input[type=text]');

    var text = $input.val();

    logic.addTask(text);

    $input.val('');

    refresh();
});

function refresh() {
    listTodos();

    listDones();
}

var $todosTitle, $todosList;

function listTodos() {
    if (!$todosTitle) {
        $todosTitle = $('<h3>ToDO List</h3>');

        $form.after($todosTitle);
    }

    if (!$todosList) {
        $todosList = $('<ul class="list-group"></ul>');

        $todosTitle.after($todosList);
    }

    $todosList.empty();

    var todos = logic.listTodos();

    if (todos.length) {
        $todosTitle.show();
        $todosList.show();

        todos.forEach(function(task) {
            var $taskItem = $('<li class="list-group-item">* </li>');
    
            $taskItem.append(task.text);
    
            var $taskButton = $('<button type="button" class="btn btn-outline-success btn-sm float-right">✔</button>');
    
            $taskButton.click(function() {
                logic.markTaskDone(task.id);
    
                refresh();
            });
    
            $taskItem.append($taskButton);
    
            $todosList.append($taskItem);
        });
    } else {
        $todosTitle.hide();
        $todosList.hide();
    }
}

var $donesTitle, $donesList;

function listDones() {
    if (!$donesTitle) {
        $donesTitle = $('<h3 class = "Done">DONE List</h3>');

        $todosList.after($donesTitle);
    }

    if (!$donesList) {
        $donesList = $('<ul class="list-group"></ul>');

        $donesTitle.after($donesList);
    }

    $donesList.empty();

    var dones = logic.listDones();

    if (dones.length) {
        $donesTitle.show();
        $donesList.show();

        dones.forEach(function(task) {
            var $taskItem = $('<li class="list-group-item">* </li>');
    
            $taskItem.append('<span>' + task.text + '</span>&nbsp;');
    
            var $taskButton = $('<button type="button" class="btn btn-outline-danger btn-sm float-right">❌</button>');
    
            $taskButton.click(function() {
                logic.removeTask(task.id);
    
                listDones();
            });
    
            $taskItem.append($taskButton);
    
            $donesList.append($taskItem);
        });
    } else {
        $donesTitle.hide();
        $donesList.hide();
    }
=======
var list;
var infoShow;

document.forms[0].addEventListener('submit', function(e) {
    e.preventDefault();

    if (infoShow) infoShow.innerHTML = '';

    var input = this.elements[0];

    var query = input.value;

    logic.searchBeers(query, function(beers) {
        listBeers(beers);
    });

    input.value = '';
});

var timer;
document.forms[0].elements[0].addEventListener('keyup', function(e) {
    clearInterval(timer);

    timer = setTimeout(() => {
        var query = this.value;

        if (query === '') {
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
        } else {
            logic.searchBeers(query, function(beers) {
                listBeers(beers);
            });
        }
    }, 500);
});

function listBeers(beers) {
    if (!list) {
        list = document.createElement('ul');

        document.body.appendChild(list);
    }

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    beers.forEach(function(beer) {
        var item = document.createElement('li');

        var link = document.createElement('a');

        link.href = '';

        item.appendChild(link);

        var id = beer.id;

        // CLICK BEER INFO
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (infoShow) infoShow.innerHTML = '';

            logic.getBeerInfo(id, function(beer) {
                infoShow = document.createElement('div');

                document.body.appendChild(infoShow);

                var h2 = document.createElement('h2');
                var title = document.createTextNode(beer.name);
                h2.appendChild(title);
                infoShow.appendChild(h2);

                if (beer.labels) {
                    if (beer.labels.medium) {
                        var img = document.createElement('img');
                        img.src = beer.labels.medium;
                        infoShow.appendChild(img);
                    }
                }

                var description = beer.description
                    ? beer.description
                    : beer.style.description;
                var p = document.createElement('p');
                p.appendChild(document.createTextNode(description));
                infoShow.appendChild(p);
            });
        });

        link.appendChild(document.createTextNode(beer.name));

        list.appendChild(item);
    });
>>>>>>> develop
}