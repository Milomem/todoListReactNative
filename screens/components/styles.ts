import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "90%",
        marginHorizontal: 24,
        padding: 12,
        backgroundColor: '#262626',
        borderRadius: 10,
        borderColor: '#333333',
        borderWidth: 1,
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#F2F2F2',
        width: '79%',
        marginHorizontal: 8,
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4EA8DE',
    },
    Image: {
        width: 45,
        height: 32,
    },
    isSelected: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#5E60CE',
        borderColor: '#5E60CE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vector: {
        width: 10,
        height: 10,
    },
    textLineThrough: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#808080',
        width: '79%',
        marginHorizontal: 8,
        textDecorationLine: 'line-through',
    }
})