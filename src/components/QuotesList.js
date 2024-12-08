import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Animated, { SlideInLeft } from 'react-native-reanimated'; // Pastikan ini terinstal
import { quotes } from '../utils/quotesData'; // Mengimpor data quotes

const QuotesList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(quotes); // Memasukkan data quotes ke dalam state
    }, []);

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Animated.View entering={SlideInLeft} style={styles.quoteCard}>
                    <Text style={styles.quoteText}>"{item.text}"</Text>
                    <Text style={styles.quoteAuthor}>- {item.author}</Text>
                </Animated.View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    quoteCard: {
        margin: 10,
        padding: 15,
        backgroundColor: '#ff0000', // Warna merah untuk background quotes
        borderRadius: 8,
        borderColor: '#ff0000', // 
        borderWidth: 2,
        shadowColor: '#ff0000', // 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    quoteText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff', // Teks berwarna putih
        marginBottom: 8,
    },
    quoteAuthor: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#fff', // Teks putih untuk penulis
        textAlign: 'right',
    },
});

export default QuotesList;
