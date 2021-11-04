import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRecoilValue } from "recoil";
import { useGlobalState } from '../store';

function DisplayScreen() {
    // const { name, phoneNumber, age } = props.route.params

    const  inputState = useRecoilValue(useGlobalState)
    console.log(inputState.name)

    return (
        <View style={styles.container} >
            <Text style={styles.text}>You name is: {inputState.name}</Text>
            <Text style={styles.text} >You phone number is: {inputState.phoneNumber}</Text>
            <Text style={styles.text} >You age is: {inputState.age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "grey"
    },
    text:{
        
        width:"80%",
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: "blue",
        margin: 10,

    }
})

export default DisplayScreen;