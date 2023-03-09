import React, { Component } from 'react'

// Conditional Rendering
class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // using Short circuit operator (render something or nothing)
        return this.state.isLoggedIn && <div>Welcome Priya!</div>

        // //Using Ternery operator
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Priya!</div>
        // ) : (
        //     <div>Welcome Guest!</div>
        // )

        // //Element variable
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Priya!</div>
        // } else {
        //     message = <div>Welcome Guest!</div>
        // }

        // return (
        //     <div>{message}</div>
        // )

        // //If- Else Condition
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Priya!</div>
        //     )
        // } else{
        //     return(
        //         <div>Welcome Guest!</div>
        //     )
        // }
        // return (
        //   <div>
        //     <div>Welcome Priya!</div>
        //     <div>Welcome Guest!</div>
        //   </div>
        // )
    }
}

export default UserGreeting