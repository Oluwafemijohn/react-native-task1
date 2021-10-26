import React from 'react';
import { View, Text } from 'react-native';
import { useRecoilState } from "recoil";

function DisplayScreen(props:any) {
    const { name, phoneNumber, age } = props.route.params
    return (
        <View>
            <Text>You name is: {name}</Text>
            <Text>You phone number is: {phoneNumber}</Text>
            <Text>You age is: {age}</Text>
        </View>
    );
}

export default DisplayScreen;