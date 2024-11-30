import React from 'react';
import { Image, ImageBackground, Text, View, StyleSheet } from 'react-native';
import { styles } from './header.style';

function Header() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../../images/Subtract.png')}
        >
            <View style={styles.contentContainer}>
                <Image
                    style={styles.image}
                    source={require('../../images/TheTolet.png')}
                />
                <View>
                    <Text style={styles.title}>The Tolet</Text>
                    <Text style={styles.subtitle}>Find Your House</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Header;
