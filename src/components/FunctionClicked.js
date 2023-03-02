import React from 'react'

function FunctionClicked() {
    function clickHandler(){
        console.log("Button Clicked");
    }
  return (
    <div>
        {/* correct way Pass function as event handler */}
        <button onClick={clickHandler}>Click</button>

        {/* // Function call is not use for event handling
        <button onClick={clickHandler()}>Click</button> */}
    </div>
  )
}

export default FunctionClicked