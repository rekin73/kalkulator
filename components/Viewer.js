import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Viewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ""
        };
    }

    render() {
        return (
            <View style={styles().viewer}>
                <Text>{this.state.data}</Text>
            </View>
        );
    }
}

const styles = (arg) => StyleSheet.create({
    text: { fontSize: 24, color: arg, },
    viewer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'aqua',
    },
});

export default Viewer;