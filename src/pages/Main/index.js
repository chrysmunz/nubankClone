import React from 'react';

import { View, SafeAreaView, Text } from 'react-native';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
import Card from '../../components/Card';

import styles from './styles'

export default function Main() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Card />
            <Tabs />
        </SafeAreaView>
        
    );
}
