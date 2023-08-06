/** 
 * This component is a sub-component that will be reused in a screen component.
 * The difference is that a screen component is a component that's worth of displaying full in a page. 
 * Sub components are used to accomplish a screen. Most of the time, the sub components are created to be 
 * reusable and reduce code repetition. 
 * 
 * The pattern is that the PARENT always passes down to the CHILD (this component), meaning that the props
 * available to this child are created in the PARENT component (ImageScreen). The props are empty if the 
 * parent does not provide/create any.
*/

import react from "react";
import {View, Text, StyleSheet} from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;