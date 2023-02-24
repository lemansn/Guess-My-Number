import { View,Text, StyleSheet } from "react-native";

function GUessLogItem({roundNumber,guess}){

    return <View style={styles.listItem}>
    <Text style={styles.itemText}>#{roundNumber}</Text>
    <Text style ={styles.itemText}>Opponent's guess: {guess}</Text>
    
    </View>
}


export default GUessLogItem;

const styles = StyleSheet.create({

    listItem:{
        borderColor:'#3b021f',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:'#ddb52f',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width :0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3


    },

    itemText:{
        fontFamily: 'open-sans',
    }

}) 