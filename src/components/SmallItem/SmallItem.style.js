import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
   container: (backgroundColor, index) => {
       let indexPlusTwoIsMultipleOfThree = (index + 2) % 3 
       return {
        width: width * 0.45,
        height: height * 0.32,
        alignSelf: 'center',
        marginVertical: 8,
        backgroundColor,
        borderRadius: 15,
        borderBottomRightRadius: indexPlusTwoIsMultipleOfThree ? 0 : 15,
        borderTopLeftRadius: indexPlusTwoIsMultipleOfThree ? 15 : 0,
        padding: 15,
        alignItems: "center"
       }
   },
   name: {
        color: '#000000',
        fontSize: width * 0.06,
        marginTop: 20,
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center'
   },
   numberOfLessons: {
        color: '#353b48'
   },
   startTouch: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        height: '32%',
        height: 45,
        backgroundColor: '#ffffff',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 8,
    },
    starIcon: {
        position: 'absolute',
        top: 20,
        right: 15,
    },
    forFreeText:{
        fontWeight: 'bold',
    },
    startText: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginRight: 5,
        fontSize: 16
    },
    priceAndStart: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width: '100%',
        justifyContent: "space-around",
        marginTop: 10
    },
    imageContainer: {
        width: '80%',
        height: '45%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles