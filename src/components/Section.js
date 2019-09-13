import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Title from './Title';

const Section = ({title, children}) => {
    return (
        <View style={styles.section}>
            {title ? <Title>{title}</Title> : <View/>}
            <View>
                {children}
            </View>
        </View>
    );
};

export default Section;

const styles = StyleSheet.create({
    section: {
        marginTop: 4,
        marginBottom: 4
    }
});
