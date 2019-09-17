import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import Container from '../components/Container';
import Section from '../components/Section';

import general from "../styles/general";
import Input from "../components/Input";

class BuyPage extends Component {
    render() {
        return (
            <Container>

                <Text>Nome completo:</Text>
                <Input/>

                <Text>Data de nascimento: </Text>
                <Input/>

                <Text>CPF:</Text>
                <Input/>

                <Text>Documento com foto (RG, CNH):</Text>
                <Input/>

                <Text>Forma de pagamento:</Text>
                <Input/>

                <Button title={'Finalizar'} onPress={() => this.props.navigation.navigate('TripPage')} />

            </Container>
        );
    }
}

export default BuyPage;