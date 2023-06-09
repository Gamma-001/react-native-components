import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    item: {
        flexDirection: 'row',

        padding: 10,
    },
    itemRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',

        marginRight: 10
    },

    input: {
        backgroundColor: '#fff',
        padding: 10,
    },
    flag: {
        width: 28,
        height: 28,
        marginHorizontal: 10,
    },

    itemText: {
        color: '#000'
    }
});

export default style;