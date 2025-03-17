import { Text, View, StyleSheet, TextInput, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState,useEffect } from 'react'
import colors from '../constants/colors'
import Title from '../components/Title'



function GameStartScreen ({onPickNumber}) {

    const [enteredText,setEnteredText]=useState('')

    const inputTextHandler = (inputText)=>{
        setEnteredText(inputText)
    }

    const resetInputHandler=()=>{
        setEnteredText('')
    }

    const confirmInputHandler=()=>{

        const chosenNumber = parseInt(enteredText);

        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            Alert.alert('Invalid number! ','Number has to be number between 1 to 99',[
                {text:'Okay',style:'destructive',onPress:resetInputHandler}
            ])
            return;
        }
        onPickNumber(chosenNumber)
    }

   

 
  return (

    <View style={styles.rootContainer}>

    <Title style={{fontFamily:'RockSalt-Regular',color:'lightpink'}}>Guess my Number</Title>
    {/* <Text style={{fontFamily:'RockSalt-Regular'}}>Gusee my Number</Text> */}

    <View style={styles.mainContainer}>
        <Text style={styles.instructionsText}>Enter a Number</Text>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={inputTextHandler}
        value={enteredText}
      />
      <View style={styles.buttonView}>
      <View style={styles.buttons}>

        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
      </View>
      <View style={styles.buttons}>

        <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
      </View>
      </View>
    </View>
    </View>
  )
}

export default GameStartScreen

const styles = StyleSheet.create({
    rootContainer:{
        alignItems:'center'
    },
  mainContainer: {
    marginTop: 80,
    backgroundColor: colors.primary700,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.6
  },
  textInput: {
    borderBottomColor: colors.goldy400,
    color: colors.goldy400,
    borderBottomWidth: 2,
    fontSize: 28,
    width: 50,
    textAlign: 'center',
    fontWeight: 'bold'
  },instructionsText:{
    fontSize:24,
    color:colors.goldy400,
    fontFamily:'RockSalt-Regular'
  },

  buttonView: {
    justifyContent: 'center',
    flexDirection:'row',
    width:'100%',
    
  },
  buttons:{
    flex:1
  }
})
