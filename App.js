import { useState } from 'react';
import { StyleSheet, ImageBackground,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font';
import  AppLoading from 'expo-app-loading';

export default function App() {


  const [gameOver, setGameOver] = useState(true);
  const [chosenNumber, setChosenNumber] = useState();
  const [roundsNumber, setRoundsNumber] = useState(0);

const [fonstsLoaded] = useFonts({


  'open-sans': require('./assets/fonst/OpenSans-Regular.ttf'),

  'open-sans-bold': require('./assets/fonst/OpenSans-Bold.ttf')

});


if(!fonstsLoaded){
  return <AppLoading />;
}

  function pickedNumberHandler(pickedNumber) {

    setChosenNumber(pickedNumber);
    setGameOver(false);
  }


  function gameOverHandler(numberOfRounds){
    setGameOver(true);
    setRoundsNumber(numberOfRounds);
  }

  function newGameStart(){


    setChosenNumber(null);
    setRoundsNumber(0);

  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (chosenNumber) {
    screen = <GameScreen userNumber={chosenNumber} onGameOver = {gameOverHandler}/>
  }

  if(gameOver && chosenNumber){
    screen = < GameOverScreen roundNumber={roundsNumber} usernumber={chosenNumber} onstartGame={newGameStart}/>
  }

  return <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>

    <ImageBackground
      source={require('./assets/images/background.png')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >

    <SafeAreaView style={styles.rootScreen}>

      {screen}
      </SafeAreaView>
    </ImageBackground>
  </LinearGradient>

}

const styles = StyleSheet.create({

  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }

});
