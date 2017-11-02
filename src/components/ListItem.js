import React, { Component } from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  onPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableNativeFeedback onPress={this.onPress.bind(this)} useForeground>
        <View>
          <CardSection>
            <Text style={styles.title}>{ name }</Text>
          </CardSection>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    padding: 10,
    paddingLeft: 15,
  }
};

export default ListItem;
