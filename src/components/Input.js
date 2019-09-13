import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.value,
        }
    }

    render() {
        return (
            <TextInput
                style={styles.textInput}
                maxLength={50}
                onChangeText={text => this.setState({text: text})}
                value={this.state.text}
                editable
            />
        );
    }
}

export default Input;

const styles = StyleSheet.create({
    textInput: {
        borderColor: '#363636',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 8,
    },
});
