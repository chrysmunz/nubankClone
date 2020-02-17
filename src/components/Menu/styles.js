import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 40,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 7,
        borderTopWidth: 0.5,
        borderColor: '#d6d7da',
    },
    areaIcon:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55,
    }, 
    icon: {
        marginLeft: 10,
    },
    itemTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: '#FFF',
        marginLeft: 20
    },
    itemArrow: {
        position: 'absolute',
        marginLeft: 290
    },
    exit: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 16,
        borderRadius: 7,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    exitText:{
        color: '#FFF',
        fontWeight: 'bold'
    }
})

export default styles;