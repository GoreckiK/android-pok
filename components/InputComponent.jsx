import React from 'react';
import {Button, TextInput, View, Modal} from "react-native";

const InputComponent = props => {
    return (
        <Modal >
            <View style={style.inputContainer}>
                <TextInput style={style.input} onChangeText={props.handleInputChange}/>
                <Button title='Add' onPress={props.handleButtonClick}/>
            </View>
        </Modal>
    )
};

export default InputComponent;

