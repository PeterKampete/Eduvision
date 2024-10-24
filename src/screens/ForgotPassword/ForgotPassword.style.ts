import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    forgotPasswordText: {
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 60,
        color: '#4b4b4b'
    },
    image: {
        width: 140,
        height: 210,
        alignSelf: 'center',
        marginTop: 30
    },
    enterPhoneNumberText: {
        alignSelf: 'center',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: '#4b4b4b'
    },
    confirmationCodeText: {
        alignSelf: 'center',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
        color: '#ccc'
    },
    input: {
        width: '80%',
        height: 55,
        borderBottomWidth: 2,
        alignSelf: 'center',
        borderBottomColor: '#ccc',
        marginTop: 30
    },
    touch: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F56258',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 30,
        borderWidth: 0
    },
    sendText: {
        color: '#ffffff',
        fontWeight: '600',
        alignSelf: 'center',
        fontSize: 18
    },
    textContainer: {
        width: '80%',
        alignSelf: 'center',
    }
});

export default styles;