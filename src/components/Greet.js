import React from "react";

// function Greet(){
//     return <h1>Hello Priya</h1>
// }

// ES6 arrow function
// const Greet = () => <h1>Hello Priya!</h1>

// //Props example with functional components
// const Greet = props =>{
//     console.log(props);
//     return(
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     ) 
// } 

// //Destructure props in the function parameter
// const Greet = ({name, heroName}) =>{
//     return(
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     ) 
// } 

// //Destructure props in the function body
const Greet = props =>{
    const {name, heroName} = props
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    ) 
} 

// Default export
export default Greet;