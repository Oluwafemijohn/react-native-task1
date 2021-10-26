import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilValue } from "recoil";
import { useGlobalState } from '../store';

function DisplayScreen(props:any) {
    // const { name, phoneNumber, age } = props.route.params
    const  inputState = useRecoilValue(useGlobalState)

    return (
        <View>
            <Text>You name is: {inputState.name}</Text>
            <Text>You phone number is: {inputState.phoneNumber}</Text>
            <Text>You age is: {inputState.age}</Text>
        </View>
    );
}

export default DisplayScreen;