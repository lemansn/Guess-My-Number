import { Text, View, Image, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Buttons from "../components/Buttons";
import Title from "../components/Title";

function GameOverScreen({roundNumber,usernumber, onstartGame}) {

    return (

        <View style={styles.rootContainer}>

            <Title>GAME OVER!</Title>

            <View style={styles.imageStyle}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />

            </View>

            <View>

                <Text style={styles.summaryText}>
                    Your phone needed 
                    <Text style={styles.highlight}> {roundNumber} </Text> 
                    rounds to guess the number 
                    <Text style={styles.highlight}> {usernumber}</Text>.
                    
                    
                </Text>
            </View>

            <Buttons onPress={onstartGame}>Starts New Game</Buttons>

        </View>










    )
}


export default GameOverScreen;


const styles = StyleSheet.create({


    rootContainer: {

        flex: 1,
        marginTop:100,
        padding: 36,
        alignContent: 'center',
        alignItems: 'center'


    }

    ,



    imageStyle: {

        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        overflow: 'hidden',
        margin: 36,
        borderColor: '#3b021f'
    },

    image: {
        width: '100%',
        height: '100%'
    },

    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom:24,
        color:"#800000"

    },

    highlight:{
        fontFamily:'open-sans-bold',
        color:'#ddb52f'
    }




})