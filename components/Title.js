import { StyleSheet, View,Text } from "react-native"
import colors from "../constants/colors"

function Title({children}){
return(
    <>

<View>
<Text style={styles.title}>{children} </Text>
</View>
    </>
)
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:colors.goldy400,
        borderWidth:2,
        borderColor:colors.goldy500,
        padding:12,
        borderRadius:100,
        margin:12
    }
})