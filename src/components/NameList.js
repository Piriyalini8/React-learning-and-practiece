import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Priya',
            age: 26,
            skill: 'Java'
        },
        {
            id: 2,
            name: 'Kishan',
            age: 26,
            skill: 'Web development'
        },
        {
            id: 3,
            name: 'Pavi',
            age: 5,
            skill: 'Drawing'
        },
        {
            id: 4,
            name: 'Kriti',
            age: 6,
            skill: 'English'
        },
    ]

    const personList = persons.map(person => <Person person={person} />)
    return (
        <div>{personList}</div>
    )

    // // Simple name array
    // const names = ['Priya', 'Kishan', 'Pavi']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return (
    //     <div>{nameList}</div>

    // )
}

export default NameList