import React from 'react';

import { SafeAreaView } from 'react-native';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
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
