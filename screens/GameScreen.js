import { View,Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import colors from "../constants/colors";
import NumberContainer from "../components/game/NumberContainer";

function GenerateRandomBetween(min,max,exclude){
    const rndNumber = Math.floor(Math.random() * (max-min) +min);

    if(rndNumber === exclude){
        return GenerateRandomBetween(min,max,exclude)
    }else{
        return rndNumber
    }
}

function GameScreen({userNumber}){

    const initialNumber = GenerateRandomBetween(1,100,userNumber)
    const [currentGuess,setCurrentGuess]=useState(initialNumber)

    return(

        
        <>
            <View style={styles.container}>
            <Title > Opponent Guest</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View>
                    <Text>Higher or lower</Text>
                </View>
            </View>
        </>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,

    },
  
})