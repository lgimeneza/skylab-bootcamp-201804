'use strict';

describe('The family tree', function () {
    it('The object new Father(20, []) should throw an error "The field introduced is not valid"', function() {
        expect(function() {
            var father1 = new Father(20, []);
        }).toThrow(Error('The field introduced is not valid'));
    });
    it('The object new Mother({}, 4) should throw an error "The field introduced is not valid"', function() {
        expect(function() {
            var mother1 = new Mother({}, 4);
        }).toThrow(Error('The field introduced is not valid'));
    });
    it('The mother.procreate(neighbour) should throw an error "umm poor man"', function() {
        function Neighbour(name, surname, eyes, hair, genre) {
         Person.call(this, name, surname, eyes, hair, genre)
        }
        var neighbour = new Neighbour()
        expect(function() {
            mother.procreate(neighbour);
        }).toThrow(Error('umm poor man'));
    });
    it('The father.procreate(lover) should throw an error "He leaves home"', function() {
        function Lover(name, surname, eyes, hair, genre) {
         Person.call(this, name, surname, eyes, hair, genre)
        }
        var lover = new Lover()
        expect(function() {
            father.procreate(lover);
        }).toThrow(Error('mmm wtf...'));
    });
});