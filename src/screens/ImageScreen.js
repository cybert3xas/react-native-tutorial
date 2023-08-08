import react from "react";
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail"; //imported the child component, we can use it like noraml jsx

/**
 * The title and image are props that we are sending down to the child of ImageScreen (ImageDetail). It
 * acts as a image and a caption.
 * @returns 
 */
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')}score="10"/>
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}score="9"/>
            <ImageDetail title="Mounain" imageSource={require('../../assets/mountain.jpg')}score="6.5"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;