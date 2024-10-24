import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: '#C6BEB0',
        borderRadius: 8,
        padding: 30,
        marginTop: 80,
        marginBottom: 30,
        width: '90%',
        alignSelf: 'center',

    },
    image: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    },
    viewsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        height: 40,
        position: 'absolute',
        right: 10
    },
    imageView: {
        width: 170,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: '-20%',
        alignSelf: 'center',
        overflow: 'hidden',
        borderWidth: 0,
        borderColor: 'red',
        alignSelf: 'center',
    },
    viewsText: { 
        color: '#ffffff',
 },
    description: {
        color: '#ffffff',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 20
    },
    name: {
        color: '#ff7979',
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 60
    }
});

export default styles;