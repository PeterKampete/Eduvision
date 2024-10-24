import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 0.6,
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#130f40',
        textAlign: 'center'
    },
    description: {
        fontWeight: '300',
        marginBottom: 10,
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64
    }
})

export default styles