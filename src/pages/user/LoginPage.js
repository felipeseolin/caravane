import React, {Component} from 'react';
import { View, Text, Button } from 'react-native'

import Container from "../../components/Container";
import Input from "../../components/Input";

class LoginPage extends Component {
    render() {
        return (
            <Container>
                <Text>Login/Email:</Text>
                <Input/>

                <Text>Password:</Text>
                <Input/>

                <Text>Esqueceu sua senha?</Text>

                <Button
                    title={'Entrar'}
                    onPress={() => this.props.navigation.navigate('HomePage')}
                />

            </Container>
        );
    }
}

export default LoginPage;