import { TextInput, View, StyleSheet, Alert ,useWindowDimensions,KeyboardAvoidingView,ScrollView} from "react-native";
import {useState} from 'react';
import Buttons from "../components/ui/Buttons";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";


function StartGameScreen({onPickNumber}) {
const [enteredNumber, setEnteredNumber] = useState('');
const { weight, height} = useWindowDimensions();

function numberInputHandler(enteredText){

setEnteredNumber(enteredText);



}

function resetInoutHandler(){
    setEnteredNumber('');
}



function confirmButtonHandler(){

    const num = parseInt(enteredNumber);

    if(isNaN(num) || num<=0 || num>99){
         Alert.alert(

            'Invalid Number!','Number has to be between 1 and 99',[{text: 'Okay', style: "destructive",onPress:resetInoutHandler}]
         )

    return;

    }

    onPickNumber(num);

    



}


    const marginTopDimension = height;

    return (
        <ScrollView style ={styles.screen}>
        <KeyboardAvoidingView style = {styles.screen} behavior='position'>
        
        <View style ={[styles.rootCOntainer, {marginTop: height<380 ? 40:100}]}>

        <Title>Guess My Numbers</Title>
        <Card >

        <InstructionText>Enter a Number</InstructionText>
        <TextInput style={styles.numberInput}  
        maxLength={2} 
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value = {enteredNumber}
        onChangeText={numberInputHandler}
        
        />

        <View style = {styles.buttonsContainer}>
        <View style ={styles.buttonContainer}>
        <Buttons onPress={resetInoutHandler}>Reset</Buttons>
        </View>

        <View style={styles.buttonContainer}>
        <Buttons   onPress={confirmButtonHandler}>Confirm</Buttons>

        </View>
        </View>

    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
    
    )



}

export default StartGameScreen;


const styles = StyleSheet.create({


    screen:{
        flex:1
    },

    rootCOntainer:{

        flex:1,
        marginTop:100,
        alignItems:'center',
        textAlign:"center",
        

    },


    numberInput: {

        height: 50,
        width:50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        color: '#ddb52f',
        borderBottomWidth: 2,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign:"center",

    },

    buttonsContainer:{
        flexDirection:'row'
    },

    buttonContainer:{
        flex:1

         
    },

    instructionText:{

        fontSize:24,
        color:"#ddb52f"

    }

})

