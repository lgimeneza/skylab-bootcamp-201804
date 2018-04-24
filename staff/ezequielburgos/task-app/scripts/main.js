'use strict';

// TODO implement the presentation logic

var $form = $('form');

$form.submit(function (e) {
    e.preventDefault();

    // var $input = $(this).find('input');
    var $input = $(this).find('input[type=text]');

    var text = $input.val();

    logic.addTask(text);

    $input.val('');

    refresh();
});

// do both functions (todo and done) when you execute refresh
function refresh() {
    listTodos();

    listDones();
}

var $todosTitle, $todosList;

function listTodos() {
    // create a TODO TITLE if it's not created yet;
    if (!$todosTitle) {
        $todosTitle = $('<h2>todo\'s</h2>');
        // put the title right after the FORM header:
        $form.after($todosTitle);
    }
    // create a TODO LIST
    if (!$todosList) {
        $todosList = $('<ul class="list-group"></ul>');
        // put the list-item AFTER the title
        $todosTitle.after($todosList);
    }

    // we empty the list:
    $todosList.empty();


    var todos = logic.listTodos();


    if (todos.length) {
        $todosTitle.show();
        $todosList.show();


        todos.forEach(function (task) {
            // we create the list tag
            var $taskItem = $('<li class="list-group-item"></li>');
            // inserting the text message into the list tag
            $taskItem.append(task.text);
            // we insert the button to remove
            var $taskButton = $('<button class="btn btn-outline-dark">V</button>');
            // 
            $taskButton.click(function () {
                logic.markTaskDone(task.id);

                refresh();
            });
            // we insert the button after the list-item
            $taskItem.append($taskButton);
            // we insert the next list-item right after the list-item
            $todosList.append($taskItem);
        });
    } else {
        $todosTitle.hide();
        $todosList.hide();
    }
}


var $donesTitle, $donesList;

function listDones() {
    // We insert the title if there's none
    if (!$donesTitle) {
        $donesTitle = $('<h2>done\'s</h2>');

        $todosList.after($donesTitle);
    }
    // we create an ul tag
    if (!$donesList) {
        $donesList = $('<ul class="list-group"></ul>');

        $donesTitle.after($donesList);
    }
// we empty the list:
    $donesList.empty();

    var dones = logic.listDones();

    // if the array of Dones is not empty: 
    if (dones.length) {
        // show the titlte and list:
        $donesTitle.show();
        $donesList.show();

        dones.forEach(function (task) {
            // declare the list item:
            var $taskItem = $('<li class="list-group-item"></li>');

            // insert the text
            $taskItem.append(task.text);

            // declare the task button
            var $taskButton = $('<button class="btn btn-outline-dark">X</button>');

            $taskButton.click(function () {
                logic.removeTask(task.id);

                listDones();
            });

            // place the button next tot the list-item the button 
            $taskItem.append($taskButton);

            // place the list-item span inside the list
            $donesList.append($taskItem);
        });
        // if there is no Dones... hide both the title and the list:
    } else {

        $donesTitle.hide();
        $donesList.hide();
    }
}
