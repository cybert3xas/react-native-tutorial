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
import React, {useReducer} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

//action == how to change state
const reducer = (state, action) => {
    //state === {count: number}
    //action === {type: 'increase' || 'decrease', payload: 1}

    switch(action.type){
        case 'increase':
            return {...state, count: state.count + action.payload};
        case 'decrease':
            return {...state, count: state.count + action.payload};
        default: 
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return(
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({type:'increase', payload:12});
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type:'decrease', payload:-12});
            }}/>
            <Text>Current count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;