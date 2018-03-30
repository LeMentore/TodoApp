import React, { Component } from 'react'

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

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
                <View style={styles.form}>
                    <TextInput value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} style={styles.input}/>
                    <TouchableOpacity onPress={this.handlePress.bind(this)} style={styles.button}>
                        <Text style={styles.buttonText}>ADD</Text>
                    </TouchableOpacity>
                </View>

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
    form: {
        flexDirection: 'row'
    },
    input: {
        flex: 0.7,
        fontSize: 16
    },
    button: {
        flex: 0.3,
        backgroundColor: 'pink',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
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