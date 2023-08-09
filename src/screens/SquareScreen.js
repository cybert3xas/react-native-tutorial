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
    //action == {colorToChange: 'red' || colorToChange: 'green' || colorToChange: 'blue'}

    switch(action.colorToChange){
        case 'red':
            return {...state, red: state.red + action.amount}; //spread and add new object with the updated value
        case 'green':
            return {...state, green: state.green + action.amount};
        case 'blue':
            return {...state, blue: state.blue + action.amount};
        default: 
            return state; //always return a value that is going to be used by the state
    }
};
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    //state has the value of the list of object [red,green,blue]

    //Component
    return(
        <View>
            <ColorCounter 
                onIncrease={() => }
                onDecrease={() => }
                color="Red"/>
            <ColorCounter 
                onIncrease={() => }
                onDecrease={() => }
                color="Green"/>
            <ColorCounter 
                onIncrease={() => }
                onDecrease={() => }
                color="Blue"/>
            <View style={{ height:150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;