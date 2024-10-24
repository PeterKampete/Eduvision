import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    loadingModelText: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 50,
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 25,
        top: height / 1.6
    }
});

export default style