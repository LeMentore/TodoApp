import React from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export const TodoForm = (props) => (
    <View style={styles.form}>
        <TextInput value={props.value} onChangeText={props.handleChange} style={styles.input}/>
        <TouchableOpacity onPress={props.handlePress} style={styles.button}>
            <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
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
    }
})