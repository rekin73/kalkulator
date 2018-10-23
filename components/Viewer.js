import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Viewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "",
            value:"123"
        };
    }
    componentWillReceiveProps=(props)=>{
        if(props.data=='='){
    this.setState({
        value:eval(this.state.data)
    })
}else if(props.data=='C'){
    this.setState({
        data:"",
        value:""
    })
}else{
    this.setState({
        data:this.state.data+props.data
    })
}
}
    render() {
        return (
            <View style={styles().viewer} >
                <Text style={styles().text}textBreakStrategy={'highQuality'}>{this.state.data}</Text>
                <Text style={styles().text1}>{this.state.value}</Text>
            </View>
        );
    }
}

const styles = (arg) => StyleSheet.create({
    text: { fontSize: 24, color: arg, },
    viewer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'aqua',
        
        
    },
    text:{
        flex:2,
        fontSize:80,
        alignSelf:'flex-end',
textAlign:'right',
    },
    text1:{
        flex:1,
        fontSize:40,
        //alignSelf:'flex-end',
textAlign:'right',

    }
});

export default Viewer;