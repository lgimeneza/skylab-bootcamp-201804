// TODO implement the presentation logic

var $form = $('form');

$form.submit(function(e) {
    e.preventDefault();

    // var $input = $(this).find('input');
    var $input = $(this).find('input[type=text]');

    var text = $input.val();

    logic.addTask(text);

    $input.val('');

    listTodos();
});

var $todosTitle, $todosList;

function listTodos() {
    if (!$todosTitle) {
        $todosTitle = $('<h1>todo\'s</h1>');

        $form.after($todosTitle);
    }

    if (!$todosList) {
        $todosList = $('<ul></ul>');

        $todosTitle.after($todosList);
    }

    $todosList.empty();

    var todos = logic.listTodos();

    todos.forEach(function(task) {
        var $taskItem = $('<li></li>');
        $taskItem.append(task.text);

        $taskButton = $('<button>V</button>');

        $taskButton.click(function() {
            logic.markTaskDone(task.id);

            listTodos();
        });

        $taskItem.append($taskButton);

        $todosList.append($taskItem);
    });
}