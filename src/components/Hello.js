import React from "react";


const Hello = () => {
    // // Using JSX example
    // return(
    // <div>
    //     <h1>Hello Priyalini!</h1>
    // </div>
    // )

    // without Using JSX 
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Priya'));
}
export default Hello;