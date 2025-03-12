import { Pressable, Text, View,StyleSheet } from 'react-native'
import colors from '../constants/colors'

function PrimaryButton ({ children, onPress }) {
  return (
      <View style={styles.mainContainer}>

    <Pressable onPress={onPress} style={({pressed})=> 
    pressed ? [styles.pressableContainer,styles.pressed] 
    : styles.pressableContainer} android_ripple={{color:colors.primary500}}>
        <Text style={styles.buttonText}> {children} </Text>
    </Pressable>
      </View>
  )
}

export default PrimaryButton


const styles = StyleSheet.create({

    mainContainer:{
     
        borderRadius:28,
        margin:5,
      overflow:'hidden',
      
       
    },
    pressableContainer:{
        backgroundColor:colors.primary600,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:4
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    pressed:{
        opacity:0.65
    }
})