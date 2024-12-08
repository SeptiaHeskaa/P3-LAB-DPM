import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => {
    return (
        <LinearGradient
            colors={['#ff0000', '#ffc1cc']} // Warna merah ke pastel
            style={styles.container}
        >
            <Text style={styles.title}>😊 Quotes App 😊</Text> {/* Emoji smile */}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#fff', // Warna teks tetap putih
        fontWeight: 'bold',
    },
});

export default Header;
