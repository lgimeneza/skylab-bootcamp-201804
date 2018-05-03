'use strict';
/* Explanation of challenge.

-Create a constructor Person, with name, surname, eyes, hair and genre (you can add something else if you want).
-Create two constructors from Person: one Father and one Mother, giving values to name, surname, eyes color… This two people “make” some childs (genetic is random.range). 
-Add manually the names, surnames and with genetic; give the other parameters to the sons(eyes, hair, genre).
-Try it couple times to see that this is really random.*/

/**
 * Person constructor Function with several parametres.
 * 
 * @param {string} name - The name of the Person.
 * @param {string} surname - The surname of the Person.
 * @param {string} eyes - The eye's color of the Person.
 * @param {string} hair - The hair's color of the Person.
 * @param {string} genre - The genre of the Person.
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
    if (typeof name !== 'string' || typeof surname !== 'string' || typeof eyes !== 'string' || typeof hair !== 'string') throw Error('The field introduced is not valid');
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
    if (typeof name !== 'string' || typeof surname !== 'string' || typeof eyes !== 'string' || typeof hair !== 'string') throw Error('The field introduced is not valid');
    Person.call(this, name, surname, eyes, hair, genre)
}
Mother.prototype = new Person();
var mother = new Mother('Cameron', 'Diaz', 'blue', 'blonde', 'Female');

/**
 *  Constructor Function to host all types Child.
 * 
 * @param {string} eyes - The color's eye of the child.
 * @param {string} hair - The color's hair of the child.
 * @param {string} genre - The genre of the child.
 */
function Child(eyes, hair, genre) {
    this.eyes = eyes;
    this.hair = hair;
    this.genre = genre;
}
Child.prototype = new Person();

/**
 * Function which return the numbers of the children and their features randomly.
 * 
 * @example 
 * 
 * mother.procreate(father) // -> [child, child, child]
 * 
 * Child {eyes: "brown", hair: "black", genre: "Female"}
 * Child {eyes: "blue", hair: "blonde", genre: "Female"}
 * Child {eyes: "blue", hair: "black", genre: "Male"}
 * 
 * @param {Object} father - The father of the relation.
 * 
 * @property {property} procreate - It is a property of the mother.
 * 
 * @throws {Error} - If param introduce is not instance of Father, throw an error.
 * 
 * @returns {array} - The function will return an array of object with all children and their properties.
 *   
 */
Mother.prototype.procreate = function(father) {
    if(!(father instanceof Father)) throw Error('umm poor man');
// Number of children who will procreate randomly. In this case, it won't be more than five.
    var numChildren = Math.floor(Math.random() * 5);
// A new property is created to host their children.
    if (numChildren > 0) {
        this.children = []
    } else {
        alert('They keep trying!!');
    }
// The 'eyes', 'hair' and 'genre' properties will be assigned to children randomly.
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
 * Function which return the numbers of the children and their features randomly like previus function.
 * 
 * @param {Object} mother - The mother of the relation.
 * @property {property} procreate - It is a property of the father.
 * 
 * @throws {Error} - If param introduce is not instance of Father, throw an error.
 *   
 * @returns {function} - The function will return a 'mother.procreate(father)' function, meaning the father have the procreate property as well. 
 */
Father.prototype.procreate = function(mother) {
	if(!(mother instanceof Mother)) throw Error('mmm wtf...');
	return mother.procreate(this);
}

mother.procreate(father);