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
    inputFocused: {
        borderColor: '#5E60CE',
        borderWidth: 1,
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
    },
    containerMakeDone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 24,
        marginBottom: 21,
    },
    containerText:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    textMake: {
        color: '#4EA8DE',
        fontSize: 14,
        marginRight: 8,
        fontWeight: 'bold',
    },
    number: {
        color: '#F2F2F2',
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontSize: 12,
        fontWeight: 'bold',
    },
    numberView: {
        backgroundColor: '#333333',
        borderRadius: 90,
    },
    textDone: {
        color: '#8284FA',
        fontSize: 14,
        marginRight: 8,
        fontWeight: 'bold',
    },
    containerClipboard: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 370,
        borderTopColor: '#333333',
        borderTopWidth: 1,
        marginHorizontal: 24,
    },
    textClipboard: {
        color: '#808080',
        fontSize: 14,
    },
    textClipboardBold: {
        color: '#808080',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 16,
    },
    viewText:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTask: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 370,
        marginHorizontal: 24,
    },

})