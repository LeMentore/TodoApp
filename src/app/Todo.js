import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { TodoForm } from './TodoForm'
import { createTodo, getTodos } from './ActionCreators'

class Todo extends Component {
    constructor(){
        super();
        this.state = {
            newTodo: ''
        }
    }

    componentDidMount(){
        this.props.getTodos()
    }

    handleChange(text){
        this.setState({newTodo: text});
    }
    handlePress(){
        this.props.createTodo(this.state.newTodo)
        this.setState({newTodo: ''})
    }

    render(){
        return(
            <LinearGradient style={styles.container} colors={["#fff", "#05B7D9"]}>
                <TodoForm handlePress={this.handlePress.bind(this)} handleChange={this.handleChange.bind(this)} value={this.state.newTodo}/>
                <View style={styles.todos}>
                    {this.props.todos.map((todo, i) =>
                        <View style={styles.todo} key={i}>
                            <Text style={styles.todoText}>{todo.name}</Text>
                        </View>
                    )}
                </View>
            </LinearGradient>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    createTodo(todo){
        dispatch(createTodo({'name': todo}))
    },
    getTodos(){
        dispatch(getTodos())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

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