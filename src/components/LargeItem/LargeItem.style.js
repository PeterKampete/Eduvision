import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
   container: (backgroundColor, index) => {
       let multipleOfSix = index % 6  == 0
       return {
        width: '100%',
        height: height * 0.26,
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor,
        borderTopLeftRadius: multipleOfSix ? 15 : 0,
        borderBottomRightRadius: multipleOfSix ? 0 : 15,
        borderRadius: 15,
        padding: 15
       }
   },
   name: {
       color: '#000000',
       fontSize: 30,
       marginBottom: 0,
       fontWeight: 'bold'
   },
   numberOfLessons: {
       color: '#353b48',
       marginTop: 30
   },
   startTouch: {
       width: '40%',
       flexDirection: 'row',
       alignItems: 'center',
       height: '32%',
       backgroundColor: '#23232C',
       justifyContent: 'center', 
       alignItems: 'center',
       borderRadius: 8,
       marginTop: 25
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
   imageContainer: {
       width: '50%',
       height: '80%',
       position: 'absolute',
       right: 20,
       top: '20%',
       justifyContent: 'center',
       alignItems: 'center'
   }
});

export default styles