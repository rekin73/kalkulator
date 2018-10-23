import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Viewer from "./components/Viewer"
import Button from "./components/Button"


export default class App extends React.Component {
  constructor(props) {
    super(props);
    //this.handlePress = this.handlePress.bind(this.handlePress);
    //this.handlePP = this.handlePP.bind(this.handlePP, this, this.handlePress);
    this.generatePad = this.generatePad.bind(this);
    this.state = {
      array: [[1, 4, 7, "."], [2, 5, 8, 0], [3, 6, 9, "="], ["C", "/", "*", "-", "+"]],
      data: "0"
    };

  }
  onUpdate = (val) => {
    
    this.setState({
      data: val
    })
  };

  generatePad = function () {
    return (
      this.state.array.map((value, index) => {
        return (<View key={value.toString()} style={index != 3 ? styles.padNum : styles.padFun}>{

          value.map((value1) => {

            if (index != 3) {
              return <Button data={{ value: value1, color: "grey" }} key={value1.toString()} onUpdate={this.onUpdate} />
            }
            else {
              return <Button data={{ value: value1, color: "silver" }} key={value1.toString()} onUpdate={this.onUpdate}/>
            }

          })}
        </View>)
      })
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <Viewer data={this.state.data}/>
        

        <View style={styles.input}>
          {this.generatePad()}

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    flexDirection: 'column',
  },
  input: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'grey',
  },
  padNum: {
    backgroundColor: "yellow",
    flex: 1
  },
  padFun: {
    backgroundColor: "red",
    flex: 1
  }
});