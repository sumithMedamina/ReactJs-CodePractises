
import React from "react";

export class TwoWayDataBinding extends React.Component
{
constructor(){
    super();
    this.state ={
        name :"",
        price :0,
        city :"",
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
}


handleNameChange(e){
    this.setState({
        name:e.target.value,
        price:this.state.price,
        city:this.state.city
    })
}

handlePriceChange(e){
    this.setState({
        name:this.state.name,
        price:e.target.value,
        city:this.state.city
    })
}

handleCityChange(e){
    this.setState({
        name:this.state.name,
        price:this.state.price,
        city: e.target.value

    })

}

handleButtonClick(){
   alert(JSON.stringify(this.state))
}


render(){
    return(
        <React.Fragment>
            <div className="container-fluid d-flex align-items-center justify-content-evenly vh-100 bg-danger-subtle">
                    <div>
            <dl className="w-100 border border-2 border-danger-subtle p-5 ">
                <dt>Name</dt>
                <dd><input type="text" name="" id="" className="form-control" onChange={this.handleNameChange}/></dd>
                <dt>Price</dt>
                <dd><input type="number" name="" id="" className="form-control" onChange={this.handlePriceChange}/></dd>
                <dt>City</dt>
                <dd>
                    <select name="" id="" className="form-select w-auto"  onChange={this.handleCityChange.bind(this)}>
                        <option>select-city</option>
                        <option>HYD</option>
                        <option>MUMBAI</option>
                    </select>
                </dd>
                <button className="btn btn-warning w-auto" onClick={this.handleButtonClick.bind(this)}>Register</button>
            </dl>
        </div>
        <div className="d-flex flex-column justify-content-center">
            <h2>Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{this.state.name}</dd>
                <dt>Price</dt>
                <dd>{this.state.price}</dd>
                <dt>City</dt>
                <dd>{this.state.city}</dd>
            </dl>
        </div>
                    
            </div>
        </React.Fragment>
    )
}

}