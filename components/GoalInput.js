
import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';


const GoalInput = props => {
  const [goal, setGoal] = useState(" ")
  const AddGoal = () => {

    if (isNaN(goal) !== false) {
      props.onAddGoal(goal)
      setGoal(" ")
    }
  }
  return (
    <Modal visible={props.onVisible} animationType="slide" >
      <View style={styles.inputContainer}>
        <TextInput placeholder="write here" value={goal}
          style={styles.textInput}
          onChangeText={(str) => { setGoal(str) }} />
        <View style={styles.buttonView}>
          <Button title="cancel" color="red" onPress={props.onCancel} />
          <Button title="Enter" onPress={AddGoal} />
        </View>

      </View>
    </Modal>

  )
};


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center"

  },
  textInput: {
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 10,
    width: "90%"

  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '65%'
  }

})

export default GoalInput;