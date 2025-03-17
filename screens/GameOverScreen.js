import { Text, View,Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";


function GameOverScreen({userNumber,rounds,onStartNewGame}){
    console.log('rouds ',rounds)

        return(
            <View style={styles.rootContainer}>
                <Title style={{fontFamily:'open-sans',color:colors.goldy500}}>Game Over</Title>
                <View style={styles.imageContainer}>
                    <Image style={styles.image}  source={require('../assets/images/success.png')}/>
                </View>
                <View>
                    <Text style={styles.textSummary}>You needed <Text style={styles.highlighText}>{rounds} </Text> 
                     rounds to guess <Text style={styles.highlighText}>{userNumber}</Text></Text>
                </View>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        )

}

export default GameOverScreen

const styles = StyleSheet.create({

    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        backgroundColor:colors.primary700,
        overflow:'hidden',
        margin:36
    },
    image:{
        width:'100%',
        height:'100%'
    },
    textSummary:{
        fontSize:24,
        fontFamily:'open-sans',
        textAlign:'center',
        marginBottom:24

    },
    highlighText:{
        fontFamily:'open-sans',
        fontWeight:700,
        color:'white'
    }
})