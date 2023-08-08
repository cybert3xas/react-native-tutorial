/**
 * useState: is a hook, function that adds functionality to a function component. The use state should have the 
 * following syntax/criteria. 
 * 
 * const [piece of state changing var, function that takes in the value we want chaning var to take] = useState(initial value)
 * const [counter, setCounter] = useState(0);
 * 
 * Whenever ever the function from the state is called, the component gets reloded. So, if the value 
 * of counter is modified inside the setCounter() function, then when the component reloads. The value of 
 * counter will change. React tracks if the variable had been initialized before, that's why it doesn't get set 
 * to 0 everytime it reloads. 
 * 
 */
import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return(
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1);
            }}/>
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }}/>
            <Text>Current count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;