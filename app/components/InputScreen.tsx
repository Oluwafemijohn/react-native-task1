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
        onChangeText={(text) => useInputState(text)}
        value={name}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your phone number"
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        value={phoneNumber}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your age"
        onChangeText={(age) => setAge(age)}
        value={age}
      />
      <Button title="Submit" onPress={() =>{
      props.navigation.navigate({name:"DisplayScreen", params:{name, phoneNumber, age}} )
      setName("")
      setPhoneNumber("")
      setAge("")
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
