// TODO implement the presentation logic
// logic.addTask on console to see the response
'use strict';

// $("#add-task").on('submit', function(event){

var $form = $('form');

$form.submit(function (e) {
    event.preventDefault();

    var $input = $(this).find("input[type=text]");

    var text = $input.val();

    logic.addTask(text);

    $input.val(''); //limpiar el input para que se borre la desc al introducir tarea.

    refresh();
});

function refresh() {
    listTodos();
    listDones();
}


// $('.todo > ul').append('<li>' + todos[todos.length - 1].text + " " + "<button>✅</button>" + '</li>');

var $todosTitle, $todosList, $structure1;

function listTodos() {
    if (!$structure1) {
        $structure1 = $('<div class="col-sm-6" style="background-color: pink !important"></div>');
        $todosTitle = $('<h2>To-Do</h2>');
        
        $structure1.append($todosTitle);
        $('#forms').after($structure1);
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

        todos.forEach(function (task) {
            var $taskItem = $('<li></li>');

            $taskItem.append(task.text);

            var $taskButton = $('<button class="btn btn-primary"> ✅</button>');

            $taskButton.click(function () {
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

};

var $donesTitle, $donesList, $structure2;

function listDones() {
    if (!$structure2) {
        $structure2 = $('<div class="col-sm-6" style="background-color: blue"></div>');

        $donesTitle = $('<h2>Done👊🏽</h2>');
       
        $structure2.append($donesTitle);
        $structure1.after($structure2);
    }

    if (!$donesList) {
        $donesList = $('<ul></ul>');
        $donesTitle.after($donesList);
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

        dones.forEach(function (task) {
            var $taskItem = $('<li></li>');

            $taskItem.append(task.text);

            var $taskButton = $('<button> ❌</button>');

            $taskButton.click(function () {
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