import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//FlatList turns an array of list into a list of elements
//Make sure that you're list is created with keys
const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: 20},
        {name: 'Friend 2', age: 25},
        {name: 'Friend 3', age: 31},
        {name: 'Friend 4', age: 28},
        {name: 'Friend 5', age: 18},
        {name: 'Friend 6', age: 19},
        {name: 'Friend 7', age: 24},
        {name: 'Friend 8', age: 55}
    ];

    //The key extractor is using the name friend as a key because it's UNIQUE.
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;