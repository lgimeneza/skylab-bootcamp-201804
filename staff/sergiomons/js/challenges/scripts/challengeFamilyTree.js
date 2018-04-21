'use strict';
/*
-Create a constructor Person, with name, surname, eyes, hair and genre (you can add something else if you want).
-Create two constructors from Person: one Father and one Mother, giving values to name, surname, eyes color… This two people “make” some childs (genetic is random.range). 
-Add manually the names, surnames and with genetic; give the other parameters to the sons.
-Try it couple times to see that this is really random.*/

/**
 * Constructor Function.
 * 
 * @param {string} name - The name of the person.
 * @param {string} surname - The surname of the person.
 * @param {string} eyes - The eye's color of the person.
 * @param {string} hair - The hair's color of the person.
 * 
 * 
 */
function Person(name, surname, eyes, hair, genre) {
     this.name = name;
     this.surname = surname;
     this.eyes = eyes;
     this.hair = hair;
     this.genre = genre;
}

/**
 * Constructor Function to host all types Father.
 * 
 * @param {string} name - The name of the Father.
 * @param {string} surname - The surname of the Father.
 * @param {string} eyes - The eye's color of the Father.
 * @param {string} hair - The hair's color of the Father.
 * @param {string} genre - The genre of the Father.
 * 
 * @throws {Error} - If the name, surname, eyes, hair are not a string, throw an error.
 */
function Father(name, surname, eyes, hair, genre) {
    if (typeof name !== 'string' || typeof surname !== 'string' || typeof eyes !== 'string' || typeof hair !== 'string') throw Error('The field introduced is not valid')
    Person.call(this, name, surname, eyes, hair, genre);
}
Father.prototype = new Person();
var father = new Father('Max', 'Power', 'brown', 'black', 'Male');

/**
 * Constructor Function to host all types Mother.
 * 
 * @param {string} name - The name of the Mother.
 * @param {string} surname - The surname of the Mother.
 * @param {string} eyes - The eye's color of the Mother.
 * @param {string} hair - The hair's color of the Mother.
 * @param {string} genre - The genre of the Mother.
 * 
 * @throws {Error} - If the name, surname, eyes, hair are not a string, throw an error. 
 */
function Mother(name, surname, eyes, hair, genre) {
    Person.call(this, name, surname, eyes, hair, genre)

}
Mother.prototype = new Person();
var mother = new Mother('Cameron', 'Diaz', 'blue', 'blonde', 'Female');

/**
 * 
 * @param {*} eyes 
 * @param {*} hair 
 * @param {*} genre 
 */
function Child(eyes, hair, genre) {
    this.eyes = eyes;
    this.hair = hair;
    this.genre = genre;
}
Child.prototype = new Person();

/**
 * 
 * @param {Object} father - The father of the relation.
 * @property {property} procreate - 
 * 
 * @throws {Error} - 
 *   
 */
Mother.prototype.procreate = function(father) {
    if(!(father instanceof Father)) throw Error('umm poor man');

    var numChildren = Math.floor((Math.random() * (5-1))+1);

    if (numChildren > 0) this.children = [];
    
    for (var i= 0; i < numChildren; i++) {
    var randomEyes = Math.random() > 0.5 ? father.eyes : mother.eyes;
    var randomHair = Math.random() > 0.5 ? father.hair : mother.hair;
    var randomGenre = Math.random() > 0.5 ? father.genre : mother.genre;
      var child = new Child(randomEyes, randomHair, randomGenre);
      this.children.push(child);
    }
    return this.children
}

/**
 * 
 * @param {*} mother 
 */
Father.prototype.procreate = function(mother) {
	if(!(mother instanceof Mother)) throw Error('Father mmm...wtf');
	return mother.procreate(this);
}