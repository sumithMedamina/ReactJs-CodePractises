import React from "react";


export class PureDemo extends React.PureComponent
{

constructor(){
    super();
    this.state ={
        products : ["Mobiles","Laptops","Jeweller"]
    }
}

handleLoadClick(){
    alert(`hi`)
    this.setState({
        products : ["Mobiles","Laptops","Jeweller","Shoes"]
    })
}

componentDidUpdate(){
    console.log('Component will render  on update')
}


    render(){
        return(
            <div>
                <h2>PureComponent <button onClick={this.handleLoadClick.bind(this)} className="btn btn-dark">Load</button></h2>
                <ol>
                    {
                        this.state.products.map(product =>
                            <li key={product}>{product}</li>
                        )
                    }
                </ol>
            </div>
        )
    }
}