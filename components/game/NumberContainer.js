import { View,Text, StyleSheet, Dimensions } from "react-native";

function NumberContainer({children}){


    return <View style={styles.container}>
    
    <Text style={styles.text}>
    {children}
    
    </Text>
    
    </View>

}


export default NumberContainer;

const dimensionWitdh = Dimensions.get('window').width;

const styles = StyleSheet.create({

    container:{

         borderWidth:4,
         borderColor: '#ddb52f',
         padding:dimensionWitdh < 380 ? 12 : 24,
         margin:dimensionWitdh < 380 ? 12 : 24,
         borderRadius:8,
         alignItems:'center',
         justifyContent:'center',

    },

    text:{
        fontFamily:'open-sans-bold', 
        color: '#ddb52f',
        fontSize:36,
        // fontWeight:'bold'


    }

})