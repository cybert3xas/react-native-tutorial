import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

/** 
 * onIncrease and onDecrease are callback functions. These functions are sent 
 * down from the parent component to the child (this class) and modify the state
 * value of the parent function. It's just like a pointer to a function basically.
 */
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return(
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
            <Button onPress={() => onDecrease()} title={`Increase ${color}`}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ColorCounter;