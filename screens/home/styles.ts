import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ 
    rootContainer: {
    flex: 1,
    backgroundColor: '#131016',
  },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
        width: '100%',
    },
    image: {
        marginTop: 70,
        marginBottom: 70,
    },
    containerInput: {
        flexDirection: 'row',
        width: '90%',
        marginHorizontal:24,
        marginTop: -24, 
        marginBottom:32,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius:5,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    buttonAdd: {
        width: 56,
        height: 56,
        borderRadius:6,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtonAdd: {
        color: '#FFF',
        fontSize: 24
    }
})