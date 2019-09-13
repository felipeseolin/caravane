import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Container from '../components/Container';
import Title from '../components/Title';
import Section from '../components/Section';
import Input from '../components/Input';

class SearchPage extends Component {
    render() {
        const {navigation} = this.props;
        const cidade = navigation.getParam('cidade', 'Cornélio Procópio');
        return (
            <Container>
                <Title>Caranava para:{cidade ? cidade : ''}</Title>

                <Section>
                    <View>
                        <Text>Selecione o local de saida:</Text>
                        <Input/>

                        <Text>Selecione a data de partida:</Text>
                        <Input/>

                        <Button title={'Listar'}
                                onPress={() => this.props.navigation.navigate('ListPage')}
                        />
                    </View>
                </Section>
            </Container>
        );
    }
}

export default SearchPage;
