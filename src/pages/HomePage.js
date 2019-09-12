import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Card from '../components/Card';
import Container from '../components/Container';

class HomePage extends Component {
    render() {
        return (
            <Container>
                <Card title={'Título legal'}>
                    Testando o componente card com um texto um tanto
                    quanto longo, apesar de cansar um pouco digitar
                </Card>
            </Container>
        );
    }
}

export default HomePage;
