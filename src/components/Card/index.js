import React from 'react';

import { View, Image, Text } from 'react-native';

import styles from './styles';

export default function Card() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <View style={styles.header}>
                        <Image style={styles.headerIcon} source={require('../../assets/Card_Card.png')} />
                        <Text style={styles.headerTitle}>Cartão de crédito</Text>
                    </View>
                    <View style={styles.main}>
                        <Text style={styles.mainTitle}>FATURA ATUAL</Text>
                        <View style={styles.mainValue}>
                            <Text style={styles.mainValue1}>R$ </Text>
                            <Text style={styles.mainValue2}>2.384</Text>
                            <Text style={styles.mainValue1}>,82</Text>
                        </View>
                        <View style={styles.mainLimit}>
                            <Text style={styles.mainLimit1}>Limite disponível</Text>
                            <Text style={styles.mainLimit2}>R$ 6.384,59</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bar}>
                    <View style={styles.bar2}></View>
                </View>
            </View>
            
            <View style={styles.footer}>
                <Image style={styles.footerIcon} source={require('../../assets/Card_Fork.png')} />
                <View>
                    <Text style={styles.footerDescription}>Compra mais recente em ifood</Text>
                    <Text style={styles.footerDescription}>*ifood no valor de R$ 30,00 o ...</Text>
                </View>
            </View>
        </View>
    );
}