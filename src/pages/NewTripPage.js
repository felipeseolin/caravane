import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';

import Container from '../components/Container';
import Section from '../components/Section';
import Input from '../components/Input';

import general from '../styles/general';

class NewTripPage extends Component {
    render() {
        return (
            <ScrollView>
                <Container>
                    <Section title={'Cadastrar nova caravana'}>
                        <Text style={general.text}>Lugar de saída</Text>
                        <Input/>

                        <Text style={general.text}>Lugar(es) de destino(s)</Text>
                        <Input/>

                        <Text style={general.text}>Data e horário de saída</Text>
                        <Input/>

                        <Text style={general.text}>Data e horário de volta</Text>
                        <Input/>

                        <Text style={general.text}>Números de lugares disponíveis</Text>
                        <Input/>

                        <Text style={general.text}>Tipo de veículo</Text>
                        <Input/>

                        <Text style={general.text}>Preço Total</Text>
                        <Input/>

                        <Text style={general.text}>Contato para dúvidas</Text>
                        <Input/>

                        <Button title={'Salvar'} onPress={''}/>
                    </Section>
                </Container>
            </ScrollView>
        );
    }
}

export default NewTripPage;
