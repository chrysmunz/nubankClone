import React from 'react';

import { View, Image, Text } from 'react-native';

import styles from './styles';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={require('../../assets/Nubank_Logo.png')}/>
                <Text style={styles.nome}>Chrystian</Text>
            </View>
            <View style={styles.footer}>
                <Image source={require('../../assets/arrow.png')}/>
            </View>
        </View>
    );
    }