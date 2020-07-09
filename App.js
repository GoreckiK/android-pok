import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalCard from "./components/GolGard";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [currentInput, setCurrentInput] = useState('');

    const handleInputChange = (text) => {
        setCurrentInput(text);
    };

    const handleButtonClick = () => {
        setGoals(currectGoals => [
            ...currectGoals,
            {key: Math.random().toString(), value: currentInput}
        ]);
    };

    const removeGoalHandler = goalId => {
        setGoals(currentGoals => {
            const index = currentGoals.indexOf(currentGoals.find(goal => goal.key === goalId));
            const result = [...currentGoals];
            result.splice(index, 1);
            return result;
        })
    };

    return (
        <View style={style.screen}>
            <View style={style.inputContainer}>
                <TextInput style={style.input} onChangeText={handleInputChange}/>
                <Button title='Add' onPress={handleButtonClick}/>
            </View>
            <FlatList
                data={goals}
                renderItem={itemData => (
                    <GoalCard goal={itemData.item.value} onPress={() => removeGoalHandler(itemData.item.key)}/>
                )}
            />
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        padding: 50,
        // alignItems: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        borderColor: '#696969',
        height: 40,
        borderWidth: 1,
        width: '80%'
    }
});