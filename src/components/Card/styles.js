import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 14,
        marginTop: 40,
        marginBottom: 50,
        borderRadius: 2,
        height: 370
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        margin: 30,
        alignItems: 'center',
    },
    headerIcon: {
        opacity: 0.6
    },
    headerTitle: {
        marginLeft: 20,
        fontSize: 16,
        opacity: 0.6
    },
    bar: {
        backgroundColor: '#32CD32',
        width: 10,
        height: '120%',
        borderRadius: 3,
    },
    bar2: {
        backgroundColor: '#00BFFF',
        width: 10,
        height: '30%',
        borderRadius: 3,
    },
    main: {
        margin: 28
    },
    mainTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00BFFF'
    },
    mainValue:{
        flexDirection: 'row'
    },
    mainValue1: {
        fontSize: 32,
        marginLeft: 2,
        color: '#00BFFF'
    },
    mainValue2: {
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 2,
        color: '#00BFFF'
    },
    mainLimit: {
        flexDirection: 'row'
    },
    mainLimit1: {
        fontSize: 15
    },
    mainLimit2: {
        fontSize: 15,
        color: '#32CD32',
        marginLeft: 8
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#FFFAFA',
        marginTop: 40,
        height: 90,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    footerIcon: {
        opacity: 0.7,
        marginLeft: 20,
        opacity: 0.6
    },
    footerDescription: {
        marginRight: 60,
        opacity: 0.6
    }
})

export default styles;