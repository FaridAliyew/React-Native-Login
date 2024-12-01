import React from 'react';
import { Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { styles } from './orContinue.style';

function OrContinue() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Or continue with</Text>

            <View style={styles.iconContainer}>
                <View style={styles.iconWithText}>
                    <AntDesign name="google" size={24} color="black" />
                    <Text style={styles.iconText}>Google</Text>
                </View>

                <View style={styles.iconWithText}>
                    <FontAwesome5 name="facebook" size={24} color="black" />
                    <Text style={styles.iconText}>Facebook</Text>
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text2}>Don’t have account? </Text>
                <Text style={styles.text3}>Create now</Text>
            </View>
        </View>
    );
}

export default OrContinue;


