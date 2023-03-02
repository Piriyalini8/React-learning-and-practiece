import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
      {/* 3. bind event handler in the constructor */}
    //   this.clickHandler = this.clickHandler.bind(this);
    }

    // for 1,2,3 binding methods
    // clickHandler(){
    //     this.setState({
    //         message: "Good Bye!"
    //     })
    // }

    // 4. use arrow function as class property 
    clickHandler = () =>{
        this.setState({
            message: "Good Bye"
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
         {/* 1. using bind keyword, bind the handler in render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* 2. using arrow function in the render method */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* 3. bind event handler in the constructor */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* 4. use arrow function as class property */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind