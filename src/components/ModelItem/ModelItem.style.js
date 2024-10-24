import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '45%',
        elevation: 1,
        borderRadius: 2,
        alignItems: 'center',
        alignSelf: 'center',
        margin: '2.5%',
        overflow: 'hidden',
        paddingTop: 20
    },
    imageView: {
        width: '100%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '85%',
        height: '85%',
        alignSelf: 'center',
    },
    modelName: {
        color: '#ffffff',
        textAlign: 'center',
        alignSelf: 'center',
    }
});

export default styles;