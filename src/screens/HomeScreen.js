import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

/**
 * 1) The Button and the Touchable Opacity can be used for users to press them and have a functioncality
 * 2) Props (properties) can also be used by custom components, not only primitive.
 * 
 *  - The idea here is to receive some props in the HomeScreen component and change to another screen.
 *    We can do this by using the navigation.navigate() function OR you can destructor the object by 
 *    {navigation}, this reduces the scope of the object props.
 * @returns JSX - The component
 */
const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Button 
        title="Go to Component Screen" 
        onPress={() => navigation.navigate('Components')}
      />
      {/* <TouchableOpacity
      onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button 
        title="Go to List Screen" 
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to Image Screen" 
        onPress={() => navigation.navigate('Image')}
      />
    </View>
  ); 
    
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
