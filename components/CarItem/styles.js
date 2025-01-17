import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    carContainer: {

        width: '100%',
        height: Dimensions.get('window').height,


    },
    titles: {
        marginTop: '30%',
        width: '100%',
        height: '100%',

    },

    title: {
        fontSize: 40,
        fontWeight: '600',
        marginLeft: 110

    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62',
        marginLeft: 110
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 170,
        width: '100%',
    },
    subtitleCTA: {
        textDecorationLine: 'underline',

    }
});

export default styles;