import { StyleSheet,Text } from "react-native";

function instructionText({children,style}){


    return( <Text style={[styles.instructionText,style]}>{children}</Text>


    )
}


export default instructionText;

const styles = StyleSheet.create({

    instructionText:{

        fontFamily:'open-sans',
        fontSize:24,
        color:"#ddb52f"

    }

})