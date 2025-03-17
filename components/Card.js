
import { StyleSheet, View } from "react-native"


function Card({children}){
    return(
        <>
        <View style={styles.card}>
            {children}
        </View>
        </>
    )
}

export default Card



const styles = StyleSheet.create({
  card:{
    alignItems:'center'
  }
  })