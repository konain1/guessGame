import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import Title from '../components/Title'
import { useEffect, useState } from 'react'
import colors from '../constants/colors'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'
import Card from '../components/Card'
import Ionicons from '@expo/vector-icons/Ionicons'
import GuessLogs from '../components/GuessLogs'

function GenerateRandomBetween (min, max, exclude) {
  const rndNumber = Math.floor(Math.random() * (max - min) + min)

  if (rndNumber === exclude) {
    return GenerateRandomBetween(min, max, exclude)
  } else {
    return rndNumber
  }
}

let minBoundry = 1
let maxBoundry = 100

function GameScreen ({ userNumber, onGameOver }) {
  const initialNumber = GenerateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialNumber)
  const [guessLogs, setGuessLogs] = useState([initialNumber])

  function nextGuesstHandler (direction) {
    if (
      (direction == 'lower' && currentGuess < userNumber) ||
      (direction == 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('wrong direction', 'you are pressing wrong direction', [
        { text: 'sorry', style: 'cancel' }
      ])
      return
    }

    if (direction == 'lower') {
      maxBoundry = currentGuess
    } else {
      minBoundry = currentGuess + 1
    }
    const newRndNumber = GenerateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    )
    console.log(minBoundry, maxBoundry)
    setCurrentGuess(newRndNumber)
    setGuessLogs(prev => [newRndNumber, ...prev])
  }

  useEffect(() => {
    if (currentGuess == userNumber) {
      console.log('perfect ', userNumber)
      onGameOver(guessLogs.length)
      maxBoundry = 100
      minBoundry = 1
    }
  }, [currentGuess, onGameOver, userNumber])

  const guessRoundListLength = guessLogs.length

  return (
    <>
      <View style={styles.container}>
        <Title> Opponent Guest</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <Title>Higher or lower</Title>
          <View style={styles.btnView}>
            <View style={styles.btns}>
              <PrimaryButton onPress={nextGuesstHandler.bind(this, 'greater')}>
                <Ionicons name='add' size={24} color='white' />
              </PrimaryButton>
            </View>
            <View style={styles.btns}>
              <PrimaryButton onPress={nextGuesstHandler.bind(this, 'lower')}>
                <Ionicons name='remove' size={24} color='white' />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.listView}>
          <FlatList
            data={guessLogs}
            renderItem={item => (
              <GuessLogs
                roundNumbers={guessRoundListLength - item.index}
                guess={item.item}
              />
            )}
            keyExtractor={item => item}
          />
        </View>
      </View>
    </>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  viewWrapper: {
    alignItems: 'center'
  },

  btnView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btns: {
    flex: 1
  },
  listView: {
   
    padding:22,
    margin:10
  }
})
