import { View, Text, Pressable, StyleSheet } from "react-native";
function Buttons({ children ,onPress}) {

  

    return (
        <View style={styles.outerContainer}>

            <Pressable
                style={({ pressed }) => 
                pressed ? [styles.innerContainer, styles.pressedIos] 
                : styles.innerContainer}


                onPress={onPress}
                android_ripple={{ color: '#640233' }}>

                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>

        </View>
    )

}

export default Buttons;

const styles = StyleSheet.create({

    outerContainer: {

        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',

    },

    innerContainer: {
        backgroundColor: "#72063c",
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4,



    },

    buttonText: {

        color: 'white',
        textAlign: 'center',

    },


    pressedIos: {
        opacity: 0.75,
    }

})