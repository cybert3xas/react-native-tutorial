//This is a react component 
/*
1) Import libraries we need to create a component
2) Create a component - a function that returns some JSX
3) Create a styleshee for the component
4) Export the component to use somewhere else 
*/
import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const myName = "Jonathan Argumedo";
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React native!</Text>
            <Text style={{fontSize: 20}}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;