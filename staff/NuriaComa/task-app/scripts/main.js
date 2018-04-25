    "use strict"
    $('form').submit(function(event){
        //que no refresque la web al hacer submit
        event.preventDefault();
        //borrar texto en el array para no repetir en el list
        $(".todo").empty()
        //guardar texto input en la variable
        var $input = $(this).find("input[type=text]");
        var text=$input.val();
        //llamar funcion addTask
        logic.addTask(text);

        //borrar texto en el input
        $input.val(" ");
        
        refresh();
    });
    function refresh(){

        listTodos();

        
    }
        function listTodos(){

       
            //crear array con el map llamando a la funcion del logic
            logic.listTodos().map(function(task){
                
            //crear los li y el boton y el texto del todo
            
            $(".todo").append("<li class='list-group-item'> "+task.text+ " <input type='button' value='✓' class='moveButton btn btn-outline-info'></li>" );
            })
        }

        var todos = logic.listTodos();

        todos.forEach(function(task) {
            $(".moveButton").click(function(){
            logic.markTaskDone(task.id);

            });
        });
    

