import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, Image} from 'react-native';
import Container from '../components/Container';
import Section from '../components/Section';

class TripPage extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <Image style={styles.image}
                           source={{uri: 'https://i0.wp.com/www.vidadeturista.com/wp-content/uploads/2016/07/vista-rio-de-janeiro-rj.jpg?resize=800%2C445&ssl=1'}}
                    />
                    <Section title={'Disney'}>

                    </Section>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 220
    }
});

export default TripPage;
