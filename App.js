import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View  , Button , TextInput , FlatList} from 'react-native';
import Goal from "./.expo/Components/GoalItem"
import { useState } from 'react';

export default function App() {
  const [value , setValue] = useState("")
  const [courseGoal , setcourseGoal] = useState([])
  
  function goalInputHandler(enteredGoalText){
    setValue(enteredGoalText)
  }

  function addGoalHandler(){
   setcourseGoal(currentCourseGoal=>[...currentCourseGoal ,{text:value , id: Math.random().toString()} ])
  }
  return (
    <View style={styles.container}>
    
      <View style={styles.inputContainer}>
         <TextInput style={styles.input} onChangeText={goalInputHandler}/>
         <Button title='tap me'  onPress={addGoalHandler}
         color="#841584"
         ></Button>
      </View>
        <FlatList data={courseGoal} renderItem={(itemData)=>{
          return <Goal text={itemData.item.value}/>
        }}
         keyExtractor={(item  , index)=>{
          return item.id;
         }}
        />
      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
 container:{
  paddingTop:50,
  paddingHorizontal:16,
  backgroundColor: "#4158D0",
// backgroundImage: "linearGradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"

 },
 inputContainer:{
  justifyContent:"space-between",
  flexDirection:"row",  
 },
 input:{
 backgroundColor:"white",
 width:"80%",
 borderColor:"pink",
 borderWidth:2,
 padding:5
 },
});

