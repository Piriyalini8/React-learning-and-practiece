import React, {Component} from "react";

class Welcome extends Component{
    // render(){
    //     // Props example with class components
    //     return <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>;
    // }

    // // Destructuring props in class
    render(){
        const {name, heroName} = this.props
        return <h1>Hello {name} a.k.a {heroName}</h1>;
    }
}

export default Welcome;