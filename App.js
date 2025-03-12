import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, View,SafeAreaView } from 'react-native'
import GameStartScreen from './screens/GameStartScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import GameScreen from './screens/GameScreen'
import colors from './constants/colors'

export default function App () {
  const [userPickedNumer, setUserPickedNumber] = useState(null)

  const pickedNumberHandler = pNum => {
    setUserPickedNumber(pNum)
  }


  let screen = <GameStartScreen onPickNumber={pickedNumberHandler} />

  if(userPickedNumer){
    screen = <GameScreen />
  }

  return (
    <>
      <LinearGradient
        colors={[colors.primary700, colors.goldy500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          style={styles.rootScreen}
          resizeMode='cover'
          source={require('./assets/images/background.png')}
          imageStyle={styles.backgroundImage}
        >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
       
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
})
