import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalCard = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={style.card}>
                <Text>{props.goal}</Text>
            </View>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    card: {
        height: 50,
        borderWidth: 1,
        borderColor: 'red',
        margin: 10,
        alignItems: 'center',
        padding: 10
    }
});

export default GoalCard;
