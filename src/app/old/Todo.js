import React, { Component } from 'react';

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export class Todo extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

    componentWillMount(){
        fetch('http://192.168.56.1:3000/todos', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then( res => res.json() )
            .then( todos => this.setState({todos}) )
    }

    handleChange(text){
        this.setState({newTodo: text});
    }
    handlePress(){
        fetch('http://192.168.56.1:3000/todos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.newTodo
            }),
        })
            .then(res => res.json())
            .then(todo => {
                const todos = [todo, ...this.state.todos];
                this.setState({todos, newTodo: ''});
            })
    }
    render(){
        return(
            <View style={styles.container}>
                <Reddit posts = {this.state.posts}/>
                <View style={styles.form}>
                    <TextInput value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} style={styles.input}/>
                    <TouchableOpacity onPress={this.handlePress.bind(this)} style={styles.button}>
                        <Text style={styles.buttonText}>create</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.todos}>
                    {this.state.todos.map((todo, i) =>
                        <View style={styles.todo} key={i}>
                            <Text style={styles.todoText}>{todo.name}</Text>
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
    form: {
        flexDirection: 'row'
    },
    input: {
        flex: 0.7,
        fontSize: 16
    },
    button: {
        flex: 0.3,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
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
});