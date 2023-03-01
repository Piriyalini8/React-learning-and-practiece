import React from "react";

// function Greet(){
//     return <h1>Hello Priya</h1>
// }

// ES6 arrow function
// const Greet = () => <h1>Hello Priya!</h1>

//Props example with functional components
const Greet = props =>{
    console.log(props);
    return(
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    ) 
} 

// Default export
export default Greet;