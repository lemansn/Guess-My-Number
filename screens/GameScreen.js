import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import Buttons from "../components/Buttons";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons';
import GUessLogItem from "../components/game/GuessLogItem";


function generateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomNumber(min, max, exclude);

    }
    else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {


    const initialGuess = generateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])


    useEffect(() => {

        if (currentGuess === userNumber)
            onGameOver(guessRounds.length);

    }, [currentGuess, userNumber, onGameOver]);


    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;

    }, [])

    function newGuessHandler(direction) {

        if ((direction === 'lower' && currentGuess < userNumber)
            || (direction === 'greater' && currentGuess > userNumber)) {


            Alert.alert("Don't lie!", "You know that this is wrong...",
                [{ text: 'Sorry!', style: 'cancel' }])

            return;


        }



        if (direction === 'lower') {
            console.log(maxBoundary)
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);

        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);

    }

    const guessNumberLength = guessRounds.length


    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>

        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>

            <View style={styles.buttonsContainer}>


                <View style={styles.buttonContainer}>

                    <Buttons onPress={newGuessHandler.bind(this, 'lower')}>

                        <Ionicons name='md-remove' size={24} color='white' />

                    </Buttons>

                </View>

                <View style={styles.buttonContainer}>

                    <Buttons onPress={newGuessHandler.bind(this, 'greater')}>

                        <Ionicons name='md-add' size={24} color='white' />


                    </Buttons>

                </View>



            </View>

            {/*+ or -*/}

        </Card>

        <View style={styles.listContainer}>


            <FlatList
                data={guessRounds}
                renderItem={(itemData) => <GUessLogItem roundNumber={guessNumberLength - itemData.index}  guess={itemData.item}/>}
                keyExtractor={(item) => item}


            />

        </View>

    </View>


}

export default GameScreen;


const styles = StyleSheet.create({

    screen: {
        marginTop: 16,
        padding: 24,
        flex: 1,
    },


    buttonsContainer: {
        flexDirection: 'row'
    },

    buttonContainer: {
        flex: 1


    },

    instructionText: {
        marginBottom: 12,

    },

    listContainer:{
        flex:1,
        padding:16
    }



})