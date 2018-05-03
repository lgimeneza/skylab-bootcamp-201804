// Create a function that return a array of object

/* Crea una función(polyfill nueva funcionalidad a array) que reciba por parámetro un array.
Que al ser nombrado por un array devuelva un nuevo array
de objetos. Donde el índice de cada objeto corresponda a los elementos del primer array
y los valores de los objetos sean los elementos del segundo array */

/* Create a function (polyfill functionality to array) that receives an array through parameter.
That when being named by an array it returns a new array
  of objects. Where the index of each object corresponds to the elements of the first array
  and the values of the objects are the elements of the second array */


  /**
   * 
   * Create a function that return a array ob object
   * 
   * @example
   * 
   * var araryNumbers = [1,2,3,4];
   * var arrayLetters = ["a","b","c","d"];
   * NewArray =araryNumbers.arrayOfObjects(arrayLetters);//-->[{1:a},{2:b},{3:c},{4:d}]
   * 
   * @param {Array} - Input Where the elementes are the value of final array.
   * 
   * 
   * @returns {Array} - New array of object, whrere the indexs will be the elements of the first array. And 
   * the values will be the elements ot the elements of the second array.
   *  
   */


   if(typeof Array.prototype.arrayOfObjects !== 'function'){
        
        Array.prototype.arrayOfObjects = function (array){

            var newArray = new Array();

            for (let i = 0; i < this.length; i++) {
                
                var object = new Object();
                object[this[i]] =array[i];
                newArray.push(object); 

            };
                
                return newArray;
        }
    }


    var araryNumbers = [11,22,33,44];
    var arrayLetters = ["a","b","c","d"];
    var newArray =araryNumbers.arrayOfObjects(arrayLetters);

    console.log(newArray);