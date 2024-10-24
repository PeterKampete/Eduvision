import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    eduvisionText: {
        position: 'absolute',
        alignSelf: 'center',
        top: height * 0.06 ,
        color: '#ffffff',
        zIndex: 99999,
        fontSize: 20,
        letterSpacing: 25

    },
    image: {
        width: 300,
        height: 200,
        top: height * 0.1,
        position: 'absolute',
        alignSelf: 'center'
    },
    largeText: {
        top: height * 0.45,
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 55,
        color: '#ecf0f1',
        zIndex: 99999,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    smallText: {
        top: height * 0.67,
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 16,
        color: 'rgba(205, 97, 51,0.6)',
        zIndex: 99999,
        textAlign: 'center',
    },
    poweredByDr: {
        bottom: 30,
        position: 'absolute',
        alignSelf: 'center',
        fontSize: 14,
        color: '#ffffff',
        zIndex: 99999,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    exploreBtn: {
        width: width * 0.75,
        height: 55,
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        top: height * 0.77,
        backgroundColor: '#130f40',
        borderRadius: 8
    },
    exploreTxt: {
        color: '#ffffff', 
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1.5
    },
    threeDText: {
        color: 'rgba(225, 95, 65,1.0)',
        fontWeight: 'bold',
    },
    augmentedRealityText: {
        color: 'rgba(225, 95, 65,1.0)',
        fontWeight: 'bold',
    }
});

export default styles