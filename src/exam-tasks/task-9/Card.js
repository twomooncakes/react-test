import React, { Component } from 'react';
import css from './Card.module.css';

export default class Card extends Component {
    render() {
        return (
            <div className={css['todo-card']}>
                <p>{this.props.todo.title}</p>
                <span className={this.props.todo.completed ? css.completed : css.unfinished}>completed: {this.props.todo.completed ? 'yes' : 'no'}</span>
            </div>
        )
        
    }
}
