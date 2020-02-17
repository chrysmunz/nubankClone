import React from 'react';

import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles'

export default function Menu() {
    const menu = [
        {
            id: '1',
            title: 'Me ajuda',
            icon: require('../../assets/Tab_Item_Phone.png'),
        },
        {
            id: '2',
            title: 'Perfil',
            icon: require('../../assets/Tab_Item_Help.png'),
        },
        {
            id: '3',
            title: 'Configurar NuConta',
            icon: require('../../assets/Tab_Item_Friends.png'),
        },
        {
            id: '4',
            title: 'Configurar Cartão',
            icon: require('../../assets/Tab_Item_Cash.png'),
        },
        {
            id: '5',
            title: 'Configuração do app',
            icon: require('../../assets/Tab_Item_Cash2.png'),
        }
    ]

    function renderItem({ item: menu }) {
        return (
            <View>
                <TouchableOpacity style={styles.item}>
                    <View style={styles.areaIcon}>
                        <Image style={styles.icon} source={menu.icon}/>
                    </View>
                    <View style={styles.itemTitle}>
                        <Text style={styles.text}>{menu.title}</Text>
                    </View>
                    <View style={styles.itemArrow}>
                        <Image source={require('../../assets/Menu_Arrow.png')} />
                    </View>
                </TouchableOpacity>    
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={menu}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            <TouchableOpacity style={styles.exit}>
                <Text style={styles.exitText}>SAIR DA CONTA</Text>
            </TouchableOpacity>
        </View>
    );
}