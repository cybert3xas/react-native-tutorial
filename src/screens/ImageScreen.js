import react from "react";
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail"; //imported the child component, we can use it like noraml jsx

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest"/>
            <ImageDetail title="Beach"/>
            <ImageDetail title="Mounain"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;