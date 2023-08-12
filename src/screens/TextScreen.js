import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

//The properties of the component change depending on the scenario
//For this screen we don't want to autoCorrect or autoCapitalize

/**
 * We want TextScreen (parent) to send some props to the child TextInput that has the following 
 * properties 
 * value: currentText
 * onChnageText() : a callback funtion that takes takes the users input anything a keystroke is made. 
 * We can use it to get/use the users input. So inside that callback function, we will also set 
 * the state variable via the state callback function.
 *  */
const checkPassowrd = (password) => {
    return password.length < 5 ? true : false;
};
const TextScreen = () => {
    const [password, setPassoword] = useState('');
    return(
        <View>
            <Text style={{marginLeft: 15, fontSize: 15}}>Enter a password: </Text>
            <TextInput 
                style={styles.textInputBox}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassoword(newValue)}
            />
            {
                checkPassowrd(password)
                ? <Text style={{marginLeft: 15, fontSize: 15}}>The password must contain 5 characters.</Text>
                : <Text style={{marginLeft: 15, fontSize: 15}}>Password is valid.</Text>
            }
        </View>
    );
};


const styles = StyleSheet.create({
    textInputBox:{
        marginHorizontal: 15,
        borderColor: 'black',
        borderWidth: 2,
        paddingLeft: 8
    }
});

export default TextScreen;