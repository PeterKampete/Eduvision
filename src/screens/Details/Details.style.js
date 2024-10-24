import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '3%',
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        flex: 1
    },
    modelViewCard: {
        marginTop: '3%',
        width: '100%',
        height: 0.55 * height,
        elevation: 5,
        alignSelf: 'center',
        shadowColor: 'red',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex:99999
    },
    detailsText: {
        alignSelf: 'center',
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 25
    },
    changeView: {
        width: '20%',
        height: 55,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        zIndex: 9999,
        right: 10,
    },
    touchText: {
        color: '#e84393',
        fontWeight: 'bold',
        fontSize: 20
    },
    modelView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    titleText: {
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 20
    },
    modelLoadingText: {
        position: 'absolute',
        fontSize: 16
    },
    lableAndRotateViews: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        padding: 3,
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    labelButton: {
        height: '100%',
        borderRadius: 10,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#273c75',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 5
    },
    rotateButton: {
        height: '100%',
        borderRadius: 10,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ee5253',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 5
    },
    labelText: {
        color: '#ffffff',
        fontWeight: '200'
    },
    rotateButtonText: {
        color: '#000000',
        fontWeight: '600'
    },
    imageView: {
        width: '100%',
        height: 0.4 * height,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginVertical: 20
    },
    image: {
        width: '100%',
        height: '100%',
    },
    definition: {
        fontSize: 16,
        fontWeight: '600',
        color: '#57606f',
        letterSpacing: 1.5,
        textAlign: 'center',
        lineHeight: 30,
        marginVertical: 10,
        alignSelf: 'center'
    },
    functionOfParts: {
        marginVertical: 10,
        alignSelf: 'center',
        fontSize: 22,
        textDecorationLine: 'underline',
        color: '#833471',
        fontWeight: 'bold'
    },
    functionsContainer: {
        width: '100%',
    },
    takeQuizBtn: {
        width: '100%',
        height: 55,
        backgroundColor: '#9980FA',
        borderRadius: 8,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    takeQuizTxt: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    enableScrollBtn: {
        backgroundColor: '#fa8231',
        height: '100%',
        borderRadius: 10,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 5
    },
    enableScrollText: {
        color: '#fff',
        fontWeight: '600'
    }
});

export default styles;