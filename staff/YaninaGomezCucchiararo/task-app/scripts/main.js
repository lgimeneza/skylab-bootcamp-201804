'use strict';

// TODO implement the presentation logic

var $form = $('form');

$form.submit(function(e) {
    e.preventDefault();

    // var $input = $(this).find('input');
    var $input = $(this).find('input[type=text]'); // busca los input tipo text q estan dentro de form (this)

    var text = $input.val(); //guardar el mensaje en la variable text

    logic.addTask(text); // llamamos a la funcion addTask y le pasamos el text cmo parametro

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
        $todosTitle = $('<h2>todo\'s</h2>');

        $form.after($todosTitle);
    }

    if (!$todosList) {
        $todosList = $('<ul></ul>');

        $todosTitle.after($todosList);
    }

    $todosList.empty();

    var todos = logic.listTodos();

    if (todos.length) {
        $todosTitle.show();
        $todosList.show();

        todos.forEach(function(task) {
            var $taskItem = $('<li></li>');
    
            $taskItem.append(task.text);
    
            var $taskButton = $('<button class="btn btn-light btn-sm btn-block">✔️</button>');
    
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
        $donesTitle = $('<h2>done\'s</h2>');

        $todosList.after($donesTitle);
    }

    if (!$donesList) {
        $donesList = $('<ul></ul>');

        $donesTitle.after($donesList);
    }

    $donesList.empty();

    var dones = logic.listDones();

    if (dones.length) {
        $donesTitle.show();
        $donesList.show();

        dones.forEach(function(task) {
            var $taskItem = $('<li></li>');
    
            $taskItem.append(task.text);
    
            var $taskButton = $('<button class="btn btn-light btn-sm btn-block">❌</button>');
    
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
}



