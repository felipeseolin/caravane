import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import Container from '../components/Container';
import Section from '../components/Section';

import general from "../styles/general";

class TripPage extends Component {
    render() {
        return (
            <View>
                <Image style={styles.image}
                       source={{uri: 'https://i0.wp.com/www.vidadeturista.com/wp-content/uploads/2016/07/vista-rio-de-janeiro-rj.jpg?resize=800%2C445&ssl=1'}}
                />
                <Container>
                    <ScrollView>
                        <Section title={'Rio de Janeiro'}>
                            <Text style={general.text}>Viagem de: Cornélio Procópio/PR</Text>
                            <Text style={general.text}>Viagem para: Rio de Janeiro/RJ</Text>
                            <Text style={general.text}>Data de partida: 10/10/2019</Text>
                            <Text style={general.text}>Data de chegada: 10/11/2019</Text>
                            <Text style={general.text}>Vagas disponíveis: 12</Text>
                            <Text style={general.text}>Preço: R$150,00</Text>

                            <Button title={'Comprar'}
                                    onPress={() => this.props.navigation.navigate('BuyPage')}
                            />
                        </Section>
                    </ScrollView>
                </Container>
            </View>
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
