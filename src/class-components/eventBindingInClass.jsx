import React from "react";

export class EventBindingInClass extends React.Component
{

    handleButtonClick(e){
        alert(`
            ButtonName = ${e.target.name} \n
            ButtonId = ${e.target.id} \n
            X position = ${e.clientX}
        `)
    }
  render(){
    return(
        <React.Fragment>
            <div className="container-fluid">
                <button className="btn btn-danger" id="btnLogin" name="Login" onClick={this.handleButtonClick}>Login</button>
            </div>
        </React.Fragment>
    )
  }
}