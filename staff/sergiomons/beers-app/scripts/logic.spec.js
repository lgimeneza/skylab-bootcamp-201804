'use strict';

<<<<<<< HEAD
describe('logic (tasks)', function() {
    beforeEach(function() {
        logic.clear();
    });

    it('should add a task', function() {
        var todos = logic.listTodos();
        
        expect(todos.length).toBe(0);
        
        var id = logic.addTask('desc');

        expect(id).toBeDefined();

        todos = logic.listTodos();

        expect(todos.length).toBe(1);

        var task = todos[0];

        expect(task.text).toBe('desc');
        expect(task.done).toBeFalsy();
    });

    it('should list todos', function() {
        logic.addTask('desc');
        
        var todos = logic.listTodos();
    
        expect(todos.length).toBe(1);
    });

    it('should mark task done', function() {        
        var id = logic.addTask('desc');

        logic.markTaskDone(id);

        var dones = logic.listDones();

        expect(dones.length).toBe(1);

        var task = dones[0];

        expect(task.text).toBe('desc');
        expect(task.done).toBeTruthy();
    });

    it('should list dones', function() {
        var id = logic.addTask('desc');

        logic.markTaskDone(id);

        var dones = logic.listDones();

        expect(dones.length).toBe(1);
    });

    it('should remove task done', function() {
        var id = logic.addTask('desc');

        logic.markTaskDone(id);
        logic.removeTask(id);

        var dones = logic.listDones();

        expect(dones.length).toBe(0);
=======
describe('logic (beers)', function() {
    it('should search beers', function(done) {
        logic.searchBeers('mahou', function(beers) {
            expect(beers).toBeDefined();

            expect(beers.length).toBe(4);

            done();
        });
    });

    it('should get beer info', function(done) {
        logic.getBeerInfo('xnRniA', function(beer) {
            expect(beer).toBeDefined();

            expect(beer.id).toBe('xnRniA');

            done();
        });
>>>>>>> develop
    });
});