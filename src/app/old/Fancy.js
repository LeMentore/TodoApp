import React, {Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

import {styles} from './style';

export class Fancy extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box}></View>
                <Text style={styles.text}>Fancy</Text>
            </View>
        )
    }
}
