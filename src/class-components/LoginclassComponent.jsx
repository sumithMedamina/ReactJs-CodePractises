import React from "react";

export class LoginClassComponent extends React.Component
{

    dropDown ={
        width : 'auto'
    }
    constructor(){
        super();
        this.state = {
            title : "Category List",
            categories : ["Men's Clothing" , "Women's Clothing", "Jewelry"]
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                <h2>{this.state.title}</h2>
                <select className="form-select" style={this.dropDown}>
                    {
                        this.state.categories.map(category =>
                            <option key={category} >{category}</option>
                        )
                    }
                </select>
                </div>
            </React.Fragment>
        )
    }

}