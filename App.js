import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItems from './components/GoalItems'
import GoalInput from './components/GoalInput'

export default function App() {

  const [listGoal, setListGoal] = useState([])
  const [visible, setVisible] = useState([false])

  const AddGoal = goal => {
    const d = new Date();
    let time = d.getHours().toString() + ":" + d.getMinutes().toString()
    let day = d.getDate() + ":" + d.getMonth() + ":" + d.getFullYear()

    setListGoal(currentGoal =>
      [
        { id: Math.random().toString(), value: goal, time: time, day: day }
        , ...currentGoal
      ])
    setVisible(false)

  }


  const RemoveGoal = goalID => {
    // console.log(goalID)
    setListGoal(currentGoal => {
      return currentGoal.filter(
        (goal) => goal.id !== goalID
      )
    }

    )
  }
  const CancelAddGoalModal = () => {
    setVisible(false)
  }


  return (

      <View style={styles.screen}>
        
        <Button title="Add Goal" onPress={() => { setVisible(true) }} />
        <GoalInput onAddGoal={AddGoal} onVisible={visible} onCancel={CancelAddGoalModal} />


        <FlatList
          keyExtractor={(item, index) => item.id}
          data={listGoal}

          renderItem={dataitem => (
            <GoalItems data={dataitem.item.value} id={dataitem.item.id} onDelete={RemoveGoal} date={dataitem.item.date} onCancel={CancelAddGoalModal} />
          )}


        />
      </View>
   
  );
}


const styles = StyleSheet.create({
 
  screen: {
    padding: 50,
  
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"

  },




});