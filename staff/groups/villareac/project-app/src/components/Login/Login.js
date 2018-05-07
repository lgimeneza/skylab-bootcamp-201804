import React, {Component} from "react"


class Login extends Component{

   constructor(){
       super();

       this.state = {
           username:'',
           password:''
       }
   }


_handlerLogin=(e)=>{

    e.preventDefault();




}


render(){
    return
    <div>
         <h1>LOGIN</h1>
            <section>
                <form onSubmit={this._handlerLogin}>
                    <input type="text" placeholder="user"/>
                    <input type="password" placeholder="pass
                    word"/>
                    <button type="submit">Login</button>
                </form>
            </section>
    </div>

}



}

export default Login