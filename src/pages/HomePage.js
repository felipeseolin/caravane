// Lib components
import React, {Component} from 'react';
import {Text, View, Button, TextInput, ScrollView} from 'react-native';
// My components
import Card from '../components/Card';
import Container from '../components/Container';
import Section from '../components/Section';
// Styles
import general from '../styles/general';
import colors from '../styles/colors';
import Input from '../components/Input';

type Props = {}

class HomePage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            cidade: ""
        }
    }

    render() {
        return (
            <ScrollView>
                <Container>
                    <Section>
                        <Text style={general.text}>Busque a caravana perfeita para você!</Text>
                        <Input value={this.state.cidade}/>
                        <Button
                            title={'Buscar!'}
                            color={'#2ab7ca'}
                            onPress={() => this.props.navigation.navigate('SearchPage', {cidade: this.state.cidade})}
                        />
                    </Section>
                    <Section title={'Categorias'}>
                        <Text style={[general.text]}>
                            Procure por categoria
                        </Text>
                        <Card title={'Rio de Janeiro'}>Pão de Açúcar</Card>
                    </Section>
                    <Section title={'As mais pesquisadas'}>
                        <Text style={general.text}>
                            Veja as caravanas mais pesquisadas
                        </Text>
                        <Card title={'Rio de Janeiro'}>Pão de Açúcar</Card>
                    </Section>
                    <Section title={'Últimas vagas'}>
                        <Text style={general.text}>
                            Corre que está acabando
                        </Text>
                        <Card title={'Rio de Janeiro'}>Pão de Açúcar</Card>
                    </Section>
                </Container>
            </ScrollView>
        );
    }
}

export default HomePage;
