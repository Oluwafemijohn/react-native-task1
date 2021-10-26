import React, { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, Button } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import { useRecoilState } from "recoil"
import {  useGlobalState } from "../store/index"


function InputScreen(props:any) {

  const [ inputState, useInputState ] = useRecoilState(useGlobalState)

  // const [name, setName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [age, setAge] = useState("");

  const onChangeText = (text: string) => {
  
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(name) => useInputState({...inputState, name})}
        value={inputState.name}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your phone number"
        onChangeText={(phoneNumber) => useInputState({...inputState, phoneNumber})}
        value={inputState.phoneNumber}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your age"
        onChangeText={(age) => useInputState({...inputState, age})}
        value={inputState.age}
      />
      <Button title="Submit" onPress={() =>{
      props.navigation.navigate("DisplayScreen")
      // setName("")
      // setPhoneNumber("")
      // setAge("")
      }
      }/>
      {/* <ModalDropdown 

      style={styles.dropdown}
      textStyle={{ color:"black"}}
      options={["Male", "Female"]} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  dropdown:{
    width: 100
  }
});

export default InputScreen;
