import React, { Component } from 'react';
import Card from './Card';

export default class Task9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    getTodos = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await resp.json();
        console.log(data.slice(0,5))
        this.setState({ todos: data.slice(0,5) })
    }

    componentDidMount() {
        this.getTodos();
    }

    render() {
        return (
        <div>
            <h3>Task 9</h3>
            {this.state.todos.map((todo) => <Card key={todo.id} todo={todo}></Card>)}
        </div>
        );
    }
}

/* Task 9
Task 9 viduje atvaizduokite 5 būtinus atlikti darbų iš čia: https://jsonplaceholder.typicode.com/todos

Pastaba: 
- atkreipkite dėmesį, kad abu komponetai yra class tipo, 
todėl būtina naudoti "Class components State and Lifecycle";
- būtini atlikti darbai turi būti atvaizuojami vienoje eilutėje 
ir turėti šia informacija: pavadinimas, atlikta/neatlika (yes/no)
*/
