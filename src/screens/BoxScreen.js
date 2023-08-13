import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <View style={styles.boxOneStyle}/>
            <View style={styles.boxTwoStyleParent}>
                <View style={styles.boxTwoStyle}/>
            </View>
            <View style={styles.boxThreeStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 350,
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    boxOneStyle: {
        width: 100, 
        height: 100,
        backgroundColor: 'red'
    },
    boxTwoStyleParent: { 
        height: 200,
        justifyContent:'flex-end'
    },
    boxTwoStyle: {
        width: 100, 
        height: 100,
        backgroundColor: 'green',
    },
    boxThreeStyle: {
        width: 100, 
        height: 100,
        backgroundColor: 'blue'
    }
});

export default BoxScreen;