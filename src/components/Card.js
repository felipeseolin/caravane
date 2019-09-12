import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = ({title, children}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 4
    },
    title: {
        fontSize: 24,
        marginBottom: 4
    },
    description: {
        fontSize: 18
    }
});

export default Card;
