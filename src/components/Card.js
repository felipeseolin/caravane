import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Card = ({title, children}) => {
    return (
        <ImageBackground style={styles.card} source={{uri: 'https://i0.wp.com/www.vidadeturista.com/wp-content/uploads/2016/07/vista-rio-de-janeiro-rj.jpg?resize=800%2C445&ssl=1'}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{children}</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 4,
        width: 150,
        height: 150
    },
    title: {
        fontSize: 24,
        marginBottom: 4,
    },
    description: {
        fontSize: 18,
    },
});

export default Card;
