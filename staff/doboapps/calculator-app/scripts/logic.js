'use strict'


var Calculator =(function(){

   
    class Calculator {


        constructor(){
            
            this._display="";
            this._beforeDisplay="";
            this._accum=0;
            this._opeartion=0;
        }
    
        status(){
            return parseInt(this._display);
        }

        sum(){
            this._opeartion="+";  
            this._beforeDisplay="";         
        }

        // result(){

        // }

        one(){   addNumber(this,1);   }
        two(){    addNumber(this,2);   }
        three(){    addNumber(this,3);   }
        four(){    addNumber(this,4);   }
        five(){    addNumber(this,5);   }
        six(){    addNumber(this,6);   }
        seven(){    addNumber(this,7);   }
        eight(){    addNumber(this,8);   }
        nine(){    addNumber(this,9);   }
        zero(){    addNumber(this,0);   }
  


    }

    function addNumber(obj,num){
        obj._operation=0;
        obj._display+=num;
        obj._beforeDisplay=obj._display;
    }

    function operation(obj){

 
    }

return Calculator;

})()


   // number(num){//en el primer number result = num

        //    if (!(typeof num == "number")) throw Error("Input num is not a number"); 
           
  

        //    this._display=num;
        // }