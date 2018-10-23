import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Button extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this)
        this.state = {
            value: this.props.data.value,
            bColor: this.props.data.color,
            tColor: "white",

        };
        //styles(this.state.tColor);

    }
    onPress(event) {
        this.props.handleViewer(this.state.value.toString())
    }
    update = (e) => {
        console.log(this.state.value);
        this.props.onUpdate(this.state.value);
        //this.setState({fieldVal: e.target.value});
      };
    render() {
        return (

            <TouchableOpacity style={styles({ b: this.state.bColor }).viewer} onPress={this.update}>
                <View>
                    <Text style={styles({ c: this.state.tColor }).text}>{this.state.value}</Text>
                </View>
            </TouchableOpacity>

            //<View><Text style={styles(this.state.tColor).text}>{this.state.value}</Text></View>
        );
    }
}

const styles = (arg) => StyleSheet.create({
    text: { fontSize: 36, color: arg.c, },
    viewer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: arg.b,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default Button;