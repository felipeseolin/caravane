import React, {Component} from 'react';
import {View, Text, ScrollView, Button} from 'react-native';

import Container from "../../components/Container";
import Input from "../../components/Input";

import general from "../../styles/general";

class EditInfoPage extends Component {
    render() {
        return (
            <ScrollView>
                <Container>

                    <Text style={general.text}>Nome Completo</Text>
                    <Input/>

                    <Text style={general.text}>E-mail</Text>
                    <Input/>

                    <Text style={general.text}>Telefone</Text>
                    <Input/>

                    <Text style={general.text}>Data de Nascimento</Text>
                    <Input/>

                    <Text style={general.text}>CEP</Text>
                    <Input/>

                    <Text style={general.text}>Cidade</Text>
                    <Input/>

                    <Text style={general.text}>Estado</Text>
                    <Input/>

                    <Text style={general.text}>Rua/Avenida</Text>
                    <Input/>

                    <Text style={general.text}>Bairro</Text>
                    <Input/>

                    <Button title={'Cadastrar'} onPress={() => this.props.navigation.navigate('HomePage')} />

                </Container>
            </ScrollView>
        );
    }
}

export default EditInfoPage;