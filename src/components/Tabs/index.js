import React from 'react';

import { ScrollView, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles'

export default function Tabs() {
    const menu = [
        {
            id: '1',
            title: 'Recarga de Celuar',
            icon: require('../../assets/Tab_Item_Phone.png'),
        },
        {
            id: '2',
            title: 'Me ajuda',
            icon: require('../../assets/Tab_Item_Help.png'),
        },
        {
            id: '3',
            title: 'Indicar amigos',
            icon: require('../../assets/Tab_Item_Friends.png'),
        },
        {
            id: '4',
            title: 'Depositar',
            icon: require('../../assets/Tab_Item_Cash.png'),
        },
        {
            id: '5',
            title: 'Cobrar',
            icon: require('../../assets/Tab_Item_Cash2.png'),
        },
        {
            id: '6',
            title: 'Transferir',
            icon: require('../../assets/Tab_Item_Cash3.png'),
        },
        {
            id: '7',
            title: 'Ajustar  limite',
            icon: require('../../assets/Tab_Item_Limit.png'),
        },
        {
            id: '8',
            title: 'Bloquear cartão',
            icon: require('../../assets/Tab_Item_Lock.png'),
        },
        {
            id: '9',
            title: 'Cartão  virtual',
            icon: require('../../assets/Tab_Item_Card.png'),
        },

    ]

    function renderItem({ item: menu }) {
        return (
            <TouchableOpacity style={styles.item}>
                <Image style={styles.img} source={menu.icon}/>
                <View style={styles.areaText}>
                    <Text style={styles.text}>{menu.title}</Text>
                </View>
            </TouchableOpacity>     
        );
    }

    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={menu}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    );
}