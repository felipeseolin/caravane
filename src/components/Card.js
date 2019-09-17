import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

const Card = ({title, children}) => {
    return (
        <View style={styles.card}>
            <Image
            source={{uri: 'https://i0.wp.com/www.vidadeturista.com/wp-content/uploads/2016/07/vista-rio-de-janeiro-rj.jpg?resize=800%2C445&ssl=1'}}
            style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        borderWidth: 1,
        width: 160,
        padding: 4,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
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
