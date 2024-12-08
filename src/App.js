import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import QuotesList from './components/QuotesList';
import Header from './components/Header';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <QuotesList />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc0cb',
    },
});

export default App;
