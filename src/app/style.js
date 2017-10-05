
import {StyleSheet, Dimensions} from 'react-native';

const opacity = .9;
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `rgba(0,0,0, ${opacity})`,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: 'yellow',
        width: width /2,
        height: height /3,
        borderRadius: 50
    },
    text: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'Roboto'
    }
});