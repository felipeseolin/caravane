import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class ListPage extends Component {
    render() {
        return (
            <View>
                <View style={styles.list}>
                    <Text>
                        Opção 1
                    </Text>
                    <Button title={'Essa!'} onPress={() => this.props.navigation.navigate('TripPage')} />
                </View>
                <View style={styles.list}>
                    <Text>Opção 2</Text>
                    <Button title={'Essa!'} onPress={() => this.props.navigation.navigate('TripPage')} />
                </View>
                <View style={styles.list}>
                    <Text>Opção 3</Text>
                    <Button title={'Essa!'} onPress={() => this.props.navigation.navigate('TripPage')} />
                </View>
                <View style={styles.list}>
                    <Text>Opção 4</Text>
                    <Button title={'Essa!'} onPress={() => this.props.navigation.navigate('TripPage')} />
                </View>
                <View style={styles.list}>
                    <Text>Opção 5</Text>
                    <Button title={'Essa!'} onPress={() => this.props.navigation.navigate('TripPage')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        borderWidth: 1,
        borderColor: 'black',
        height: 65,
        padding: 4
    }
});

export default ListPage;
