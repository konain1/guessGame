import { StatusBar } from 'expo-status-bar'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native'
import GameStartScreen from './screens/GameStartScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState,useEffect } from 'react'
import GameScreen from './screens/GameScreen'
import colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function App () {
  const [userPickedNumer, setUserPickedNumber] = useState(null)
  const [gameisOver, setGameisOver] = useState(true)
  const [rounds,setRounds]=useState(0)

  const pickedNumberHandler = pNum => {
    setUserPickedNumber(pNum)
    setGameisOver(false)
  }

  function gameOverhandler (numberOfRounds) {
    console.log('number of rounds from gamveover',numberOfRounds)
    setGameisOver(true)
    setRounds(numberOfRounds)
  }
  
  function startNewGameHandler(){
  
   setRounds(0);
   setUserPickedNumber(null)

  }

  let screen = <GameStartScreen onPickNumber={pickedNumberHandler} />

  if (userPickedNumer) {
    screen = (
      <GameScreen userNumber={userPickedNumer}  onGameOver={gameOverhandler} />
    )
  }

  if (gameisOver && userPickedNumer) {
    screen = <GameOverScreen userNumber={userPickedNumer} rounds={rounds} onStartNewGame={startNewGameHandler} />
  }

  const [loaded, error] = useFonts({
    'RockSalt-Regular': require('./assets/font/RockSalt-Regular.ttf')
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
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
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
