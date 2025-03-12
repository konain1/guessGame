import { View ,Text, StyleSheet} from "react-native";
import colors from "../../constants/colors";

function NumberContainer({children}){
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer


const styles = StyleSheet.create({
    container:{
        borderWidth:4,
       
        borderColor:'white',
        borderRadius:8,
        padding:24,
        margin:16,
        justifyContent:'center',
        alignItems:'center'
       },
       numberText:{
        color:colors.goldy500,
        fontSize:24,
        fontWeight:'bold'
       }
})