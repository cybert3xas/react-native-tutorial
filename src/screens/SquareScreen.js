/** 
 * When you have multiple states that behave in a similar way and 
 * you konw you those values will change. You can make use of a REDUCER.
 * 
 * REDUCER: A function that manages changes to an object.
 *  - Has two object 
 *      - State object
 *      - Object that describes the change you want to make to the state
 *  - We look at param #2 to apply the change
 * NOTE: you never change param #1 directly, and just must always return a value to be used 
 * by the param #1.
 */
import React, {useReducer} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

//Reducer function
const reducer = (state, action) => {
    //state == [red: num, green:num, blue:num]
    //action == {type: 'red' || colorToChange: 'green' || colorToChange: 'blue', payload:15}

    switch(action.type){
        case 'change_red':
            return state.red+action.payload > 255 || state.red+action.payload < 0 
            ? state 
            : {...state, red: state.red + action.payload}; //spread and add new object with the updated value
        case 'change_green':
            return state.green+action.payload > 255 || state.green+action.payload < 0 
            ? state
            : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue+action.payload > 255 || state.blue+action.payload < 0 
            ? state
            : {...state, blue: state.blue + action.payload};
        default: 
            return state; //always return a value that is going to be used by the state
    }
};
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const {red, green, blue} = state; //destructor the state

    //state has the value of the list of object [red,green,blue]

    //Component
    return(
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_red', payload:COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload:-1 * COLOR_INCREMENT})}
                color="Red"/>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_green', payload:COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload:-1*COLOR_INCREMENT})}
                color="Green"/>
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_blue', payload:COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload:-1*COLOR_INCREMENT})}
                color="Blue"/>
            <View style={{ height:150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;