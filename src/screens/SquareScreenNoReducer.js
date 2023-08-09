import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

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

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    //Helper function would work just like the reducer and the different pieces of state
    const setColor = (color, change) => {
        switch(color){            
            case 'red':
                (red+change > 255 || red+change < 0) 
                    ? null 
                    : setRed(red + change);
                return;
            case 'green':
                (green+change > 255 || green+change < 0) 
                    ? null 
                    : setGreen(green + change);
                return;
            case 'blue':
                (blue+change > 255 || blue+change < 0) 
                    ? null 
                    : setBlue(blue + change);
                return;
            default:
                return;
        }
    };

    //Component
    return(
        <View>
            <ColorCounter 
                onIncrease={() => setColor('red',COLOR_INCREMENT)} 
                onDecrease={() => setColor('red',-1 * COLOR_INCREMENT)} 
                color="Red"/>
            <ColorCounter 
                onIncrease={() => setColor('green',COLOR_INCREMENT)} 
                onDecrease={() => setColor('green',-1 * COLOR_INCREMENT)} 
                color="Green"/>
            <ColorCounter 
                onIncrease={() => setColor('blue',COLOR_INCREMENT)} 
                onDecrease={() => setColor('blue',-1 * COLOR_INCREMENT)} 
                color="Blue"/>
            <View style={{ height:150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;