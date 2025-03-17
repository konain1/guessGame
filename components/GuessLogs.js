import { StyleSheet, View,Text } from "react-native";
import colors from "../constants/colors";


function GuessLogs({roundNumbers,guess}){
    console.log(roundNumbers,guess)
    return(
        <>
            <View style={styles.listItems}>
                <Text style={{color:'black'}}>#{roundNumbers}</Text>
                <Text style={{color:'black'}}>Opponet's guess     #{guess}</Text>
            </View>
        </>
    )
}

export default GuessLogs

const styles = StyleSheet.create({
    listItems:{
        borderWidth:1,
        borderColor:colors.primary500,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:colors.goldy400,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        color:'white',
        elevation:8,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3
    },
    
})