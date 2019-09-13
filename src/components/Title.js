import React from 'react';
import { Text, StyleSheet } from 'react-native';

import colors from '../styles/colors';

const Title = ({children}) => {
    return (
        <Text style={[styles.title, colors.dark]}>{ children }</Text>
    );
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        marginTop: 8,
        marginBottom: 8
    }
});
