import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


const GoalItems = props => {


    return (

        <TouchableOpacity style={{ flex: 1 }} >
            <View style={styles.listGoalView} >
                <Text >{props.data}
                </Text>


            </View>
            <View style={styles.button}>
                <Button title="Delete" color="red" onPress={props.onDelete.bind(this, props.id)} />
            </View>

        </TouchableOpacity>


    )

};


const styles = StyleSheet.create({
    listGoalView: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#ccc',
        borderColor: '#cec',
        // marginVertical: 10,


    },
    button: {
        flex: 1,
        alignItems: "flex-end",
        height: 40,
        //padding:-10


    }
})

export default GoalItems;