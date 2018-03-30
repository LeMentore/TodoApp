import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TodoForm } from "./TodoForm"
import { connect } from 'react-redux'

export class Todo extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

    handleChange(text){
        this.setState({newTodo: text});
    }
    handlePress(){
        const todos = [this.state.newTodo, ...this.state.todos];
        this.setState({todos, newTodo: ''});
    }

    render(){
        return(
            <View style={styles.container}>
                <TodoForm handlePress={this.handlePress.bind(this)} handleChange={this.handleChange.bind(this)} value={this.state.newTodo}/>
                <View style={styles.todos}>
                    {this.state.todos.map((todo, i) =>
                        <View style={styles.todo} key={i}>
                            <Text style={styles.todoText}>{todo}</Text>
                        </View>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    todos: {
        marginTop: 20
    },
    todo:{
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    todoText: {
        fontSize: 16
    }
})